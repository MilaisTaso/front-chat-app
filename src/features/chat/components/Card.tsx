import React from 'react';
import { ConfirmationDialog } from '@/components/Dialog/ConfirmDialog';
import { Button } from '@/components/Elements/Button';

export type CardProps = {
  id?: string;
  subtitle: string;
  imagePath: string;
  content: string;
};

export const Card: React.FC<CardProps> = ({
  id,
  subtitle,
  imagePath,
  content,
}) => {
  return (
    <div
      key={id ?? subtitle}
      className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4 w-4/5"
    >
      <ConfirmationDialog
        icon="info"
        title="Your Profile"
        body="Your Profile Content"
        triggerButton={
          <Button size='sm'>
            <img
              src={imagePath}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          </Button>
        }
        confirmButton={
          <Button size='sm'>
            編集
          </Button>
        }
      />
      <div>
        <p className="font-bold">{subtitle}</p>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};
