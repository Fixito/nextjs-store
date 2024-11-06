import { FaHeart } from 'react-icons/fa6';

import { Button } from '../ui/button';

export default function FavoriteToggleButton({
  productId,
}: {
  productId: string;
}) {
  return (
    <Button size="icon" variant="outline" className="cursor-pointer p-2">
      <FaHeart />
    </Button>
  );
}
