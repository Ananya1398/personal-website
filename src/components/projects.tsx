"use client";

import { Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import Image from "next/image";



const projects = [
  {
    name: "HireU: AI-Powered Hiring and Grant Eligibility Assistant ",
    link: "https://devpost.com/software/hireu",
    image: "/media/hireu.png",
  },
  {
    name: "EduNavigate: Learning Management System",
    link: "https://edunavigate.netlify.app/#/Kanbas/Dashboard",
    image: "/media/edunavigate.png",
  },
  {
    name: "Ticket Booking System",
    link: "https://github.com/Ananya1398/bus-ticket-booking-system",
    image: "/media/bus.png", // Sample image link
  },
  {
    name: "KNN Iris Model",
    link: "https://github.com/Ananya1398/knn_iris_model/",
    image: "/media/iris.png", // Sample image link
  },
  {
    name: "Image Manipulation and Enhancement Software",
    link: "https://github.com/Ananya1398/Image-Manipulation-using-Java",
    image: "/media/pdp.jpg", // Sample image link
  },
];

export default function Projects() {
  // Slick carousel settings
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 projects at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto transition every 3 seconds
    arrows: true, // Enable navigation arrows
    centerMode: true, // Enable center mode to scale the center project
    focusOnSelect: true, // Focus on the center project when clicked
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 slides on medium screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // 1 slide on small screens
        },
      },
    ],
  };

  return (
    <Container id="projects" sx={{ py: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", color: "#ffffff", textAlign: "center", mb: 4 }}>
          Projects
        </Typography>

        {/* React Slick Carousel */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    cursor: "pointer",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(110, 69, 226, 0.3)",
                    background: "linear-gradient(135deg, #2c2c54, #6e45e2)",
                    color: "#ffffff",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    height: "250px", // Smaller height
                    width: "90%", // Smaller width
                    margin: "0 10px", // Add gap between projects
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // Apply scaling when slide is centered
                    transform: "scale(0.9)", // Default smaller size
                    "&.slick-center": {
                      transform: "scale(1)", // Full size when centered
                    },
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0px 6px 15px rgba(110, 69, 226, 0.5)",
                    },
                  }}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  {/* Image above the title */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={230} // Set width
                    height={230} // Set height
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "20px",
                      alignSelf: "center",
                    }}
                  />

                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f8f9fa" }}>
                      {project.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </Container>
  );
}
