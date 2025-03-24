import { Container, Typography, Grid, CircularProgress, Box } from "@mui/material";

// ✅ Skills with adjustable proficiency percentages
const skills = [
  { name: "Python", percentage: 95 },
  { name: "Java", percentage: 80 },
  { name: "PowerShell", percentage: 90 },
  { name: "PHP", percentage: 70 },
  { name: "MySQL", percentage: 95 },

  { name: "MongoDB", percentage: 85 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "React.js", percentage: 80 },
  { name: "Node.js", percentage: 70 },
  { name: "TypeScript", percentage: 85 },

  { name: "Docker", percentage: 90 },
  { name: "Terraform", percentage: 75 },
  { name: "Kubernetes", percentage: 65 },
  { name: "Cloud Dev", percentage: 90 },
  { name: "FastAPI", percentage: 80 },

  { name: "Java Swing", percentage: 70 },
  { name: "ServiceNow", percentage: 70 },
  { name: "Numpy", percentage: 65 },
  { name: "Ollama", percentage: 60 },
  { name: "PyTorch", percentage: 70 },


];

export default function Skills() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          color: "#ffffff",
          textAlign: "left"
        }}
        gutterBottom={true}
      >
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            key={index}
            sx={{
              textAlign: "center",
              position: "relative"
            }}
          >
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              {/* ✅ Percentage Value Controlled by Skill Data */}
              <CircularProgress
                variant="determinate"
                value={skill.percentage}
                size={80}
                thickness={5}
                sx={{
                  color: "#90caf9", // Light blue color
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle background ring
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Typography sx={{ mt: 1, color: "#ffffff" }}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
