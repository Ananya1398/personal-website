"use client";

import { Container, Typography, Stepper, Step, StepLabel,Box, StepContent, Paper } from "@mui/material";
import { motion } from "framer-motion";

const experience = [
  {
    company: "Amazon Robotics",
    role: "Software Development Engineer Co-Op",
    duration: "July 2024 – December 2024",
    description: `•\tDeveloped the Amazon Robotics Resource Management (ARRM) Historical Insights Toolkit, streamlining metrics generation from drive unit and fulfillment center historical data, resulting in conservation of human effort and prevention of loss of scripts.
•\tAutomated the creation of cloud architecture consisting of consisting of Python Lambda for query execution, Athena for data extraction, S3 for storage, IAM roles and policies for least privilege, CloudWatch for dashboarding, EventBridge for periodic process execution, using the TypeScript-based AWS Cloud Development Kit (CDK)
•\tDocumented an extensive and thorough user guide manual, system architecture and design documents to allow easy adoption and updates
`,
  },
{
    company: "KPMG India",
    role: "Software Development Consultant",
    duration: "January 2020 – July 2023",
    description: `
      • Led the development of a Python-based Cloud Security Posture Management tool using Flask, PowerShell, cloud SDKs (AWS, Azure, GCP), with database management using MySQL, deployed for multiple Fortune 500 clients.
      • Developed 13 Azure Cloud Audit bots for KPMG’s Intelligent Platform for Automation, used globally by member firms.
      • Spearheaded the automation of cloud processes with Terraform, Python, PowerShell, and Bash, resolving IAM, IaC, Cost optimization, Lambda, and GitLab tickets; containerized solutions using Docker and Azure containers.
      • Built a scalable PHP-based Third-Party Risk Management solution using Zend Framework, MySQL, and web development technologies including React.js and Redux. Used PowerBI, D3.js and charts.js for data visualization.
    `,
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
                  <Typography variant="subtitle1" sx={{ color: "#f5f6fa", fontSize: "1.2rem" }}>
                    {job.role}
                  </Typography>

                  {/* Duration */}
                  <Typography variant="subtitle1" sx={{ color: "#f5f6fa", marginLeft: "auto", fontSize: "1.1rem" }}>
                    {job.duration}
                  </Typography>

                </Box>
                <Box sx={{ mt: 1 }}>
                    {job.description.trim().split("\n").map((line, i) => (
                      <Typography key={i} sx={{ color: "#dcdde1", mb: 0.5, fontSize: "1.0rem" }}>
                        {line.trim()}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </motion.div>
    </Container>
  );
}
