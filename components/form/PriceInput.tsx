import { Input } from '../ui/input';
import { Label } from '../ui/label';

const name = 'price';

type FormInputNumberProps = {
  defaultValue?: number;
};

export default function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        type="number"
        id={name}
        name={name}
        min={1}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
