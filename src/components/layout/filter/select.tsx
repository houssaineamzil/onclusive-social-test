"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  label: string;
  value: string;
  name: string;
  options: { id: string; name: string }[];
  onChange: (value: string) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  name,
}) => {
  return (
    <label className="flex flex-col gap-1" htmlFor={name}>
      <span className="font-semibold text-base">{label}</span>
      <Select name={name} value={value} onValueChange={onChange}>
        <SelectTrigger className="w-70 text-zinc-700">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
};
