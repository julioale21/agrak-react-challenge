import React from "react";
import { Stack, Image, Text, Card, CardBody, CardFooter, Heading } from "@chakra-ui/react";
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
      justifyContent="space-between"
      marginTop={0}
      overflow="hidden"
      padding={5}
      variant="outline"
      width={350}
      onClick={() => {
        onSelectedUser(user);
      }}
    >
      <Stack width="80px">
        <Image flexGrow={0} marginRight={5} src={user.avatar} />
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
