"use client";

import { ActionIcon, Avatar, Box, Group, Image, Text } from "@mantine/core";
import NavLink from "./NavLink";
import { IconBell } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
export default function Navbar() {
  const user = useSelector((state: RootState) => state.user.user);
  const firstLetter = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "";

  return (
    <Box
      component="nav"
      style={{
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
      }}>
      <Image
        src="/perago2.png"
        alt="peragoLogo"
        w={150}
        h={40}
        style={{ objectFit: "contain", cursor: "pointer" }}
      />

      <Group gap="lg" align="center">
        <Group gap="md" style={{ marginRight: "1rem" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/report">Report</NavLink>
          <NavLink href="/question">Question</NavLink>
        </Group>

        <ActionIcon size="lg" variant="subtle" color="#54ba4f">
          <IconBell size={24} />
        </ActionIcon>

        <ActionIcon size="lg" variant="light" radius="xl">
          {user?.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="User Profile"
              width={30}
              height={30}
              style={{ borderRadius: "50%", cursor: "pointer" }}
            />
          ) : (
            <Avatar
              size={30}
              radius="xl"
              style={{
                backgroundColor: "#54ba4f",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}>
              <Text fz="lg" fw={700} style={{ color: "white" }}>
                {firstLetter}
              </Text>
            </Avatar>
          )}
        </ActionIcon>
      </Group>
    </Box>
  );
}
