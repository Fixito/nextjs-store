'use client';

import { useEffect } from 'react';

import { useFormState } from 'react-dom';

import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
}
