"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { spaces } from "@/constants";
import React from "react";

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
