import React, { useEffect, useState } from "react";

import { Button, Stack, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { AddIcon } from "@chakra-ui/icons";

import { UserList, UserCardInfo } from "../components";
import { type User } from "../interfaces/User";
import { fetchUsers } from "../services/user.service";
import { useNavigate } from "react-router-dom";

const UserListView: React.FC = (): JSX.Element => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { data, isLoading } = useQuery<User[]>("getUsers", fetchUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if (data !== null && data !== undefined && data.length > 0) {
      setSelectedUser(data[0]);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Stack alignItems="center" height="100vh" justifyContent="center" width="100vw">
        <Spinner color="blue.500" emptyColor="gray.200" size="xl" speed="0.65s" thickness="4px" />.
      </Stack>
    );
  }

  if (data == null) return <div></div>;

  const handleNewUser = (): void => {
    navigate("/user");
  };

  return (
    <Stack alignItems="center" backgroundColor="gray.100" justifyContent="center" minHeight="100vh">
      <Stack>
        <Stack
          alignItems="center"
          backgroundColor="gray.100"
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          width={{ base: "100vw", md: 750, "2xl": 900 }}
        >
          <UserList data={data} setSelectedUser={setSelectedUser} />

          {selectedUser != null && <UserCardInfo user={selectedUser} />}
        </Stack>
        <Button
          _hover={{ color: "whatsapp.500", backgroundColor: "gray.300" }}
          backgroundColor="whatsapp.500"
          bottom={{ base: "200px", sm: "300px" }}
          color="white"
          height="60px"
          position="absolute"
          right={{ base: 10, sm: 20 }}
          rounded="50%"
          width="60px"
          onClick={handleNewUser}
        >
          <AddIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default UserListView;
