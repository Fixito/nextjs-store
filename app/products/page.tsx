import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = { layout?: string; search?: string };

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  const layout = resolvedSearchParams.layout || 'grid';
  const search = resolvedSearchParams.search || '';

  return <ProductsContainer layout={layout} search={search} />;
}
