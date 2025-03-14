"use client";

import { Container, Box, Typography, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"; // Education Icon

const educationData = [
  {
    institution: "Northeastern University",
    degree: "Master of Science in Computer Science",
    dates: "2023 – 2025",
    gpa: "3.83 / 4.0",
    coursework: ["Programming Design Paradigms", "Algorithms", "DBMS", "Web Dev", "Artificial Intelligence", "Scalable Distributed Systems", "Human-Computer Interaction"],
    logo: "/media/neu.png", // Add this to public/logos folder
  },
  {
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    dates: "2016 – 2020",
    gpa: "8.51 / 10",
    coursework: ["Operating Systems", "Algorithms Design and Analysis", "Compilor Design", "Computer System Architecture", "Data Structures", "Theory of Computation", "Computer Networks", "Cloud", "Digital System Design", "Microprocessors and Microcontrollers", "Software Engineering Principals", "Object-Oriented Programming using C++", "Programming in Java" , "Programming in Python", "Programming in PHP", "Internet of Things", "Data Science and Big Data Analytics", "Information Security",  "Calculus and Solid Geometry", "Discrete Structures"],

    logo: "/media/srm.png", // Add this to public/logos folder
  },
];

export default function Education() {
  return (
    <Container id="education" sx={{ py: 5 }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          color: "#ffffff",
          mb: 4,
            textAlign: "center"
        }}
      >
        Education
      </Typography>

      {educationData.map((edu, index) => (
        <Grid
          container
          spacing={3}
          alignItems="center"
          key={index}
          sx={{
            mb: 4,
            padding: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.05)", // Subtle background for card
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)", // Subtle shadow
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          {/* Left Side: Logo or Icon */}
          <Grid item xs={12} md={3}>
            {edu.logo ? (
              <Box
                component="img"
                src={edu.logo}
                alt={`${edu.institution} Logo`}
                sx={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "150px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <SchoolIcon
                sx={{
                  fontSize: 60,
                  color: "#6e45e2",
                }}
              />
            )}
          </Grid>

          {/* Right Side: Details */}
          <Grid item xs={12} md={9}>
            {/* Degree */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {edu.degree}
            </Typography>

            {/* Institution */}
            <Typography
              variant="subtitle1"
              sx={{
                color: "#b0b0b0",
                fontFamily: "Poppins, sans-serif",
                mb: 0.5,
              }}
            >
              {edu.institution}
            </Typography>

            {/* Dates and GPA */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#dcdde1",
                fontSize: "0.9rem",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <Typography variant="body2">
                {edu.dates}
              </Typography>
              <Typography variant="body2">
                GPA: {edu.gpa}
              </Typography>
            </Box>

            {/* Coursework */}
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                mt: 1,
                fontFamily: "Poppins, sans-serif",
                lineHeight: 1.5,
              }}
            >Relevant Coursework:
                </Typography>
             <Typography variant="body2"
              sx={{
                color: "#cccccc",
                mt: 1,
                fontFamily: "Poppins, sans-serif",
                lineHeight: 1.5,
              }}
            >
                 {edu.coursework.join(", ")}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
