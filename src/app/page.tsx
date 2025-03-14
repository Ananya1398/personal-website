"use client";

import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import AISection from "@/components/AI";  // Import the AI section
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Documents from "@/components/documents";
import { Container, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InteractiveBackground from "@/components/interactiveBg"; // Import the InteractiveBackground component // If you still want to keep the custom hook

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default function Home() {
  // Use the interactive background logic
  InteractiveBackground(); // Call the custom hook to handle background logic

  return (
    <ThemeProvider theme={theme}>
      <Box id="main-container">
        {/* Cursor and Navbar */}
        <Cursor />
        <Navbar />

        {/* Interactive Background Component */}
        <InteractiveBackground /> {/* This component now handles the background rendering */}

        {/* Hero Section */}
        <Box id="hero">
          <Hero />
        </Box>

        {/* AI Section */}
        <Box id="AIsection">
          <AISection /> {/* Render the AI Section */}
        </Box>

        {/* About & Skills Section - Two Column Layout */}
        <Container id="about-skills" sx={{ py: 1 }}>
          <Grid container spacing={5} alignItems="center">
            {/* Left: About Me */}
            <Grid item xs={12} md={6}>
              <About />
            </Grid>
            {/* Right: Skills */}
            <Grid item xs={12} md={6}>
              <Skills />
            </Grid>
          </Grid>
        </Container>

        {/* Experience Section */}
        <Box id="experience">
          <Experience />
        </Box>

        {/* Projects Section */}
        <Box id="projects">
          <Projects />
        </Box>

           {/* Education Section */}
        <Box id="education">
        <Education />
        </Box>

        {/* Publications Section */}
        <Box id="publications">
          <Publications />
        </Box>

        {/* Documents Section */}
        <Box id="documents">
          <Documents />
        </Box>

      </Box>
    </ThemeProvider>
  );
}
