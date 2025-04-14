import { faker } from "@faker-js/faker";
import type { ChartData } from "chart.js";

const labels = [
  "aug 22",
  "aug 23",
  "aug 24",
  "aug 25",
  "aug 26",
  "aug 27",
  "aug 28",
];

faker.seed(1);

const colors = [
  "hsl(212, 58%, 62%)",
  "hsl(5, 100%, 65%)",
  "hsl(126, 67%, 38%)",
];

export const chartData = (keywords: Array<string>): ChartData<"line"> => {
  return {
    labels,
    datasets: keywords.map((keyword) => ({
      label: keyword,
      data: faker.helpers.multiple(
        () => faker.helpers.rangeToNumber({ min: 0, max: 1000000 }),
        { count: 7 },
      ),
      borderColor: colors[keywords.indexOf(keyword) % colors.length],
    })),
  };
};
