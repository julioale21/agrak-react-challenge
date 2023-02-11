/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable no-console */
import { useMutation, useQueryClient } from "react-query";
import { type User } from "./../interfaces/User";
import { createUser, updateUser } from "./../services/user.service";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../services/firebase.service";

interface FormData {
  user: User | null;
  firstName: string;
  secondName: string;
  email: string;
  fileName: string;
  previewUrl: string | null;
  error: boolean;
  fileInputRef: React.MutableRefObject<HTMLInputElement>;
}

const useForm = (initialData: FormData): any => {
  const [firstName, setFirstName] = useState(initialData.firstName);
  const [secondName, setSecondName] = useState(initialData.secondName);
  const [email, setEmail] = useState(initialData.email);
  const [error, setError] = useState(initialData.error);
  const [fileName, setFileName] = useState(initialData.fileName);
  const [previewUrl, setPreviewUrl] = useState(initialData.previewUrl);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createUserMutation = useMutation(async (user: User) => await createUser(user), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("getUsers");
      navigate("/");
    },
    onError: () => {
      console.log("Error creating user");
    },
  });

  const updateUserMutation = useMutation(async (user: User) => await updateUser(user), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("getUsers");
      navigate("/");
    },
    onError: () => {
      console.log("Error updating user");
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

    const newUser: User = {
      ...initialData.user,
      first_name: firstName,
      second_name: secondName,
      email,
      avatar: previewUrl !== null ? previewUrl : "",
    };

    if (
      initialData.fileInputRef?.current?.files !== null &&
      initialData.fileInputRef.current.files[0] !== undefined
    ) {
      const url = await uploadFile(initialData.fileInputRef?.current?.files[0]);

      newUser.avatar = url as string;
    }

    if (initialData.user !== null) {
      updateUserMutation.mutate(newUser);
    } else {
      createUserMutation.mutate(newUser);
    }

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

  return {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    email,
    setEmail,
    error,
    setError,
    fileName,
    setFileName,
    previewUrl,
    setPreviewUrl,
    handleFileChange,
    handleSubmit,
    handleButtonInputFileClick,
    shortFileName,
  };
};

export default useForm;
