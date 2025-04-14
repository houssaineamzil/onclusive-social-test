"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon, ChevronUpIcon, FilterIcon } from "lucide-react";
import { useState } from "react";
import { SelectAge } from "./select-age";
import { SelectCountries } from "./select-countries";
import { SelectDate } from "./select-date";
import { SelectLang } from "./select-lang";
import { SelectMediaType } from "./select-mediaType";

export const Filter: React.FC = () => {
  const [open, setOpen] = useState(false);

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
        <SelectLang />
        <SelectMediaType />
        <SelectCountries />
        <SelectAge />
      </CollapsibleContent>
    </Collapsible>
  );
};
