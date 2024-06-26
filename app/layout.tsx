import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidbar from "@/components/ui/Sidbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="dashboard-theme"
        >
          <Navbar />
          <div className="flex">
            <div className="hidden md:block h-[100vh] w-[300px] ">
              <Sidbar />
            </div>
            <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
