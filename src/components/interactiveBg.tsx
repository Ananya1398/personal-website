"use client";

import { useEffect } from "react";

export default function InteractiveBackground() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth; // Get the mouse's X position (0 to 1)
      const y = e.clientY / window.innerHeight; // Get the mouse's Y position (0 to 1)

      const background = document.querySelector(".interactive-background") as HTMLElement;
      if (background) {
        // Update the background position (parallax effect)
        background.style.backgroundPosition = `${x * 100}% ${y * 100}%`;

        // Gradient goes from black (#000000) to dark gray (#333333)
        background.style.background = `linear-gradient(135deg, #000000, #3c3551)`; // Black to dark gray
        background.style.filter = `brightness(${1 + x * 0.4})`; // Increase brightness based on X position
      }
    };

    // Add the mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="interactive-background" style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #000000, #333333)", // Default black to dark gray gradient
      transition: "background-color 0.1s ease",
      zIndex: -1, // Keep behind all other content
      willChange: "background-position, background-color, filter", // Performance optimization
    }}></div>
  );
}
