import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@prisma/client';

import { formatCurrency } from '@/utils/format';

import { Card, CardContent } from '../ui/card';
import FavoriteToggleButton from './FavoriteToggleButton';

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform transition duration-500 group-hover:shadow-xl">
                <CardContent className="p-4">
                  <div className="relative h-64 overflow-hidden rounded md:h-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="w-full transform rounded object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-xl capitalize">{name}</h2>
                    <p className="mt-2 text-muted-foreground">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute right-7 top-7 z-50">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
