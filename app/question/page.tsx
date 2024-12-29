"use client";

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
} from "@mantine/core";
import { useState } from "react";
import { IconEdit, IconTrash, IconPlus } from "@tabler/icons-react";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<
    { id: number; title: string; details: string }[]
  >([
    { id: 1, title: "Quarterly Report", details: "Prepare the Q4 financial report." },
    { id: 2, title: "Meeting Notes", details: "Summarize the last board meeting." },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState("");
  const [newQuestionDetails, setNewQuestionDetails] = useState("");

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

  const handleDelete = (id: number) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <Container size="xl" px="md" mt="lg" >
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
            }}
          >
            <Flex justify="space-between" align="center">
              <Box>
                <Text  w="500" size="lg" mb="xs" c="black">
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
                  onClick={() => console.log("Edit button clicked!")}
                >
                  <IconEdit size={16} style={{ marginRight: 8 }} />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  color="red"
                  size="xs"
                  onClick={() => handleDelete(question.id)}
                >
                  <IconTrash size={16} style={{ marginRight: 8 }} />
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
          position: "absolute",
          bottom: "30px", // Adjust the distance from the bottom
          right: "30px", // Adjust the distance from the right
        }}
      >
        <Button
          radius="xl"
          size="lg"
          color="teal"
          onClick={() => setModalOpen(true)}
        >
          <IconPlus size={20} style={{ marginRight: 8 }} />
          <h3>Add Question</h3>
        </Button>
      </Box>

      {/* Add Question Modal */}
      <Modal
        opened={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Question"
        c="black"
       
      >
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
        />
        <Button mt="md" fullWidth onClick={handleAddQuestion}>
          Add Question
        </Button>
      </Modal>
    </Container>
  );
}
