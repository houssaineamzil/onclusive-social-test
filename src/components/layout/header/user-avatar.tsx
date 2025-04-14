import { avatar } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type React from "react";

// Todo: fetch real data
const user = {
  name: "John Doe",
  username: "johndoe",
  avatar: avatar,
  email: "john.doe@example.com",
};

export const UserAvatar: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-7.5">
          <AvatarImage src={user.avatar.src} alt={`@${user.username}`} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .flatMap((string) => string.charAt(0))
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          This is empty as I don&apos;t have more context{" "}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
