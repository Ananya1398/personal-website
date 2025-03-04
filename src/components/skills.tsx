import { Container, Typography, Grid, CircularProgress, Box } from "@mui/material";

const skills = [
  { name: "Python", proficiency: 100 },
  { name: "Java", proficiency: 100 },
  { name: "React.js", proficiency: 100 },
  { name: "AWS", proficiency: 100 },
  { name: "Node.js", proficiency: 50 },
  { name: "MongoDB", proficiency: 100 },
  { name: "Docker", proficiency: 100 },
  { name: "Terraform", proficiency: 100 },
  { name: "Kubernetes", proficiency: 100 },
  { name: "Cloud Security", proficiency: 100 },
];

export default function Skills() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" , color: "#ffffff", textAlign: "left" }} gutterBottom={true}>Skills</Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index} sx={{ textAlign: "center", position: "relative" }}>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={skill.proficiency} size={80} thickness={5} />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {`${skill.proficiency}%`}
              </Box>
            </Box>
            <Typography sx={{ mt: 1 }}>{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
