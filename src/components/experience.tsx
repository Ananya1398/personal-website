"use client";

import { Container, Typography, Stepper, Step, StepLabel,Box, StepContent, Paper } from "@mui/material";
import { motion } from "framer-motion";

const experience = [
  {
    company: "Amazon Robotics",
    role: "Software Development Engineer Co-Op",
    duration: "July 2024 – December 2024",
    description: "Developed automation frameworks for historical data insights. Created cloud architecture using Python Lambda, Athena, and CloudWatch for dashboards and alerts. Automated infrastructure creation with AWS CDK.",
  },
  {
    company: "KPMG India",
    role: "Software Development Consultant",
    duration: "January 2020 – July 2023",
    description: "Led the development of Cloud Security tools and automation solutions. Developed Python-based Cloud Security Posture Management software using Flask, PowerShell, and AWS/Azure/GCP SDKs, deployed for multiple Fortune 500 clients. Built 13+ Azure Cloud Audit bots for policy enforcement. Automated cloud compliance tasks using Terraform and Python. Created dashboards with Power BI and React.js for cloud security insights. Conducted security audits aligning with CIS, NIST, and CSA CCM frameworks.",
  },
];

export default function Experience() {
  return (
    <Container id="experience" sx={{ py: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#ffffff", textAlign: "center", mb: 4 }}>
          Work Experience
        </Typography>

        <Stepper orientation="vertical">
          {experience.map((job, index) => (
            <Step key={index} active>
              <StepLabel>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                  {job.company}
                </Typography>
              </StepLabel>
              <StepContent>
                <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", background: "linear-gradient(135deg, #2c2c54, #6e45e2)", color: "#ffffff" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {/* Role */}
                  <Typography variant="subtitle1" sx={{ color: "#dcdde1" }}>
                    {job.role}
                  </Typography>

                  {/* Duration */}
                  <Typography variant="subtitle1" sx={{ color: "#dcdde1", marginLeft: "auto" }}>
                    {job.duration}
                  </Typography>
                </Box>
                  <Typography sx={{ mt: 1, color: "#f5f6fa" }}>
                    {job.description}
                  </Typography>
                </Paper>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </motion.div>
    </Container>
  );
}
