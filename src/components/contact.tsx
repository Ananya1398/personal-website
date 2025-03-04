import { Container, Typography, Box } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <Container id="contact" sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#ffffff", textAlign: "left" }} gutterBottom>Contact</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        <a href="https://linkedin.com/in/ananyaasthana" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/ananyaasthana" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="mailto:ananya.asthana13@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </Box>
    </Container>
  );
}
