import { Bricolage_Grotesque } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "IB coursework",
  description: "IB coursework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} max-w-full min-h-screen bg-[#E4ECF3]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
