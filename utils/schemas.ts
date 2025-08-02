import { z } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(100, {
      message: 'Name must be less than 100 characters.',
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: 'Price must be a positive number.',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'Description must be between 10 and 1000 words.',
    }
  ),
});

export function validateWithZodSchema<T>(schema: z.ZodSchema<T>, data: unknown,): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.issues.map(issue => issue.message);
    throw new Error(errors.join(' '));
  }

  return result.data;
}

export const imageSchema = z.object({
  image: validateImageFile()
});

export function validateImageFile() {
  const maxUploadSize = 1024 * 1024; // 1 MB
  const acceptedFileTypes = ['image/'];

  return z.instanceof(File).refine((file) => {
    return !file.type || acceptedFileTypes.some(type => file.type.startsWith(type));
  }, {
    message: 'File must be an image.',
  }).refine((file) => {
    return file.size <= maxUploadSize;
  }, {
    message: `File size must be less than ${maxUploadSize / 1024 / 1024} MB.`,
  });
} 