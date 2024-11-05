import Link from 'next/link';

import { LuShoppingCart } from 'react-icons/lu';

import { Button } from '../ui/button';

export default function CartButton() {
  // temp
  const numItemsInCart = 9;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
