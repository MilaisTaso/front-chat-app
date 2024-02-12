import React, { useEffect } from 'react';
import { z } from 'zod';
import { useErrorBoundary } from 'react-error-boundary';

import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { ProtectedLayout } from '@/components/Layout/ProtectedLayout';
import { Form } from '@/components/Form/Form';
import { customerAtom } from '@/features/auth/state/auth';
import { Chat, useCreateChat, useCreateChatOptions } from '../api/chat';
import { TextAreaField } from '@/components/Form/TextAreaField';
import { Button } from '@/components/Elements/Button';

const schema = z.object({
  content: z
    .string()
    .min(2, { message: '2文字以上で入力して下さい' })
    .nullable(),
});

const chatOptions: useCreateChatOptions = {
  path: 'chat',
};
export const ChatPage: React.FC = () => {
  const [customer] = useAtom(customerAtom);
  const mutate = useCreateChat(chatOptions);
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  useEffect(() => {
    if (customer) {
      navigate('/');
    }
  }, [customer, navigate]);

  return (
    <ProtectedLayout>
      <h1 className="text-heading2">Chat Room</h1>
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
                  created_at: new Date().toDateString(),
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
