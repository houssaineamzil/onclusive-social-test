import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CategoryScale,
  type ChartData,
  Chart as ChartJS,
  type ChartOptions,
  Tooltip as ChartTooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
} from "chart.js";
import { EllipsisVerticalIcon, InfoIcon } from "lucide-react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend,
);

export const options: ChartOptions<"line"> = {
  responsive: true,

  elements: {
    line: {
      tension: 0.4,
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
  },
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        // This more specific font property overrides the global property
        font: {
          family: "var(--font-sans)",
        },
      },
    },
    tooltip: {
      callbacks: {
        footer: (tooltipItems) => {
          let sum = 0;

          tooltipItems.forEach((tooltipItem) => {
            sum += tooltipItem.parsed.y;
          });
          return `Mentions: ${sum}`;
        },
      },
    },
  },
};

interface Props {
  data: {
    compare: {
      keyword: string;
      with: Array<string>;
    };
    chart: ChartData<"line">;
  };
}

export const Chart: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="font-bold font-dosis text-4xl uppercase leading-none tracking-[1%]">
          Summary
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <EllipsisVerticalIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end">
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Import</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          Comparing{" "}
          <span className="font-bold font-dosis">{data.compare.keyword}</span>{" "}
          to{" "}
          {data.compare.with.map((keyword, index) => (
            <>
              {index !== 0 &&
                (index === data.compare.with.length - 1 ? " and " : ", ")}
              <span key={keyword} className="font-bold font-dosis">
                {keyword}
              </span>
            </>
          ))}
        </div>
        <div className="flex font-dosis font-semibold text-xl gap-5">
          MENTIONS{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="size-4 text-current/60" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Some info should be shown here</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex gap-11.5">
        <div className="max-w-md">
          <Line options={options} data={data.chart} />
        </div>
        <div className="flex flex-col gap-4" />
      </div>
    </div>
  );
};
