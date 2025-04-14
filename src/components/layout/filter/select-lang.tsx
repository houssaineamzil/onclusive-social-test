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
const spaces = [
  {
    id: "all",
    name: "All languages",
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

export const SelectLang: React.FC = () => {
  const { language, setLanguage } = useFilter();

  console.log("language", language);

  return (
    <label className="flex flex-col gap-1" htmlFor="language">
      <span className="font-semibold text-base">Language</span>

      <Select name="language" value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-70 text-zinc-700">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {spaces.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
};
