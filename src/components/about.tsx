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
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              color: "#ffffff",
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Typography sx={{ opacity: 0.8, fontSize: "1.1rem", lineHeight: "1.6" }}>
            Passionate about creating impact through writing—whether it&apos;s code that drives innovation or poetry that inspires.
            <br /><br />
            I&apos;m a fast-learning Software Engineer with 3.5 years of experience in Backend Development, Web Development, DevOps, and Cloud Security. Most recently, I was an SDE Co-op at Amazon Robotics, and currently I am pursuing my MS in Computer Science at Northeastern University, Boston.
            <br /><br />
            My experience spans developing scalable software solutions for automation, including historical data insights, image processing, cloud security posture management, cloud auditing, and third-party risk management. I&apos;ve also worked with industry-standard frameworks like CIS, NIST, and CSA CCM, contributing to robust cloud security baselines.
            <br /><br />
            I thrive in environments where problem-solving meets creativity, and I look forward to driving solutions that merge cutting-edge technology with seamless user experiences.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}
