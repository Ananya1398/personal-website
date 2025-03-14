import { useState, useRef } from "react";
import { Container, Typography, TextField, Button, Box, MenuItem, Popper, ClickAwayListener, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const answers = {
  Availability: "I am available for full-time roles starting May 2025",
  Experience: "I have 3.5 years of experience in Backend Development, Cloud, and Security.",
  Education: "I am pursuing an MS in Computer Science at Northeastern University, Boston.",
  Projects: "I have built an AI-powered hiring assistant, learning management system, cloud security tools, and more.",
  Skills: "My core skills include Python, Java, AWS, React.js, Docker, and Kubernetes.",
  Internship: "I recently completed a Co-op as an SDE at Amazon Robotics. Read more about it below!",
  Certifications: "I have AWS Certified Security - Specialty, AWS Cloud Practitioner, and Microsoft Azure Fundamentals certifications.",
  Cloud: "I have experience with AWS, Azure, and GCP, including security posture management and cloud automation.",
  Development: "I have experience in Backend Development using Python, Flask, FastAPI, and Node.js.",
  Security: "I have worked with industry frameworks like CIS, NIST, and CSA CCM to enhance cloud security baselines.",
  Hobbies: "I enjoy writing poetry, listening to music, and exploring nature trails.",
  Available: "I am available for full-time roles starting May 2025",
};

const lowercaseAnswersMap = Object.keys(answers).reduce<{ [key: string]: string }>(
  (acc, key) => {
    (acc as { [key: string]: string })[key.toLowerCase()] = key;
    return acc;
  },
  {} as { [key: string]: string }
);

const questions = Object.keys(answers).map((key) => ({
  value: key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
}));

export default function AISection() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

const handleQuery = () => {
  if (!query.trim()) return;
  const lowerCaseQuery = query.toLowerCase();

  for (const keyword in lowercaseAnswersMap) {
    if (lowerCaseQuery.includes(keyword)) {
      const originalKey = lowercaseAnswersMap[keyword];
      setResponse(answers[originalKey as keyof typeof answers]);
      return;
    }
  }

  setResponse("Please select a question from the dropdown or contact me directly!");
};

const handleSelect = (value: string) => {
  setQuery(value);
  setResponse(answers[value as keyof typeof answers]);
  setShowDropdown(false);
};


  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
    setShowDropdown(true);
  };

  const handleClose = () => {
    setShowDropdown(false);
  };

  const handleCloseResponse = () => {
    setResponse("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      handleQuery();
    }
  };

  return (
    <Container sx={{ py: 5, textAlign: "center", color: "#ffffff" }}>
      {/* Title */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          mb: 3,
        }}
      >
        Have a Question? Ask Me!
      </Typography>

      {/* Search Bar + Ask Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          maxWidth: "600px",
          mx: "auto",
          mb: 3,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box sx={{ flex: 1, position: "relative" }}>
            <TextField
              inputRef={inputRef}
              variant="outlined"
              placeholder="Type your question or Select from the dropdown..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown} // ✅ Listen for Enter key
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "5px",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#cccccc" },
                  "&:hover fieldset": { borderColor: "#6e45e2" },
                  "&.Mui-focused fieldset": { borderColor: "#6e45e2" },
                },
              }}
            />

            <Popper
              open={showDropdown}
              anchorEl={anchorEl}
              placement="bottom-start"
              modifiers={[
                {
                  name: "preventOverflow",
                  options: {
                    boundary: "viewport",
                  },
                },
              ]}
              sx={{
                width: inputRef.current?.clientWidth, // ✅ Match dropdown width with search bar
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "5px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  mt: 1,
                  zIndex: 10,
                  maxHeight: 200,
                  overflowY: "auto",
                }}
              >
                {questions.map((q) => (
                  <MenuItem
                    key={q.value}
                    onClick={() => handleSelect(q.value)}
                    sx={{
                      "&:hover": { backgroundColor: "#f0f0f0" },
                      cursor: "pointer",
                      color: "#333", // ✅ Fix dropdown text color
                    }}
                  >
                    {q.label}
                  </MenuItem>
                ))}
              </Box>
            </Popper>
          </Box>
        </ClickAwayListener>

        {/* Ask Button */}
        <Button
          variant="contained"
          onClick={handleQuery}
          sx={{
            background: "linear-gradient(135deg, #6e45e2, #2575fc)",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            "&:hover": {
              background: "linear-gradient(135deg, #2575fc, #6e45e2)",
            },
          }}
        >
          Ask
        </Button>
      </Box>

      {response && (
        <Box
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: "#e3f2fd",
            borderRadius: "8px",
            position: "relative",
            color: "#333",
            maxWidth: "600px",
            mx: "auto",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <IconButton
            onClick={handleCloseResponse}
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              color: "#333",
              "&:hover": {
                color: "#ff1744",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {response}
        </Box>
      )}
    </Container>
  );
}
