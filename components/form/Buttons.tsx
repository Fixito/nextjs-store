'use client';

import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { LuSquarePen, LuTrash2 } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type actionType = 'edit' | 'delete';

export function IconButton({ actionType }: { actionType: actionType }) {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuSquarePen />;
      case 'delete':
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button type="submit" variant="link" className="cursor-pointer p-2">
      {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  );
}
