import { Button } from '../ui/button';

export default function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className="mt-8 capitalize" size="lg">
      add to cart
    </Button>
  );
}
