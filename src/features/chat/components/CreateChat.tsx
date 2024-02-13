import React, { useEffect } from 'react';
import { z } from 'zod';
import { useErrorBoundary } from 'react-error-boundary';

import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { ProtectedLayout } from '@/components/Layout/ProtectedLayout';
import { Form } from '@/components/Form/Form';
import { customerAtom } from '@/features/auth/state/use-auth';
import { Chat, useCreateChat, useCreateChatOptions } from '../api/createChat';
import { TextAreaField } from '@/components/Form/TextAreaField';
import { Button } from '@/components/Elements/Button';
import { useChats } from '../state/use-chats';

const schema = z.object({
  content: z
    .string()
    .min(2, { message: '2文字以上で入力して下さい' })
    .nullable(),
});

const chatOptions: useCreateChatOptions = {
  path: 'chat',
};
export const CreateChat: React.FC = () => {
  const [customer] = useAtom(customerAtom);
  const mutate = useCreateChat(chatOptions);
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();
  const chats = useChats();

  useEffect(() => {
    if (customer) {
      navigate('/');
    }
  }, [customer, navigate]);

  return (
    <ProtectedLayout>
      <h1 className="text-heading2">Chat Room</h1>
      <div>
        {chats.map((chat) => (
          <p key={chat.id}>{chat.data.content}</p>
        ))}
      </div>
      <div>
        <Form<Chat['data'], typeof schema>
          id="create-chat"
          schema={schema}
          onSubmit={async (values: Chat['data']) => {
            try {
              await mutate.mutateAsync({
                data: {
                  content: values.content,
                  customerId: customer!.id,
                  created_at: new Date().toString(),
                },
              });
            } catch {
              showBoundary(mutate.error);
            }
          }}
        >
          {({ register, formState }) => {
            return (
              <>
                <TextAreaField
                  id="message"
                  label="メッセージ"
                  error={formState.errors.content}
                  registration={register('content')}
                />
                <Button type="submit">送信</Button>;
              </>
            );
          }}
        </Form>
      </div>
    </ProtectedLayout>
  );
};
