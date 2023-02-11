/* eslint-disable no-console */
import React from "react";
import { Stack, Image, Text, Button, Card } from "@chakra-ui/react";
import { type User } from "../interfaces/User";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";

interface UserCardInfoProps {
  user: User;
}

const UserCardInfo: React.FC<UserCardInfoProps> = ({ user }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  const handleUpdateUser = (): void => {
    navigate(`/user/${user.id as string}`);
  };

  return (
    <Card
      alignItems="center"
      className="card-info"
      height="600px"
      justifyContent="space-between"
      marginLeft={20}
      marginTop="0px"
      paddingY={8}
      width={400}
    >
      <Stack width="200px">
        <Image borderRadius="50%" src={user.avatar} width="200px" />
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
        justifyContent="center"
        marginTop={6}
        width="100%"
      >
        <Button
          backgroundColor="red.500"
          marginRight={5}
          marginTop={2}
          minW={100}
          size="sm"
          onClick={handleDelete}
        >
          <Text alignItems="center" display="flex">
            Delete
            <DeleteIcon marginLeft={1} />
          </Text>
        </Button>
        <Button backgroundColor="green.500" minW={100} size="sm" onClick={handleUpdateUser}>
          <Text alignItems="center" display="flex">
            Update
            <EditIcon marginLeft={1} />
          </Text>
        </Button>
      </Stack>
    </Card>
  );
};

export { UserCardInfo };
