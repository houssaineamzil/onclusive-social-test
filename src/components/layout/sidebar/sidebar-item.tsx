"use client";

import { cn } from "@/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  children: React.ReactNode;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  children,
  ...props
}) => {
  const searchParams = useSearchParams();
  const queries = Object.fromEntries(searchParams);

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(queries.tab === name);
  }, [queries, name]);

  return (
    <button
      className={cn(
        "flex w-full gap-5 px-2.5 py-3.5 font-semibold hover:bg-zinc-200 hover:text-zinc-800 data-[state='active']:bg-zinc-200 data-[state='active']:text-zinc-800",
        active && "bg-zinc-200",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
