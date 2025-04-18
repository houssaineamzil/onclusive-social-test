import { avatar } from "@/assets";
import { faker } from "@faker-js/faker";
import type { ChartData } from "chart.js";

export const user = {
  name: "John Doe",
  username: "johndoe",
  avatar: avatar,
  email: "john.doe@example.com",
};

export const spaces = [
  {
    id: "historical",
    name: "Historical Search",
  },
];

const labels = [
  "aug 22",
  "aug 23",
  "aug 24",
  "aug 25",
  "aug 26",
  "aug 27",
  "aug 28",
];

export const languages = [
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

export const ages = [
  {
    id: "all",
    name: "All Ages",
  },
  {
    id: "kids",
    name: "13-17 years",
  },
  {
    id: "young",
    name: "18-25 years",
  },
  {
    id: "adult",
    name: "26-35 years",
  },
  {
    id: "elders",
    name: "36-50 years",
  },
  {
    id: "seniors",
    name: "50+ years",
  },
];

export const mediaTypes = [
  {
    id: "all",
    name: "All Media Type",
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

export const keywords = ["Iphone", "Vivo", "Nokia"];

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
        { count: labels.length },
      ),
      borderColor: colors[keywords.indexOf(keyword) % colors.length],
    })),
  };
};

export const chartSummaryAuthorsData = (
  keywords: Array<string>,
): ChartData<"bar"> => {
  return {
    labels: Array(keywords.length).fill(""),
    datasets: [
      {
        label: "Authors",
        data: faker.helpers.multiple(
          () => faker.helpers.rangeToNumber({ min: 1000000, max: 10000000 }),
          { count: keywords.length },
        ),
        barThickness: 3,
        backgroundColor: colors.slice(0, keywords.length),
      },
    ],
  };
};

export const chartSummaryMentionsData = (
  keywords: Array<string>,
): ChartData<"bar"> => {
  return {
    labels: Array(keywords.length).fill(""),
    datasets: [
      {
        label: "Mentions",
        data: faker.helpers.multiple(
          () => faker.helpers.rangeToNumber({ min: 1000000, max: 90000000 }),
          { count: keywords.length },
        ),
        barThickness: 3,
        backgroundColor: colors.slice(0, keywords.length),
      },
    ],
  };
};

export const chartSummaryReachData = (
  keywords: Array<string>,
): ChartData<"bar"> => {
  return {
    labels: Array(keywords.length).fill(""),
    datasets: [
      {
        label: "Reach",
        data: faker.helpers.multiple(
          () => faker.helpers.rangeToNumber({ min: 1000000, max: 20000000 }),
          { count: keywords.length },
        ),
        barThickness: 3,
        backgroundColor: colors.slice(0, keywords.length),
      },
    ],
  };
};

export const engagementData = [
  {
    total: 31565295, // faker.helpers.rangeToNumber({ min: 1000000, max: 20000000 })
    percentage: 42,
    keyword: "Iphone",
    color: colors[0],
  },
  {
    total: 27946196, // faker.helpers.rangeToNumber({ min: 1000000, max: 20000000 })
    percentage: 35,
    keyword: "Vivo",
    color: colors[1],
  },
  {
    total: 20489496, // faker.helpers.rangeToNumber({ min: 1000000, max: 20000000 })
    percentage: 22,
    keyword: "Nokia",
    color: colors[2],
  },
];

export const summaryChartData = [
  {
    title: "Authors",
    data: chartSummaryAuthorsData(keywords),
  },
  {
    title: "Mentions",
    data: chartSummaryAuthorsData(keywords),
  },
  {
    title: "Reach",
    data: chartSummaryAuthorsData(keywords),
  },
];
