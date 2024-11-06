import Link from 'next/link';

import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  return (
    <section className="lg:gridcols2 grid grid-cols-1 items-center gap-24">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are chaging the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          expedita vitae hic nemo numquam optio nisi doloremque, aut libero
          eveniet!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
