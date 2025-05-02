"use client";

import { Container, Typography, Stepper, Step, StepLabel, Box, StepContent, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = [
  {
    company: "Amazon Robotics",
    role: "Software Development Engineer Co-Op",
    duration: "July 2024 – December 2024",
    logo: "/media/amazon.png",
    description: `•\tEnhanced the Robotic Movement organization’s Java-based AR Resource Management (ARRM) Portal by adding dynamic input support for allocating resources to fulfillment center task plans, modifying API workflows, DAO DTO models, Tomcat server configs, improving portal configurability for robotic drive unit workflows.
•\tDeveloped the ARRM Historical Insights Toolkit (ARRM HIT), a reusable framework to automate metric generation from drive unit and fulfillment center data, eliminating manual rescripting, used by 5+ engineering teams to drive feature updates.
•\tAutomated ARRM HIT infrastructure setup programmatically using the TypeScript-based AWS Cloud Development Kit to provision Python Lambda for query execution, Athena for data extraction, S3 for storage, IAM roles for least privilege, CloudWatch for dashboards, and EventBridge for periodic execution. Created modular unit tests and an extensive development guide.
`,
  },
  {
    company: "KPMG",
    role: "Software Development Engineer",
    duration: "January 2020 – July 2023",
    logo: "/media/kpmg.png",
    description: `
      • Led the development of a Python Cloud Security Posture Management tool using Flask REST APIs, PowerShell, cloud SDKs (AWS, Azure, GCP), with a MySQL database, deployed for 10+ Fortune 500 clients, saving 200+ hours/month in manual cloud audit effort.
      • Developed 13 Java Azure Cloud Audit bots for KPMG’s Intelligent Automation Platform, used globally by 8 KPMG member firms to automate cloud control validation, including admin access, password policies, CIS, NIST and CSA CCM baselines.
      • Orchestrated cloud pipeline automation using Terraform, Python, PowerShell, and Bash, resolving 120+ IAM, IaC, Lambda tickets, reducing issue resolution time by 50% and cloud operation costs by 15%; containerized the solution using Docker and Az containers.
      • Built a scalable PHP Zend-based Third-Party Risk Management solution with MySQL, React.js, reducing evaluation time from 2+ days to 3 hours and improving detection accuracy by 25% using dynamic risk scoring, with visual insights using PowerBI and D3.js.
      • Architected a CI/CD pipeline with Jenkins, GitLab, K8s and Splunk for monitoring, saving the effort of 3+ resources weekly.
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
          Work Experience
        </Typography>

        <Stepper orientation="vertical">
          {experience.map((job, index) => (
            <Step key={index} active>
            <StepLabel>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", mb: 1 }}>
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={200}
                  height={70}
                  style={{
                    objectFit: "contain",
                    marginBottom: "0.25rem",
                    marginLeft:
                      job.company === "Amazon Robotics" ? "-10px" :
                      job.company === "KPMG" ? "-11px" :
                      "0px",
                  }}
                />

              </Box>
            </StepLabel>

              <StepContent>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #2c2c54, #6e45e2)",
                    color: "#ffffff",
                  }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff", textAlign: "left" }}>
                  {job.company}
                </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#f5f6fa", fontSize: "1.2rem" }}>
                      {job.role}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "#f5f6fa", marginLeft: "auto", fontSize: "1.1rem" }}>
                      {job.duration}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 1 }}>
                    <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                      {job.description
                        .trim()
                        .split("•")
                        .filter((line) => line.trim() !== "")
                        .map((line, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: "0.75rem",
                              color: "#dcdde1",
                              fontSize: "1rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {line.trim()}
                          </li>
                        ))}
                    </ul>
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
