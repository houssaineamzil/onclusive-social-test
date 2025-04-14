"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/constants/countries";
import { useFilter } from "@/hooks/useFilter";

// Todo: fetch real data

export const SelectCountries: React.FC = () => {
  const { country, setCountry } = useFilter();

  return (
    <label className="flex flex-col gap-1" htmlFor="countries">
      <span className="font-semibold text-base">Countries</span>

      <Select value={country} onValueChange={setCountry}>
        <SelectTrigger className="w-70 text-zinc-700">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="all" value="all">
            All Countries
          </SelectItem>
          {countries.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
};
