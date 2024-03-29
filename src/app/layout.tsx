import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFL data viz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} dark:bg-black dark:text-neutral-50 bg-neutral-100 text-black`}>
        <Providers>
          <NavBar></NavBar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
