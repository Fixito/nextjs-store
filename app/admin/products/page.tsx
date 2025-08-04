import Link from 'next/link';

import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import EmptyList from '@/components/global/EmptyList';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteProductAction, fetchAdminProducts } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';

export default async function AdminProductsPage() {
  const items = await fetchAdminProducts();

  if (!items.length) return <EmptyList />;

  return (
    <Table>
      <TableCaption>Total products: {items.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          const { id, name, company, price } = item;

          return (
            <TableRow key={id}>
              <TableCell>
                <Link
                  href={`/products/${id}`}
                  className="capitalize text-muted-foreground underline"
                >
                  {name}
                </Link>
              </TableCell>
              <TableCell>{company}</TableCell>
              <TableCell>{formatCurrency(price)}</TableCell>
              <TableCell className="flex items-center gap-x-2">
                <Link href={`/admin/products/${id}/edit`}>
                  <IconButton actionType="edit" />
                </Link>
                <DeleteProduct productId={id} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });

  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
