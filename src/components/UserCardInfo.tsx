/* eslint-disable no-console */
import React from "react";
import { Stack, Image, Text, Button } from "@chakra-ui/react";
import { type User } from "../interfaces/User";

import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../services/user.service";

interface UserCardInfoProps {
  user: User;
}

const UserCardInfo: React.FC<UserCardInfoProps> = ({ user }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(async (id: string) => await deleteUser(id), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("getUsers");
    },
    onError: () => {
      console.log("Error deleting user");
    },
  });

  const handleDelete = (): void => {
    if (user.id !== undefined) {
      mutation.mutate(user.id);
    }
  };

  return (
    <Stack alignItems="center" marginLeft={20} width="100%">
      <Stack width="200px">
        <Image src={user.avatar} />
      </Stack>
      <Text fontSize={25} fontWeight="bold">
        {user.first_name}
      </Text>
      <Stack flexDirection="column" justifyContent={"flex-start"}>
        <Text>
          <span style={{ fontWeight: "bold" }}>Second Name: </span>
          {user.second_name}
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Email: </span>
          {user.email}
        </Text>
      </Stack>
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-around"
        marginTop={6}
        width="100%"
      >
        <Button backgroundColor="red.500" marginTop={3} minW={100} size="sm" onClick={handleDelete}>
          <Text>Delete</Text>
        </Button>
        <Button backgroundColor="green.500" minW={100} size="sm">
          <Text>Update</Text>
        </Button>
      </Stack>
    </Stack>
  );
};

export { UserCardInfo };
