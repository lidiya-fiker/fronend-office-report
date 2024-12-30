"use client";
import { useHover } from '@mantine/hooks';
import { useElementSize } from '@mantine/hooks';
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
    const {  width, height } = useElementSize();
  const [questions, setQuestions] = useState<
    { id: number; title: string; details: string }[]
  >([
    { id: 1, title: "Quarterly Report", details: "Prepare the Q4 financial report." },
    { id: 2, title: "Meeting Notes", details: "Summarize the last board meeting." },
    { id: 3, title: "daily work report", details: "Prepare the Q4 financial report." },
    { id: 5, title: "report", details: "Summarize the last board meeting." },
    { id: 2, title: "Meeting Notes", details: "Summarize the last board meeting." },
    { id: 3, title: "daily work report", details: "Prepare the Q4 financial report." },
    { id: 5, title: "report", details: "Summarize the last board meeting." },
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
                  <IconTrash size={16} style={{ marginRight: 8, position:'sticky'}} />
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
          bottom: "30px", // Adjust the distance from the bottom
          right: "30px", // Adjust the distance from the right
          zIndex: 10,
        }}
      >
        <Button
          radius="xl"
          size="lg"
          onClick={() => setModalOpen(true)}
          ref={ref} 
          style={{
            transition: "background-color 0.3s, color 0.3s opacity 0.3s",
            backgroundColor: hovered
            ? "rgba(0, 128, 0, 0)" // Apply opacity to green background (RGBA)
            : "green",
            color:hovered? "green":"white"// Change bg color when hovered
          // Change text/icon color to green when hovered
          }}
        >
          <IconPlus size={30} 
          style={{
            marginRight: 2,
           
          }}/>
         
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
          style={{
            width: "100%", // Ensure the textarea takes up the full width
          }}
        />
        <Button mt="md" fullWidth onClick={handleAddQuestion} color='green'>
          Add Question
        </Button>
      </Modal>
    </Container>
  );
}
