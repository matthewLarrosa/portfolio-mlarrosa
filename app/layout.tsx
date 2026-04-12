import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew Larrosa | Software Engineer",
  description: "Software engineer portfolio featuring experience, projects, and contact links.",
  openGraph: {
    title: "Matthew Larrosa | Software Engineer",
    description: "Software engineer portfolio featuring experience, projects, and contact links.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Larrosa | Software Engineer",
    description: "Software engineer portfolio featuring experience, projects, and contact links."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

