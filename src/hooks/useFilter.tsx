import { addDays } from "date-fns";
import React, { createContext, useContext } from "react";
import type { DateRange } from "react-day-picker";

const FilterContext = createContext<{
  dateRange: DateRange;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>;
  language: string;
  setLanguage: React.Dispatch<string>;
  mediaType: string;
  setMediaType: React.Dispatch<string>;
  country: string;
  setCountry: React.Dispatch<string>;
  age: string;
  setAge: React.Dispatch<string>;
}>({
  dateRange: {
    from: new Date(),
    to: addDays(new Date(), 0),
  },
  setDateRange: () => {},
  language: "all",
  setLanguage: () => {},
  mediaType: "all",
  setMediaType: () => {},
  country: "all",
  setCountry: () => {},
  age: "all",
  setAge: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const [dateRange, setDateRange] = React.useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 0),
  });
  const [language, setLanguage] = React.useState("all");
  const [mediaType, setMediaType] = React.useState("all");
  const [country, setCountry] = React.useState("all");
  const [age, setAge] = React.useState("all");

  const value = {
    dateRange,
    setDateRange,
    language,
    setLanguage,
    mediaType,
    setMediaType,
    country,
    setCountry,
    age,
    setAge,
  };
  return <FilterContext value={value}>{children}</FilterContext>;
};

export const useFilter = () => useContext(FilterContext);
