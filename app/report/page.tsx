"use client";
import { useState } from "react";
import {
  ActionIcon,
  Avatar,
  Group,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const data = [
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
  },
  {
    id: "2",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
  },
  {
    id: "3",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
  },
  {
    id: "4",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
  },
  {
    id: "5",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
  },
];

export default function TableSelection() {
  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={26} src={item.avatar} radius={26} />
          <Text size="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>{item.email}</Table.Td>
      <Table.Td>{item.job}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Group
        align="center"
        justify="center"
        style={{ marginTop: "1px", marginBottom: "10px" }}>
        <Paper p="md" style={{ width: "800px" }}>
          <TextInput
            placeholder="Search"
            rightSection={
              <ActionIcon variant="light" color="#54ba4f">
                <IconSearch size={16} />
              </ActionIcon>
            }
            rightSectionWidth={40}
          />
        </Paper>
      </Group>
      <ScrollArea m={"25px"}>
        <Table miw={800} verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>User</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Job</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
