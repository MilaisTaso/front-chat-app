import React from 'react';
import { ConfirmationDialog } from '@/components/Dialog/ConfirmDialog';
import { Button } from '@/components/Elements/Button';

export type CardProps = {
  subtitle: string;
  imagePath: string;
  content: string;
};

export const Card: React.FC<CardProps> = ({ subtitle, imagePath, content }) => {
  return (
    <div className="p-4 flex space-x-2 w-4/5">
      <ConfirmationDialog
        icon="info"
        title="Your Profile"
        body="Your Profile Content"
        triggerButton={
          <Button
            size="sm"
            className="py-0 px-0 bg-white border-none shadow-none"
          >
            <img
              src={imagePath}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          </Button>
        }
        confirmButton={<Button size="sm">編集</Button>}
      />
      <div className="border border-black rounded-lg flex w-3/5 flex-col gap-2 p-3">
        <p className="font-bold">{subtitle}</p>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};
