import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function AISection() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    if (!query.trim()) return;
    setResponse("Thinking...");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });
      const data = await res.json();
      setResponse(data.answer || "Error getting response.");
    } catch (error) {
      setResponse("Failed to connect to LLM.");
    }
  };

  return (
    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}>
        Have a Question? Ask Me!
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, maxWidth: "600px", mx: "auto" }}>
        <TextField
          variant="outlined"
          placeholder="Type your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ flex: 1, backgroundColor: "white", borderRadius: "5px" }}
        />
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #6e45e2, #2575fc)",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            '&:hover': { background: "linear-gradient(135deg, #2575fc, #6e45e2)" },
          }}
          onClick={handleQuery}
        >
          Ask
        </Button>
      </Box>
      {response && (
        <Typography sx={{ mt: 3, p: 2, backgroundColor: "#e3f2fd", borderRadius: "8px" }}>
          {response}
        </Typography>
      )}
    </Container>
  );
}
