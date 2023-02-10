import React, { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { UserList, UserCardInfo } from "../components";
import { type User } from "../interfaces/User";
import { fetchUsers } from "../services/userService";

const UserListView = (): JSX.Element => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { data, isLoading } = useQuery<User[]>("getUsers", fetchUsers);

  useEffect(() => {
    if (data !== null && data !== undefined && data.length > 0) {
      setSelectedUser(data[0]);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data == null) return <div></div>;

  return (
    <Stack alignItems="center" backgroundColor="gray.100" justifyContent="center" minHeight="100vh">
      <Stack
        alignItems="center"
        backgroundColor="gray.100"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        padding={2}
        width={{ base: "100vh", md: 800 }}
      >
        <UserList data={data} setSelectedUser={setSelectedUser} />
        <Stack
          alignItems="center"
          flexDirection="column"
          height="600px"
          justifyContent="center"
          width={400}
        >
          {selectedUser != null && <UserCardInfo user={selectedUser} />}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UserListView;
