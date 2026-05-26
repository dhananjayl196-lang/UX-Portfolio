import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Dhananjay Lokhande — UX & Product Designer",
  description:
    "UX / Product Designer and Data Visualization Specialist with 6+ years designing scalable SaaS, EdTech, Gov-Tech and enterprise platforms. 7M+ users impacted.",
  openGraph: {
    title: "Dhananjay Lokhande — UX & Product Designer",
    description: "Portfolio of Dhananjay Lokhande — UX / Product Designer with 6+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
