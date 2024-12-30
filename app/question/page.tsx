"use client";

import { useHover } from "@mantine/hooks";
import { useElementSize } from "@mantine/hooks";
import {
  Box,
  Button,
  Container,
  Flex,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { useState } from "react";
import { IconEdit, IconTrash, IconPlus } from "@tabler/icons-react";

export default function QuestionsPage() {
  const { hovered, ref } = useHover();
  const { width, height } = useElementSize();
  const [questions, setQuestions] = useState<
    { id: number; title: string; details: string }[]
  >([
    {
      id: 1,
      title: "Quarterly Report",
      details: "Prepare the Q4 financial report.",
    },
    {
      id: 2,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
    },
    {
      id: 3,
      title: "daily work report",
      details: "Prepare the Q4 financial report.",
    },
    { id: 4, title: "report", details: "Summarize the last board meeting." },
    {
      id: 5,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
    },
    {
      id: 6,
      title: "daily work report",
      details: "Prepare the Q4 financial report.",
    },
    { id: 7, title: "report", details: "Summarize the last board meeting." },
    { id: 8, title: "report", details: "Summarize the last board meeting." },
    {
      id: 9,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
    },
    {
      id: 10,
      title: "daily work report",
      details: "Prepare the Q4 financial report.",
    },
    { id: 11, title: "report", details: "Summarize the last board meeting." },
    { id: 12, title: "report", details: "Summarize the last board meeting." },
    {
      id: 21,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
    },
    {
      id: 13,
      title: "daily work report",
      details: "Prepare the Q4 financial report.",
    },
    { id: 14, title: "report", details: "Summarize the last board meeting." },
    { id: 15, title: "report", details: "Summarize the last board meeting." },
    { id: 16, title: "report", details: "Summarize the last board meeting." },
    {
      id: 17,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
    },
    {
      id: 18,
      title: "daily work report",
      details: "Prepare the Q4 financial report.",
    },
    { id: 25, title: "report", details: "Summarize the last board meeting." },
    {
      id: 19,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
    },
    {
      id: 20,
      title: "daily work report",
      details: "Prepare the Q4 financial report.",
    },
    { id: 98, title: "report", details: "Summarize the last board meeting." },
  ]);

  // Modal and form state for adding or editing questions
  const [isModalOpen, setModalOpen] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState("");
  const [newQuestionDetails, setNewQuestionDetails] = useState("");
  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(null);

  const handleAddQuestion = () => {
    if (newQuestionTitle.trim() && newQuestionDetails.trim()) {
      setQuestions([
        ...questions,
        {
          id: questions.length + 1,
          title: newQuestionTitle,
          details: newQuestionDetails,
        },
      ]);
      setNewQuestionTitle("");
      setNewQuestionDetails("");
      setModalOpen(false);
    }
  };

  const handleEditQuestion = () => {
    if (newQuestionTitle.trim() && newQuestionDetails.trim() && editingQuestionId !== null) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === editingQuestionId
            ? { ...question, title: newQuestionTitle, details: newQuestionDetails }
            : question
        )
      );
      setEditingQuestionId(null);
      setNewQuestionTitle("");
      setNewQuestionDetails("");
      setModalOpen(false);
    }
  };

  const handleDelete = (id: number) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleEditClick = (question: { id: number; title: string; details: string }) => {
    setEditingQuestionId(question.id);
    setNewQuestionTitle(question.title);
    setNewQuestionDetails(question.details);
    setModalOpen(true);
  };

  const handleAddClick = () => {
    // Reset the form for adding a new question
    setEditingQuestionId(null);
    setNewQuestionTitle("");
    setNewQuestionDetails("");
    setModalOpen(true);
  };

  return (
    <Container size="xl" px="md" mt="lg">
      <Stack p="md">
        {questions.map((question) => (
          <Box
            key={question.id}
            p="lg"
            style={{
              backgroundColor: "white",
              border: "1px solid green",
              boxShadow: "2px 14px 16px rgba(0, 0, 0, 0.1)",
              width: "100%",
              borderRadius: "8px", // Applying border radius through style
            }}>
            <Flex justify="space-between" align="center">
              <Box>
                <Text w="500" size="lg" mb="xs" c="black">
                  {question.title}
                </Text>
                <Text c="black" size="sm">
                  {question.details}
                </Text>
              </Box>
              <Flex gap="xs">
                <Button
                  variant="outline"
                  color="green"
                  size="xs"
                  onClick={() => handleEditClick(question)}>
                  <IconEdit size={16} style={{ marginRight: 8 }} />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  color="red"
                  size="xs"
                  onClick={() => handleDelete(question.id)}>
                  <IconTrash size={16} style={{ marginRight: 8, position: "sticky" }} />
                  Delete
                </Button>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Stack>

      {/* Floating Add Button positioned at bottom-right corner using absolute positioning */}
      <Box
  style={{
    position: "fixed",
    bottom: "30px", // Keeps the button fixed at the bottom
    right: "30px", // Keeps the button fixed to the right
    zIndex: 10, // Ensure the button is always above other content
  }}>
  <Button
    radius="xl"
    size="lg"
    onClick={handleAddClick} // Trigger "Add" logic
    color="#59b556"
    ref={ref}
    style={{
      width: "60px", // Set fixed width to make it circular
      height: "60px", // Set fixed height to make it circular
      display: "flex", // Use flexbox to center the icon
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      padding: 0, // Remove any padding that could affect positioning
      transition: "all 0.3s ease-in-out", // Smooth transition for hover effect (if any)
      zIndex: 100, // Make sure the button stays on top
    }}>
    <IconPlus
      size={30}
      style={{
        marginRight: 2,
      }}
    />
  </Button>
</Box>

{/* Add Question Modal */}
<Modal
  opened={isModalOpen}
  onClose={() => setModalOpen(false)}
  title="Add New Question"
  centered
  c="black"
  size="lg"
  style={{
    zIndex: 1000, // Ensure the modal stays above everything else
  }}>
  <TextInput
    label="Question Title"
    placeholder="Enter question title"
    value={newQuestionTitle}
    onChange={(e) => setNewQuestionTitle(e.currentTarget.value)}
    required
    mb="md"
  />

  <Textarea
    label="Question Details"
    placeholder="Enter question details"
    value={newQuestionDetails}
    onChange={(e) => setNewQuestionDetails(e.currentTarget.value)}
    required
    style={{
      width: "100%", // Ensure the textarea takes up the full width
    }}
  />
  <Button mt="md" fullWidth onClick={handleAddQuestion} color="green">
    Add Question
  </Button>
</Modal>

    </Container>
  );
}
