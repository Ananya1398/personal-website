"use client";

import { Container, Typography, Box, Card, CardContent, Button, IconButton } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PushPinIcon from "@mui/icons-material/PushPin"; // ✅ Pin icon

// ✅ Documents Array
const documents = [
  {
    title: "Employment Recommendation",
    file: "/docs/lor.pdf",
    icon: "pdf",
  },
  {
    title: "Resume",
    file: "/media/Ananya_Asthana_Resume_2025.pdf",
    icon: "pdf",
  },
  {
    title: "Cover Letter",
    file: "/media/cl.pdf",
    icon: "pdf",
  },
  {
    title: "Graduate Degree Transcript",
    file: "/media/neuT.pdf",
    icon: "pdf",
  },
  {
    title: "Undergraduate Degree",
    file: "/media/srmDegree.pdf",
    icon: "pdf",
  },
  {
    title: "Undergraduate Transcript",
    file: "/media/srmT.pdf",
    icon: "pdf",
  },
];

export default function Documents() {
  return (
    <Container id="documents" sx={{ py: 5 }}>
      {/* Title */}
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
        Documents
      </Typography>

      {/* ✅ Clipboard Background */}
      <Box
        sx={{
          backgroundColor: "#f5f0e1", // ✅ Realistic tan/paper background
          padding: "40px 20px",
          borderRadius: "16px",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          minHeight: "400px",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          border: "3px solid #c6a477", // ✅ Warm brown border for clipboard
        }}
      >
        {/* ✅ Realistic Metallic Clip */}
        <Box
          sx={{
            position: "absolute",
            top: "-18px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(145deg, #d1d1d1, #a9a9a9)", // Metallic gradient
            width: "120px",
            height: "35px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "10px",
              left: "50%",
              width: "15px",
              height: "15px",
              backgroundColor: "#d1d1d1", // Inner metallic part
              borderRadius: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: "12px",
              left: "50%",
              width: "7px",
              height: "7px",
              backgroundColor: "#555", // Dark inner part for depth
              borderRadius: "50%",
              transform: "translateX(-50%)",
            },
          }}
        />

        {/* Document Cards */}
        {documents.map((doc, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#ffffff",
              color: "#333",
              width: "250px",
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              position: "relative",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              },
            }}
          >
            {/* ✅ Pin Icon */}
            <IconButton
              sx={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#ffffff", // Outer ring (realistic)
                color: "#000000", // Inner black circle
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "#cccccc",
                },
              }}
            >
              <PushPinIcon sx={{ fontSize: 20, color: "#000" }} />
            </IconButton>

            {/* Icon and Title */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                paddingBottom: "12px !important",
              }}
            >
              {/* File Type Icon */}
              {doc.icon === "pdf" ? (
                <PictureAsPdfIcon sx={{ fontSize: 40, color: "#e74c3c" }} />
              ) : (
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#3498db" }} />
              )}

              {/* Document Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                {doc.title}
              </Typography>
            </CardContent>

            {/* ✅ Download Button */}
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "#b39ddb", // Soft purple outline
                color: "#6e45e2",
                "&:hover": {
                  backgroundColor: "#6e45e2",
                  color: "#ffffff",
                },
              }}
              href={doc.file}
              target="_blank"
              download
            >
              Download
            </Button>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
