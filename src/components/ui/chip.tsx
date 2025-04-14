import { cn } from "@/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Chip: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-full bg-transparent px-4 py-1 data-[state=active]:bg-zinc-200",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
