import { Chip } from "@/components/ui/chip";
import { useFilter } from "@/hooks/useFilter";
import { addDays, addMonths, addYears } from "date-fns";
import { DatePicker } from "./date-picker";

const presets = [
  {
    label: "7D",
    value: (from: Date) => addDays(from, 7),
  },
  {
    label: "30D",
    value: (from: Date) => addDays(from, 30),
  },
  {
    label: "6M",
    value: (from: Date) => addMonths(from, 6),
  },
  {
    label: "1Y",
    value: (from: Date) => addYears(from, 1),
  },
  {
    label: "2Y",
    value: (from: Date) => addYears(from, 2),
  },
  {
    label: "MAX",
    value: (from: Date) => addYears(from, 5),
  },
];

export const SelectDate: React.FC = () => {
  const { setDateRange } = useFilter();

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-1">
        {presets.map((preset, index) => (
          <Chip
            key={preset.label}
            data-state={index === 0 ? "active" : "inactive"}
            onClick={() => {
              setDateRange(({ from }) => ({
                from,
                to: preset.value(from as Date),
              }));
            }}
          >
            {preset.label}
          </Chip>
        ))}
      </div>
      <DatePicker />
    </div>
  );
};
