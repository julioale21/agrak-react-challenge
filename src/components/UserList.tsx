import React from "react";
import { Box } from "@chakra-ui/react";
import { UserListItem } from "./UserListItem";
import { type User } from "../interfaces/User";

interface UserListProps {
  data: User[];
  setSelectedUser: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ data, setSelectedUser }) => {
  return (
    <Box
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
          borderRadius: "24px",
        },
      }}
      height="600px"
      justifyContent="center"
      marginTop={{ base: 8, sm: 0 }}
      overflowY="auto"
      paddingY={0}
      scrollPaddingTop={3}
    >
      {data?.map((user) => (
        <UserListItem key={user.id} user={user} onSelectedUser={setSelectedUser} />
      ))}
    </Box>
  );
};

export { UserList };
