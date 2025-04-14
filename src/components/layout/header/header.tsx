import { DigimindLogo, NikeLogo } from "@/assets";
import { OptionsDropdown } from "./options-dropdown";
import { SelectSpace } from "./select-space";
import { UserAvatar } from "./user-avatar";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between bg-digimind p-4 text-white">
      <div className="flex items-center gap-2.5">
        <NikeLogo className="h-5" />
        <div className="flex flex-col items-end gap-0">
          <span className="text-xs">powerd by</span>
          <DigimindLogo className="h-5" />
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <SelectSpace />

        <UserAvatar />
        <OptionsDropdown />
      </div>
    </header>
  );
};
