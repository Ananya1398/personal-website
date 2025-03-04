"use client";

import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container id="about" sx={{ py: 5 }}>
        <Box>
          <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#ffffff", mb: 2 }}>
            About Me
          </Typography>
          <Typography sx={{ opacity: 0.8, fontSize: "1.1rem" }}>
            Passionate and fast-learning Software Engineer with 3.5 years of experience in Backend Development, Web Development, DevOps, and Cloud Security. I thrive on solving complex technical problems and creating scalable, efficient solutions.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}