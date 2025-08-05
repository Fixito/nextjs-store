'use client';

import Image from 'next/image';
import { useState } from 'react';

import { type actionFunction } from '@/utils/types';

import { Button } from '../ui/button';
import { SubmitButton } from './Buttons';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

export default function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  const [isUpadteFormVisible, setIsUpadteFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mb-4 block h-[200px] w-[200px] rounded object-cover"
        priority
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpadteFormVisible(!isUpadteFormVisible)}
      >
        {text}
      </Button>
      {isUpadteFormVisible && (
        <div className="mt-4 max-w-md">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
