import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useState } from "react";

const publications = [
  {
    title: "An Enhanced Framework for Visual Attention on Human Face using Artificial Intelligence",
    journal: "International Journal of Advanced Science and Technology, Volume 29, No.05 (2020)",
    year: "2020",
    link: "https://www.example.com/publication1",
    abstract: "This paper presents a framework to enhance visual attention on human faces using AI algorithms...",
  },
  {
    title: "Automated Energy Saving System using IoT with PIR Sensors",
    journal: "Journal of Emerging Technologies and Innovative Research, Volume 05, Issue 10 (2018)",
    year: "2018",
    link: "https://www.example.com/publication2",
    abstract: "This research discusses a system to save energy automatically using IoT and PIR sensors...",
  },
  {
    title: "Diabetes Risk Analysis Using Data Mining and Machine Learning",
    journal: "9th International Conference on Science and Innovative Engineering, Jawahar College, Chennai (2019)",
    year: "2019",
    link: "https://www.example.com/publication3",
    abstract: "The paper explores how data mining and machine learning can be applied to predict diabetes risk...",
  }
];

export default function Publications() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index); // Toggle flip state
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#ffffff", textAlign: "center" }} gutterBottom>
        Publications
      </Typography>
      <Grid container spacing={3}>
        {publications.map((paper, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 0,
                textAlign: "center",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #2c2c54, #6e45e2)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                '&:hover': {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 15px 30px rgba(255,255,255,0.2)",
                },
                color: "white",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                width: "100%",
                height: "350px",
                transformStyle: "preserve-3d", // Enable 3D effect for flip

                ...(flipped === index ? { transform: "rotateY(180deg)" } : {}),
              }}
              onClick={() => handleFlip(index)}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden", // Hide the back side when flipped
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Front Side */}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f8f9fa" }}>{paper.title}</Typography>
                  <Typography variant="subtitle1" sx={{ color: "#dcdde1" }}>{paper.journal} | {paper.year}</Typography>
                </CardContent>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden", // Hide the back side when flipped
                  transform: "rotateY(180deg)", // Flip the back side
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background for the back side
                }}
              >
                {/* Back Side */}
                <Typography variant="body2" sx={{ color: "#f8f9fa", fontSize: "14px" }}>{paper.abstract}</Typography>
                <a href={paper.link} target="_blank" style={{ color: "#6e45e2", marginTop: "10px" }}>Read more</a>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
