"use client";

import { Chart } from "@/components/layout/content/chart";
import { Filter } from "@/components/layout/filter";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chartData } from "@/constants";
import { FilterProvider } from "@/hooks/useFilter";
import { cn, random } from "@/utils";
import { PlusIcon, XIcon } from "lucide-react";
import type { NextPage } from "next";
import { Suspense, useState } from "react";

const colors = [
  "bg-violet-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-amber-400",
  "bg-yellow-400",
  "bg-indigo-400",
];
const Page: NextPage = () => {
  const [tabs, setTabs] = useState([
    {
      id: "tab1",
      label: "Tab 1",
      color: random(colors),
      icon: null,
      data: {
        compare: {
          keyword: "Iphone",
          with: ["Vivo", "Nokia"],
        },
        chart: chartData(["Iphone", "Vivo", "Nokia"]),
      },
      content: Chart,
    },
    {
      id: "tab2",
      label: "Tab 2",
      color: random(colors),
      icon: null,
      data: {
        compare: {
          keyword: "Iphone",
          with: ["Vivo", "Nokia"],
        },
        chart: chartData(["Iphone", "Vivo", "Nokia"]),
      },
      content: Chart,
    },
    {
      id: "tab3",
      label: "Tab 3",
      color: random(colors),
      icon: null,
      data: {
        compare: {
          keyword: "Iphone",
          with: ["Vivo", "Nokia"],
        },
        chart: chartData(["Iphone", "Vivo", "Nokia"]),
      },
      content: Chart,
    },
    {
      id: "compare",
      label: "Compare",
      color: null,
      icon: PlusIcon,
      data: {
        compare: {
          keyword: "Iphone",
          with: ["Vivo", "Nokia"],
        },
        chart: chartData(["Asus", "Lenevo", "HP", "Dell", "Apple"]),
      },
      content: Chart,
    },
  ]);

  return (
    <Tabs defaultValue={tabs[0].id} className="flex-1">
      <TabsList className="flex w-full items-center gap-1 border-zinc-200 border-b bg-white pl-64">
        {tabs.map(({ id, label, color, icon: Icon }) => (
          <TabsTrigger
            key={id}
            value={id}
            className="-tracking-[1%] flex h-12.5 w-60 shrink-0 items-center gap-3 rounded-none border-zinc-200 border-r p-2 font-medium text-sm text-zinc-700 capitalize leading-none first:border-l"
          >
            {/* {color && !Icon && (
              <span className={cn("size-3 rounded-full ", color)} />
            )} */}
            {Icon && <Icon />}
            <span className="flex-1 text-left">{label}</span>

            {id !== "compare" && (
              <XIcon
                className="size-6 shrink-0 text-current/20"
                onClick={() => {
                  setTabs((prev) =>
                    prev.length > 1
                      ? prev.filter((tab) => tab.id !== id)
                      : prev,
                  );
                }}
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      <FilterProvider>
        {tabs.map(({ id, content: Content, data }) => (
          <TabsContent className="flex flex-col" key={id} value={id}>
            <Filter />
            <main className="flex flex-1">
              <Suspense>
                <Sidebar />
              </Suspense>
              <div className="flex flex-1 pt-6 pr-6">
                <div className="flex flex-1 bg-white px-8 py-4 shadow-lg">
                  <Content data={data} />
                </div>
              </div>
            </main>
          </TabsContent>
        ))}
      </FilterProvider>
    </Tabs>
  );
};

export default Page;
