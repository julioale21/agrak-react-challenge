import React from "react";
import { Stack, Image, Text } from "@chakra-ui/react";
import { type User } from "../interfaces/User";

interface UserListItemProps {
  user: User;
  onSelectedUser: (user: User) => void;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, onSelectedUser }) => {
  return (
    <Stack
      _hover={{ backgroundColor: "gray", cursor: "pointer" }}
      alignItems="center"
      backgroundColor={"red.400"}
      border={"0.5px solid gray"}
      flexDirection="row"
      justifyContent="space-between"
      marginTop={0}
      padding={5}
      width={200}
      onClick={() => {
        onSelectedUser(user);
      }}
    >
      <Image flexGrow={0} marginRight={5} src={user.avatar} width={"50px"} />
      <Stack flexGrow={1} justifyContent="center">
        <Text>{user.first_name}</Text>
      </Stack>
    </Stack>
  );
};

export { UserListItem };
