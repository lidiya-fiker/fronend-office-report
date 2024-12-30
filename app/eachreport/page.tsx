"use client";

import { useState } from "react";
import {
  Container,
  Card,
  Text,
  Group,
  Grid,
  Avatar,
  Pagination,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates"; // Updated import

// Mock dynamic data
const reportsData = [
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    reports: [
      { month: "January", report: "Completed 5 tasks, excellent performance." },
      {
        month: "February",
        report: "Handled critical tasks under tight deadlines.",
      },
    ],
  },
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    reports: [
      { month: "January", report: "Completed 5 tasks, excellent performance." },
      {
        month: "February",
        report: "Handled critical tasks under tight deadlines.",
      },
    ],
  },
  {
    id: "2",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    reports: [
      { month: "January", report: "Completed 5 tasks, excellent performance." },
      {
        month: "February",
        report: "Handled critical tasks under tight deadlines.",
      },
    ],
  },
  {
    id: "3",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    reports: [
      { month: "January", report: "Completed 5 tasks, excellent performance." },
      {
        month: "February",
        report: "Handled critical tasks under tight deadlines.",
      },
    ],
  },
  {
    id: "4",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    reports: [
      { month: "January", report: "Completed 5 tasks, excellent performance." },
      {
        month: "February",
        report: "Handled critical tasks under tight deadlines.",
      },
    ],
  },
];

export default function ReportsPage() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const ITEMS_PER_PAGE = 6;

  // Filter and paginate reports
  const filteredReports = reportsData
    .map((user) => ({
      ...user,
      report:
        user.reports.find((r) => r.month === selectedMonth)?.report ||
        "No report available.",
    }))
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <Container size="md" py="lg">
      <Group justify="space-between" mb="lg" align="flex-start">
        <Text size="xl" fw={700}>
          Reports
        </Text>

        <Group>
          <Select
            data={["January", "February", "March", "April"]}
            value={selectedMonth}
            onChange={(value) => setSelectedMonth(value || "")}
            placeholder="Select a month"
          />
          <DateInput
            placeholder="Select date"
            value={selectedDate}
            onChange={setSelectedDate}
            clearable
          />
        </Group>
      </Group>

      <Grid>
        {filteredReports.map((user) => (
          <Grid.Col key={user.id} span={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Group align="center" mb="sm">
                <Avatar src={user.avatar} size={40} radius="xl" />
                <Text size="lg" fw={500}>
                  {user.name}
                </Text>
              </Group>
              <Text size="sm">{user.report}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Group justify="center" mt="lg">
        <Pagination
          total={Math.ceil(reportsData.length / ITEMS_PER_PAGE)}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </Group>
    </Container>
  );
}
