import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Self-Voting Content Detector — Detect Artificial Engagement",
  description: "API service that identifies self-voting, bot engagement, and artificial amplification patterns on social platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="39d48df3-5028-4f8a-95d3-423d388ede1d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
