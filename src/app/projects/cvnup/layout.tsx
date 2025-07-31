import type { Metadata } from "next";
import "../../../styles/globals.css";
import Navbar from "../../../components/Navbar";


export const metadata: Metadata = {
  title: "Florian Guiot",
  description: "Développeur web spécialisé en PHP Symfony.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
