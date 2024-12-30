"use client";
import { useState } from "react";
import { Box, Button, Container, Stack, Text, Textarea, Flex, Tooltip, Divider } from "@mantine/core";
import { IconEdit, IconCheck, IconClipboard } from "@tabler/icons-react"; // Beautiful icons
import { useRouter } from "next/navigation";

export default function ReportDetailPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Quarterly Report",
      details: "Prepare the Q4 financial report.",
      answer: "This is the answer to the quarterly report.",
    },
    {
      id: 2,
      title: "Meeting Notes",
      details: "Summarize the last board meeting.",
      answer: "This is the answer to the meeting notes.",
    },
    // Add more questions as needed
  ]);

  const [editingAnswer, setEditingAnswer] = useState(false); // State to toggle edit mode
  const [editedAnswers, setEditedAnswers] = useState<{ [key: number]: string }>({}); // Store edited answers

  const router = useRouter();

  // Handle answer field edit toggle
  const handleEditClick = () => {
    setEditingAnswer(true);
  };

  // Handle answer change
  const handleAnswerChange = (questionId: number, newAnswer: string) => {
    setEditedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: newAnswer,
    }));
  };

  // Save the updated answer
  const handleSaveAnswer = () => {
    const updatedQuestions = questions.map((question) => ({
      ...question,
      answer: editedAnswers[question.id] || question.answer,
    }));
    setQuestions(updatedQuestions);
    setEditingAnswer(false); // Hide Submit button after saving
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
              border: "1px solid #E5E5E5", // Lighter border color
              boxShadow: "2px 14px 16px rgba(0, 0, 0, 0.1)",
              width: "100%",
              borderRadius: "8px",
              marginBottom: "20px",
            }}>
            {/* Question Header (Title and Details) */}
            <Flex direction="column" mb="md">
              <Flex align="center" mb="xs">
                <IconClipboard size={20} style={{ marginRight: "8px", color: "#00BFFF" }} />
                <Text w="500" size="lg" c="black">
                  {question.title}
                </Text>
              </Flex>
              <Text c="black" size="sm">
                {question.details}
              </Text>
            </Flex>

            {/* Horizontal Divider */}
            <Divider my="md" style={{ borderColor: "#E5E5E5" }} />

            {/* Answer Field placed directly under the question */}
            <Flex direction="column" gap="xs" style={{ width: "100%" }}>
              <Text size="sm" style={{ marginRight: "10px", color: "black", wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                {editingAnswer ? (
                  <Textarea
                    value={editedAnswers[question.id] || question.answer}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    minRows={6} // Increased height by increasing minRows
                    style={{ width: "100%", minHeight: "20px" }} // You can adjust the height here as well
                  />
                ) : (
                  question.answer
                )}
              </Text>
            </Flex>
          </Box>
        ))}
      </Stack>

      {/* Single Edit/Submit Button */}
      <Box mt="lg" style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip label={editingAnswer ? "Submit your answers" : "Edit your answers"} position="top" withArrow>
          <Button
            onClick={editingAnswer ? handleSaveAnswer : handleEditClick}
            color="green"
            size="lg"
            radius="md"
            style={{ fontWeight: 600 }}
          >
            {editingAnswer ? (
              <>
                <IconCheck size={16} style={{ marginRight: "8px" }} />
                Submit Answers
              </>
            ) : (
              <>
                <IconEdit size={20} style={{ marginRight: "8px" }} />
                Edit Answers
              </>
            )}
          </Button>
        </Tooltip>
      </Box>
    </Container>
  );
}
