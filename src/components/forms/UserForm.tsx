/* eslint-disable no-console */
import React, { useRef } from "react";
import { type User } from "../../interfaces/User";

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
import useForm from "../../hooks/useForm";
import { isValidEmail } from "../../utils/helpers/email.helper";

interface UserFormProps {
  user?: User;
}

const UserForm: React.FC<UserFormProps> = ({ user = null }) => {
  const fileInputRef = useRef<any>();
  const initialData = {
    user,
    firstName: user !== null ? user.first_name : "",
    secondName: user !== null ? user.second_name : "",
    email: user !== null ? user.email : "",
    previewUrl: user !== null ? user.avatar : null,
    error: false,
    fileInputRef,
    fileName: "Select avatar file",
  };

  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    email,
    setEmail,
    error,
    setError,
    fileName,
    previewUrl,
    handleFileChange,
    handleSubmit,
    handleButtonInputFileClick,
    shortFileName,
  } = useForm(initialData);

  return (
    <Flex
      align={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      justify={"center"}
      minH={"100vh"}
    >
      <Stack maxW={"lg"} mx={"auto"} px={6} py={12} spacing={8}>
        <Box bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} rounded={"lg"}>
          <Stack align={"center"} marginBottom={20}>
            <Heading color="blue.600" fontSize={"4xl"} textAlign={"center"}>
              {`${user !== null ? "UPDATE" : "CREATE"} USER`}
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isInvalid={error === true && firstName === ""}>
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
                <FormControl id="lastName" isInvalid={error === true && secondName === ""}>
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
            <FormControl
              isRequired
              id="email"
              isInvalid={error === true && (email === "" || !isValidEmail(email))}
            >
              <FormLabel fontWeight="semibold">Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
              />
              <FormErrorMessage>
                {!isValidEmail(email) ? "Email is not valid" : "Email is required"}
              </FormErrorMessage>
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
                bg={"blue.600"}
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
