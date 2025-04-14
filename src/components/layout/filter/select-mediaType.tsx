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
const mediaTypes = [
  {
    id: "all",
    name: "All Media Type",
  },
  {
    id: "en",
    name: "English",
  },
  {
    id: "fr",
    name: "Frensh",
  },
  {
    id: "ar",
    name: "Arabic",
  },
  {
    id: "es",
    name: "Spanish",
  },
];

export const SelectMediaType: React.FC = () => {
  const { mediaType, setMediaType } = useFilter();

  return (
    <label className="flex flex-col gap-1" htmlFor="mediaType">
      <span className="font-semibold text-base">Media Type</span>

      <Select name="mediaType" value={mediaType} onValueChange={setMediaType}>
        <SelectTrigger className="w-70 text-zinc-700">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {mediaTypes.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
};
