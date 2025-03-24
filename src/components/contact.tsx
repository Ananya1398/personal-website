import { Typography, Box } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
      <Box id="contact">
          <Typography
              sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.1rem",
                  opacity: 0.8,
                  mt: 3,
                  color: "#bbbbbb",
              }}
          >
              Let&apos;s connect! Feel free to reach out.
          </Typography>
          <Box
              sx={{
                  display: "flex",
                  justifyContent: "left",
                  gap: 4,
                  mt: 2,
              }}
          >
              {/* LinkedIn */}
              <a
                  href="https://www.linkedin.com/in/ananyaasthana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: "none"}}
              >
                  <FaLinkedin
                      size={42}
                      color="#ffffff"
                      style={{
                          transition: "transform 0.2s ease, color 0.2s ease",
                          cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#0077B5")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                  />
              </a>

              {/* GitHub */}
              <a
                  href="https://github.com/Ananya1398"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: "none"}}
              >
                  <FaGithub
                      size={42}
                      color="#ffffff"
                      style={{
                          transition: "transform 0.2s ease, color 0.2s ease",
                          cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#6e45e2")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                  />
              </a>

              {/* Email */}
              <a
                  href="mailto:ananya.asthana13@gmail.com"
                  style={{textDecoration: "none"}}
              >
              <FaEnvelope
                  size={42}
                  color="#ffffff"
                  style={{
                      transition: "transform 0.2s ease, color 0.2s ease",
                      cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D44638")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              />
          </a>
      </Box>

    {/* Subtitle */
    }
</Box>
)
    ;
}
