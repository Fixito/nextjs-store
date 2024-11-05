import Link from 'next/link';

import { FaCode } from 'react-icons/fa6';

import { Button } from '../ui/button';

export default function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaCode />
      </Link>
    </Button>
  );
}
