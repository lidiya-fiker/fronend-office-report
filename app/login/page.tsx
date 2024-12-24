"use client";
import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../GlobalRedux/Features/user/userSlice";

import { RootState, AppDispatch } from "../GlobalRedux/store";
import { useRouter } from "next/navigation";

export default function page() {
  //states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //redux state

  const { loading, error} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const handleLoginEvent = async (e: FormEvent) => {
    e.preventDefault();
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
    <form onSubmit={handleLoginEvent}>
      <label>Username</label>
      <input
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <label> Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">{loading ? "Loding..." : "Login"}</button>
      {error && <div>{error}</div>}
    </form>
  );
}
