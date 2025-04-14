"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

// Todo: fetch real data
const spaces = [
  {
    id: "historical",
    name: "Historical Search",
  },
];

export const SelectSpace: React.FC = () => {
  const [space, setSpace] = React.useState("historical");

  return (
    <Select value={space} onValueChange={setSpace}>
      <SelectTrigger className="w-45">
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
  );
};
