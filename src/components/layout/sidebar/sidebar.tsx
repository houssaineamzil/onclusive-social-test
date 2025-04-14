import {
  BuildingIcon,
  ChartBarIcon,
  GaugeIcon,
  GlobeIcon,
  HashIcon,
  LayersIcon,
  ListIcon,
  SmileIcon,
  UsersIcon,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { SidebarGroup } from "./sidebar-group";
import { SidebarItem } from "./sidebar-item";

const sidebar = [
  {
    name: "When",
    items: [
      {
        icon: ({ className }: { className?: string }) => (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>calendar</title>
            <text id="day" x={7} y={19} fontSize={8} strokeWidth={1}>
              {String(new Date().getDate()).padStart(2, "0")}
            </text>
            <path d="M16 2v4" />
            <path d="M3 10h18" />
            <path d="M8 2v4" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
          </svg>
        ),

        name: "Trend",
      },
    ],
  },
  {
    name: "What",
    items: [
      {
        icon: ChartBarIcon,
        name: "Key Concepts",
      },
      {
        icon: HashIcon,
        name: "Top Hashtags",
      },
    ],
  },
  {
    name: "where",
    items: [
      {
        icon: GlobeIcon,
        name: "World Map",
      },
      {
        icon: BuildingIcon,
        name: "Top Cities",
      },
    ],
  },
  {
    name: "Who",
    items: [
      {
        icon: ListIcon,
        name: "Influences",
      },
      {
        icon: UsersIcon,
        name: "Demographics",
      },
    ],
  },
  {
    name: "How",
    items: [
      {
        icon: GaugeIcon,
        name: "Sentiment",
      },
      {
        icon: SmileIcon,
        name: "Emojis",
      },
    ],
  },
  {
    name: "Mentions",
    items: [
      {
        icon: LayersIcon,
        name: "Trend",
      },
    ],
  },
];

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex w-64 shrink-0 flex-col gap-2 py-4 pr-4.5 pl-2.5">
      {sidebar.map(({ name, items }, index) => (
        <SidebarGroup
          key={name}
          title={name}
          last={index === sidebar.length - 1}
        >
          <div className="flex flex-col gap-1">
            {items.map(({ icon: Icon, name }) => {
              const tabName = name.replaceAll(" ", "-").toLowerCase();
              return (
                <SidebarItem
                  key={name}
                  name={tabName}
                  onClick={() => {
                    router.push(
                      `${pathname}?${createQueryString("tab", tabName)}`,
                    );
                  }}
                >
                  <Icon className="size-6 text-current/70" />
                  <span>{name}</span>
                </SidebarItem>
              );
            })}
          </div>
        </SidebarGroup>
      ))}
    </div>
  );
};
