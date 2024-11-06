import Link from 'next/link';

import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';

import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

export default async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts();
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium">
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className="flex gap-4">
            <Button variant={layout === 'grid' ? 'default' : 'ghost'}>
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button variant={layout === 'list' ? 'default' : 'ghost'}>
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuLayoutList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="mt-16 text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
