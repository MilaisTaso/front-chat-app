import React from 'react';
import { z } from 'zod';
import { useErrorBoundary } from 'react-error-boundary';

import { toast } from 'react-toastify';
import { Form } from '@/components/Form/Form';
import { Chat, useCreateChat, useCreateChatOptions } from '../api/createChat';
import { TextAreaField } from '@/components/Form/TextAreaField';
import { Button } from '@/components/Elements/Button';

type CreateChatProps = {
  customerId: string;
};

const schema = z.object({
  content: z
    .string()
    .min(2, { message: '2文字以上で入力して下さい' })
    .nullable(),
});

export const CreateChat: React.FC<CreateChatProps> = ({ customerId }) => {
  const chatOptions: useCreateChatOptions = {
    path: `chat/${customerId}`,
  };
  const mutate = useCreateChat(chatOptions);
  const { showBoundary } = useErrorBoundary();

  return (
    <Form<Chat['data'], typeof schema>
      id="create-chat"
      schema={schema}
      onSubmit={async (values: Chat['data']) => {
        await mutate.mutateAsync({
          data: {
            content: values.content,
            customerId,
            createdAt: new Date().toString(),
          },
        });
        if (mutate.isSuccess) {
          toast.success('メッセージを作成しました');
        }
        if (mutate.isError) {
          showBoundary(mutate.error);
        }
      }}
    >
      {({ register, formState }) => {
        return (
          <div className='flex items-center border border-4 border-gray-300 rounded-md mx-6 my-6 shadow-md'>
            <TextAreaField
              id="message"
              error={formState.errors.content}
              registration={register('content')}
              className='flex-auto'
            />
            <Button type="submit" size='sm' className='bg-gray-950'>Send</Button>
          </div>
        );
      }}
    </Form>
  );
};
