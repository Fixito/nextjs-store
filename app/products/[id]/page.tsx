import Image from 'next/image';

import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import ProductRating from '@/components/single-product/ProductRating';
import { fetchSingleProduct } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';

type Params = Promise<{ id: string }>;

export default async function SingleProductPage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex items-center gap-x-8">
            <h1 className="text-3xl font-bold capitalize">{name}</h1>
            <FavoriteToggleButton productId={product.id} />
          </div>
          <ProductRating productId={product.id} />
          <h4 className="mt-2 text-lg">{company}</h4>
          <p className="text-md mt-3 inline-block rounded bg-muted p-2">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={product.id} />
        </div>
      </div>
    </section>
  );
}
