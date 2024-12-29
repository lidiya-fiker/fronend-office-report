"use client";
import {
  Button,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";

import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../GlobalRedux/Features/user/userSlice";
import { RootState, AppDispatch } from "../GlobalRedux/store";
import { useRouter } from "next/navigation";

export default function page() {
  //states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  //redux state

  const { loading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const validateForm = () => {
    const newErrors: { username?: string; password?: string } = {};

    if (username.trim() === "") {
      newErrors.username = "This field is required";
    }

    if (password.length < 6) {
      newErrors.password = "Password should include at least 6 characters";
    }

    setErrors(newErrors);

    // Return true if there are no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginEvent = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // If validation fails, don't proceed with login
    }

    const userCredentials = {
      username,
      password,
    };

    try {
      const result = await dispatch(loginUser(userCredentials));
      if (result.meta.requestStatus === "fulfilled") {
        setUsername("");
        setPassword("");
        router.push("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Paper
        radius="md"
        p="xl"
        withBorder
        className="w-full max-w-md shadow-lg">
        <Divider label="LOG IN" labelPosition="center" my="lg" />
        <form onSubmit={handleLoginEvent}>
          <Stack>
            <TextInput
              required
              label="Username or Primary Email"
              placeholder="Enter your username or email"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
              error={errors.username}
              radius="md"
            />
            
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              error={errors.password}
              radius="md"
            />
          </Stack>
          {error && <div className="text-red-500 mt-2">{error}</div>}

          <Group justify="space-between" mt="xl">
            <Button type="submit" radius="xl" color="#54ba4f">
              {loading ? "Loding..." : "Login"}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
