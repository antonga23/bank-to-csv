import type { Metadata } from "next";
import { Inter, Roboto, Montserrat, Poppins, Heebo, Fira_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});
const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap"
});
const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Swift CSV | Simplified Financial Data Management",
  description: "From PDF to CSV conversion to bank statement data extraction and a complimentary subscription option ─ we've simplified financial data management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} ${montserrat.variable} ${poppins.variable} ${heebo.variable} ${firaSans.variable} font-sans`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
