"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ages, languages, mediaTypes } from "@/constants";
import { countries } from "@/constants/countries";
import { useFilter } from "@/hooks/useFilter";
import { ChevronDownIcon, ChevronUpIcon, FilterIcon } from "lucide-react";
import { useState } from "react";
import { SelectField } from "./select";
import { SelectDate } from "./select-date";

export const Filter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const {
    language,
    setLanguage,
    age,
    setAge,
    country,
    setCountry,
    mediaType,
    setMediaType,
  } = useFilter();

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="flex min-h-12.5 w-full flex-col justify-between bg-white py-3 pl-64 shadow"
    >
      <div className="flex w-full justify-between ">
        <SelectDate />
        <CollapsibleTrigger asChild>
          <Button variant="ghost">
            <FilterIcon />
            Filter
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex w-full gap-10 pt-2">
        <SelectField
          label="Language"
          name="language"
          value={language}
          options={languages}
          onChange={setLanguage}
        />
        <SelectField
          label="Media Type"
          name="mediaType"
          value={mediaType}
          options={mediaTypes}
          onChange={setMediaType}
        />
        <SelectField
          label="Country"
          name="country"
          value={country}
          options={[
            {
              id: "all",
              name: "All countries",
            },
            ...countries,
          ]}
          onChange={setCountry}
        />
        <SelectField
          label="Age"
          name="age"
          value={age}
          options={ages}
          onChange={setAge}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};
