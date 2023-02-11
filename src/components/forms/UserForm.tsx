/* eslint-disable no-console */
import React, { useRef, useState } from "react";
import { type User } from "../../interfaces/User";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../services/firebase.service";
import { createUser } from "../../services/user.service";

import { useMutation, useQueryClient } from "react-query";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";

interface UserFormProps {
  user?: User;
}

const UserForm: React.FC<UserFormProps> = ({ user = null }) => {
  const [firstName, setFirstName] = useState<string>(user !== null ? user.first_name : "");
  const [secondName, setSecondName] = useState<string>(user !== null ? user.second_name : "");
  const [email, setEmail] = useState<string>(user !== null ? user.email : "");
  const [error, setError] = useState<boolean>(false);
  const [fileName, setFileName] = useState("Select avatar file");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<any>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(async (user: User) => await createUser(user), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("getUsers");
      navigate("/");
    },
    onError: () => {
      console.log("Error deleting user");
    },
  });

  const handleFileChange = (event: any): void => {
    setFileName(event.target.files[0].name);
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (firstName === "" || secondName === "" || email === "") {
      setError(true);

      return;
    }

    const url = await uploadFile(fileInputRef.current.files[0]);

    const user: User = {
      first_name: firstName,
      second_name: secondName,
      email,
      avatar: url as string,
    };

    mutation.mutate(user);

    setError(false);
  };

  const handleButtonInputFileClick = (): void => {
    const input = document.getElementById("avatar-input");

    if (input != null) {
      input.click();
    }
  };

  const shortFileName = (): string => {
    if (fileName.length > 60) {
      return `${fileName.substring(0, 60)}...`;
    }

    return fileName;
  };

  return (
    <Flex
      align={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      justify={"center"}
      minH={"100vh"}
    >
      <Stack maxW={"lg"} mx={"auto"} px={6} py={12} spacing={8}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            {`${user !== null ? "Update" : "Create"} User`}
          </Heading>
        </Stack>
        <Box bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} rounded={"lg"}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isInvalid={error && firstName === ""}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setError(false);
                    }}
                  />
                  <FormErrorMessage>First name is required</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isInvalid={error && secondName === ""}>
                  <FormLabel fontWeight="semibold">Second Name</FormLabel>
                  <Input
                    type="text"
                    value={secondName}
                    onChange={(e) => {
                      setSecondName(e.target.value);
                      setError(false);
                    }}
                  />
                  <FormErrorMessage>Second name is required</FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired id="email" isInvalid={error && email === ""}>
              <FormLabel fontWeight="semibold">Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
              />
              <FormErrorMessage>Email is required</FormErrorMessage>
            </FormControl>
            <Stack>
              <FormControl id="avatar" marginTop={5}>
                <FormLabel fontWeight="semibold" textAlign="center" width="100%">
                  Avatar
                </FormLabel>
                <Input
                  ref={fileInputRef}
                  accept="image/*"
                  id="avatar-input"
                  placeholder="file"
                  style={{ display: "none" }}
                  type="file"
                  onChange={handleFileChange}
                />
                {previewUrl !== null && (
                  <Stack alignItems="center" justifyContent="center" marginY={8} width="100%">
                    <Image alt={fileName} maxW="400px" src={previewUrl} />
                  </Stack>
                )}
                <Button size="xs" onClick={handleButtonInputFileClick}>
                  {shortFileName()}
                </Button>
              </FormControl>
            </Stack>
            <Stack pt={2} spacing={10}>
              <Button
                _hover={{
                  bg: "blue.500",
                }}
                bg={"blue.400"}
                color={"white"}
                loadingText="Submitting"
                size="lg"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={handleSubmit}
              >
                {user !== null ? "Update" : "Create"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export { UserForm };
