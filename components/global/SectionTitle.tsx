import { Separator } from '@/components/ui/separator';

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-medium capitalize tracking-wider">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
