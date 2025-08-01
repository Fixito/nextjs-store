'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { adminLinks } from '@/utils/links';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const { href, label } = link;
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? 'default' : 'ghost';

        return (
          <Button
            key={href}
            asChild
            className="mb-2 w-full justify-start font-normal capitalize"
            variant={variant}
          >
            <Link href={href}>{label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}
