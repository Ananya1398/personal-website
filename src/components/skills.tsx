import { Container, Typography, Grid, CircularProgress, Box } from "@mui/material";

const skills = [
  "Python", "Java", "React.js", "AWS", "Node.js",
  "MongoDB", "Docker", "Terraform", "Kubernetes", "Cloud Security",
  "FastAPI", "PowerShell", "Flask", "TypeScript", "MySQL"
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
              <CircularProgress
                variant="determinate"
                value={100}
                size={80}
                thickness={5}
                sx={{ color: "#90caf9" }} // Custom color (light blue)
              />
            </Box>
            <Typography sx={{ mt: 1, color: "#ffffff" }}>
              {skill}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
