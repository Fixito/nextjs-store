import { Button } from '../ui/button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className="mt-8 capitalize" size="lg">
      add to cart
    </Button>
  );
}
