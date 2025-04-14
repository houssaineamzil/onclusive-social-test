interface SidebarItemProps {
  title?: string;
  last?: boolean;
  children: React.ReactNode;
}
export const SidebarGroup: React.FC<SidebarItemProps> = ({
  title,
  last,
  children,
}) => {
  return (
    <>
      <div className="flex flex-col">
        {title && (
          <div className="flex w-full p-2.5 font-semibold text-sm">{title}</div>
        )}
        {children}
      </div>
      {last && <hr className="my-2.5 border-zinc-300" />}
    </>
  );
};
