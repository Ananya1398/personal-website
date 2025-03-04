import type { Metadata } from "next";
import "@/styles/global.css"; // Import plain CSS

export const metadata: Metadata = {
  title: "Ananya Asthana | Software Engineer",
  description: "Portfolio website of Ananya Asthana - Sofwtare Engineer, Cloud Security, and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
