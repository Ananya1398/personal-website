"use client";

import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
    {
    name: "AWS Certified Security - Specialty",
    image: "/media/aws_security.png",
    link: "https://www.credly.com/badges/d9eddf47-c0a3-4b9f-a1dd-90f506294456?source=linked_in_profile",
  },
    {
    name: "AWS Certified Cloud Practitioner",
    image: "/media/aws_ccp.png",
    link: "https://www.credly.com/earner/earned/badge/67c313db-6117-4258-bd24-0520dc1a6519",
  },
  {
    name: "Microsoft Azure Fundamentals",
    image: "/media/microsoft.png",
    link: "https://www.credly.com/badges/ae1d311b-9504-4e98-8939-153cbfa8ecf3/public_url",
  },
  {
    name: "AWS Cloud Agnostic Audit Certification,",
    image: "/media/aws_audit.png",
    link: "https://drive.google.com/file/d/1u53a7NrML3XQmDyXRZWxC-qI4s0U7-_i/view",
  },
];

export default function Certifications() {
  return (
    <Container id="certifications" sx={{ py: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            mb: 4,
          }}
        >
          Certifications
        </Typography>

                <Grid
          container
          spacing={0} // No default MUI spacing
          columns={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1cm", // This ensures 1cm between both columns and rows
            justifyContent: "center",
          }}
        >
          {certifications.map((cert, index) => (
            <Grid
              item
              xs={12}
              sm={5.8} // slightly less than 6 to make room for 1cm between two items
              key={index}
              sx={{
                flexBasis: "calc(50% - 0.5cm)", // fits two per row with 1cm between
              }}
            >
              <Box
                component="a"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(110, 69, 226, 0.4)",
                  },
                }}
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={400}
                  height={400}
                  style={{
                    objectFit: "contain",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    padding: "8px",
                  }}
                />
                <Typography
                  sx={{
                    mt: 2,
                    color: "#f5f6fa",
                    fontWeight: "medium",
                    fontSize: "1.1rem",
                    textAlign: "center",
                  }}
                >
                  {cert.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </motion.div>
    </Container>
  );
}
