"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Container, Stack, Text, Textarea } from "@mantine/core";

export default function UserQuestionsPage() {
  const [questions, setQuestions] = useState([
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
    // Add more questions as needed
  ]);

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const router = useRouter();

  // Handle answer change for each question
  const handleAnswerChange = (id: number, value: string) => {
    setAnswers({
      ...answers,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Normally, you would submit the answers to the server here
    // Example: Make an API request to save the answers

    // After submission, redirect the user to their report details page
    router.push("/questiondetail"); // Change to the actual route of the report details page
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
              borderRadius: "8px",
              marginBottom: "20px", // Add some space between question boxes
            }}
          >
            <Text w="500" size="lg" mb="xs" c="black">
              {question.title}
            </Text>
            <Text c="black" size="sm" mb="md">
              {question.details}
            </Text>

            {/* Answer Field placed directly under the question */}
            <Textarea
              label="Your Answer"
              placeholder="Write your report here"
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswerChange(question.id, e.currentTarget.value)}
              required
              mt="md"
              style={{ width: "100%" }}
            />
          </Box>
        ))}
      </Stack>

      {/* Submit Button */}
      <Box mt="lg" style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleSubmit} color="green" size="lg">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
