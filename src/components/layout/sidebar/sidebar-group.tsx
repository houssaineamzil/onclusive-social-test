interface SidebarItemProps {
  title?: string;
  last?: boolean;
  children: React.ReactNode;
}
export const SidebarGroup: React.FC<SidebarItemProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="flex flex-col border-zinc-300 not-last:border-b pb-2.5">
        {title && (
          <div className="flex w-full p-2.5 font-semibold text-sm">{title}</div>
        )}
        {children}
      </div>
    </>
  );
};
