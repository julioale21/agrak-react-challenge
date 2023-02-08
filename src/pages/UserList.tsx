import React, { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { UserListItem, UserCardInfo } from "../components";
import { type User } from "../interfaces/User";
import { fetchUsers } from "../services/userService";

const UserList = (): JSX.Element => {
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
    <Stack
      alignItems="center"
      backgroundColor="yellow.200"
      justifyContent="center"
      minHeight="100vh"
    >
      <Stack
        alignItems="center"
        backgroundColor="orange.100"
        flexDirection={"row"}
        justifyContent="center"
        padding={2}
        width={800}
      >
        <Stack
          height="600px"
          justifyContent="center"
          spacing={0}
          sx={{ overflow: "auto", scrollbarWidth: 0 }}
        >
          {data?.map((user) => (
            <UserListItem key={user.id} user={user} onSelectedUser={setSelectedUser} />
          ))}
        </Stack>
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

export default UserList;
