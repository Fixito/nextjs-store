import { use } from 'react';

import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = { layout?: string; search?: string };

export default function ProductsPage(props: { searchParams: SearchParams }) {
  // @ts-expect-error
  const searchParams: SearchParams = use(props.searchParams);

  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';

  return <ProductsContainer layout={layout} search={search} />;
}
