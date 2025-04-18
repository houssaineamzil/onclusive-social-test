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
import { engagementData, summaryChartData } from "@/constants";
import {
  BarElement,
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
import { compactInteger } from "humanize-plus";
import { EllipsisVerticalIcon, InfoIcon } from "lucide-react";
import React from "react";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
    <div className="flex flex-1 flex-col">
      <div className="flex shrink-0 justify-between">
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
      <div className="mb-12 flex shrink-0 flex-col gap-4">
        <div>
          Comparing{" "}
          <span className="font-bold font-dosis">{data.compare.keyword}</span>{" "}
          to{" "}
          {data.compare.with.map((keyword, index) => (
            <React.Fragment key={keyword}>
              {index !== 0 &&
                (index === data.compare.with.length - 1 ? " and " : ", ")}
              <span key={keyword} className="font-bold font-dosis">
                {keyword}
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-5 font-dosis font-semibold text-xl">
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

        <div className="flex w-full">
          {engagementData.map(({ total, percentage, keyword, color }) => (
            <div
              key={keyword}
              className="flex flex-1 flex-col border-zinc-200 not-first:border-l pl-3"
            >
              <div className="font-dosis font-medium text-4xl text-zinc-500">
                <span className="text-5xl">{compactInteger(total)}</span> /{" "}
                {percentage}%
              </div>
              <div
                className="flex items-baseline gap-2 font-dosis text-sm"
                style={{ color }}
              >
                <div className="size-3 rounded-full bg-current" />
                {keyword}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center gap-11.5">
        <div className="flex-1">
          <Line options={options} data={data.chart} />
        </div>
        <div className="flex w-md flex-col gap-8">
          {summaryChartData.map(({ title, data }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-dosis font-semibold text-4xl text-zinc-500">
                {title}
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
              <div className="flex max-h-24 items-baseline gap-2">
                <Bar
                  options={{
                    indexAxis: "y",
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        grid: {
                          display: false,
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: false,
                      },
                    },
                  }}
                  data={data}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
