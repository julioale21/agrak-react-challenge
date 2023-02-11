import React from "react";
import { Stack, Image, Text, Card, CardBody, Heading } from "@chakra-ui/react";
import { type User } from "../interfaces/User";

interface UserListItemProps {
  user: User;
  onSelectedUser: (user: User) => void;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, onSelectedUser }) => {
  return (
    <Card
      _hover={{ backgroundColor: "gray.100", cursor: "pointer" }}
      alignItems="center"
      flexDirection="row"
      height="100px"
      justifyContent="space-between"
      marginBottom={2}
      padding={5}
      variant="outline"
      width="100%"
      onClick={() => {
        onSelectedUser(user);
      }}
    >
      <Stack width="80px">
        <Image borderRadius="50%" flexGrow={0} marginRight={5} src={user.avatar} />
      </Stack>
      <Stack flexGrow={1}>
        <CardBody>
          <Heading size="md">{user.first_name}</Heading>
          <Text fontWeight="thin">{user.second_name}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export { UserListItem };
