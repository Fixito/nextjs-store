import { FaStar } from 'react-icons/fa6';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductRating({ productId }: { productId: string }) {
  // temp
  const rating = 4.2;
  const count = 25;

  const className = `text-md item-center mb-4 mt-1 flex gap-1`;
  const countValue = `(${count} reviews)`;

  return (
    <span className={className}>
      <FaStar className="h-3 w-3" />
      {rating} {countValue}
    </span>
  );
}
