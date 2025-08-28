import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Find Remote Jobs | Hire Remote Staff, Virtual Assistants, Freelancers & More",
  description: "Smart way to search and apply for remote jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
