import { cn } from "@/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <span className={cn("", className)} {...props}>
      {children}
    </span>
  );
};
