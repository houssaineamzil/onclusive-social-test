"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from "@/hooks/useFilter";

// Todo: fetch real data
const ages = [
  {
    id: "all",
    name: "All Ages",
  },
  {
    id: "kids",
    name: "13-17 years",
  },
  {
    id: "young",
    name: "18-25 years",
  },
  {
    id: "adult",
    name: "26-35 years",
  },
  {
    id: "elders",
    name: "36-50 years",
  },
  {
    id: "seniors",
    name: "50+ years",
  },
];

export const SelectAge: React.FC = () => {
  const { age, setAge } = useFilter();

  return (
    <label className="flex flex-col gap-1" htmlFor="age">
      <span className="font-semibold text-base">Age</span>

      <Select name="age" value={age} onValueChange={setAge}>
        <SelectTrigger className="w-70 text-zinc-700">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ages.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
};
