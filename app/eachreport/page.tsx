
"use client";

import { useState } from "react";
import {
  Container,
  Card,
  Text,
  Group,
  Grid,
  Pagination,
  Select,
  MantineTheme,
} from "@mantine/core";
import { DateInput, DatePicker } from "@mantine/dates"; // Updated import

// Mock dynamic data with questions and createdAt
const reportsData = [
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  {
    id: "1",
    name: "Robert Wolfkisser",
    questions: [
      {
        month: "January",
        question: "How many tasks were completed?",
        report: "Completed 5 tasks, excellent performance.",
        createdAt: "2024-01-15",
      },
      {
        month: "February",
        question: "What challenges were handled?",
        report: "Handled critical tasks under tight deadlines.",
        createdAt: "2024-02-10",
      },
    ],
  },
  // Add more mock data as needed
];

export default function ReportsPage() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const ITEMS_PER_PAGE = 6;

  // Filter and paginate questions
  const filteredReports = reportsData
    .flatMap((user) =>
      user.questions
        .filter((q) => q.month === selectedMonth)
        .map((q) => ({
          ...q,
          name: user.name,
        })),
    )
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
          <input
            placeholder="select date"
            type="date"
            value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
            onChange={(e) =>
              setSelectedDate(e.target.value ? new Date(e.target.value) : null)
            }
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </Group>
      </Group>

      <Grid>
        {filteredReports.map((report, index) => (
          <Grid.Col key={index} span={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Text size="sm" mb="xs" fw={600}>
                {report.question}
              </Text>
              <Text size="sm" pl={"10px"}>
                {report.report}
              </Text>
              <Text size="sm" color="dimmed" mt="md">
                Sent on: {new Date(report.createdAt).toLocaleDateString()}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Group justify="center" mt="lg">
        <Pagination
          total={Math.ceil(
            reportsData.flatMap((user) =>
              user.questions.filter((q) => q.month === selectedMonth),
            ).length / ITEMS_PER_PAGE,
          )}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </Group>
    </Container>
  );
}

