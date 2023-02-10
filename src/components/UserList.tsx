import React from "react";
import { Stack } from "@chakra-ui/react";
import { UserListItem } from "./UserListItem";
import { type User } from "../interfaces/User";

interface UserListProps {
  data: User[];
  setSelectedUser: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ data, setSelectedUser }) => {
  return (
    <Stack height="600px" justifyContent="center" sx={{ overflow: "auto", scrollbarWidth: 0 }}>
      {data?.map((user) => (
        <UserListItem key={user.id} user={user} onSelectedUser={setSelectedUser} />
      ))}
    </Stack>
  );
};

export { UserList };
