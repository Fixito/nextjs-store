'use server';

import { redirect } from 'next/navigation';

import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { imageSchema, productSchema, validateWithZodSchema } from './schemas';
import { uploadImage } from './supabase';

async function getAuthentUser() {
  const user = await currentUser();
  if (!user) redirect('/');
  return user
}

function renderError(error: unknown): { message: string } {
  console.error(error)
  return {
    message: error instanceof Error ? error.message : 'An error occurred.'
  };
}

export async function fetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products;
}

export async function fetchAllProducts({ search = '' }: { search: string }) {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export async function fetchSingleProduct(productId: string) {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) redirect('/products');

  return product;
}

export async function createProductAction(
  _prevState: unknown,
  formData: FormData
): Promise<{ message: string }> {
  const user = await getAuthentUser()

  try {
    const rawData = Object.fromEntries(formData.entries());
    const file = formData.get('image') as File;
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);
    console.log('🚀 ~ createProductAction ~ fullPath:', fullPath);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      }
    })
  } catch (error) {
    return renderError(error);
  }

  redirect('/admin/products');
};
