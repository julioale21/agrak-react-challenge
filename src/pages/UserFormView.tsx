import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { UserForm } from "../components";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchUserByID } from "../services/user.service";
import { type User } from "../interfaces/User";

interface UserFormViewProps {
  match?: any;
}

const UserFormView: React.FC<UserFormViewProps> = (): JSX.Element => {
  let user = null;
  const params = useParams();
  const { id } = params;

  const { data, isLoading } = useQuery<User | User[]>(
    ["fetchUserByID", id],
    async () => await fetchUserByID(id as string),
  );

  if (data != null) {
    if (Array.isArray(data)) {
      user = data.filter((user) => user.id === id)[0];
    } else {
      user = data;
    }
  }

  if (isLoading) {
    return (
      <Stack alignItems="center" height="100vh" justifyContent="center" width="100vw">
        <Text>Loading...</Text>
      </Stack>
    );
  }

  return (
    <Stack>
      <UserForm user={user as User} />
    </Stack>
  );
};

export default UserFormView;
