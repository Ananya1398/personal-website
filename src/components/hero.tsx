"use client";

import { Container, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        background: "linear-gradient(135deg, #6e45e2, #2575fc)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        padding: "40px 0",
      }}
    >
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>

        {/* Left Side: Text Content */}
        <Box sx={{ maxWidth: "50%", textAlign: "left" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Ananya Asthana
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
            Software Engineer | Cloud Security | AI Enthusiast
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 4, opacity: 0.8 }}>
            Passionate about backend development, AI, and cloud security, I love crafting scalable solutions that make an impact.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              background: "#ffffff",
              color: "#6e45e2",
              padding: "12px 24px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": {
                background: "#ddd",
              },
            }}
            href="/resume.pdf"
            download
          >
            Download Resume
          </Button>
        </Box>

        {/* Right Side: Animated Profile Image */}
        <Box sx={{ maxWidth: "40%" }}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={300}
              height={300}
              style={{
                borderRadius: "50%",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              }}
            />
          </motion.div>
        </Box>

      </Container>
    </Box>
  );
}
