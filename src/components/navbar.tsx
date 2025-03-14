"use client";

import Link from "next/link";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "publications", "contact"];
      let foundSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            foundSection = section;
          }
        }
      });
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#222", boxShadow: "none", padding: "10px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "left" }}>
        <Box component="ul" sx={{ display: "flex", gap: 3, listStyle: "none", p: 0, m: 0 }}>
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Education", href: "#education" },
            { label: "Publications", href: "#publications" },
            { label: "Documents", href: "#documents" }
          ].map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                listStyle: "none",
                p: "10px 15px",
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                position: "relative",
                "&:hover": {
                  backgroundColor: "#6e45e2",
                  color: "#ffffff",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -4,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#6e45e2",
                  transform: activeSection === item.href.slice(1) ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Link href={item.href} passHref style={{ textDecoration: "none", color: activeSection === item.href.slice(1) ? "#6e45e2" : "inherit" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  {item.label}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
