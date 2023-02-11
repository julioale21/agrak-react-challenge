import React from "react";
import { Stack } from "@chakra-ui/react";
import { UserForm } from "../components/forms/UserForm";

const UserFormView: React.FC = (): JSX.Element => {
  return (
    <Stack>
      <UserForm />
    </Stack>
  );
};

export default UserFormView;
