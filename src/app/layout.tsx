import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

import AppLayout from "@/components/layout/AppLayout";
import { MoviesProvider } from "@/store/movies/MoviesProvider";
import { AuthProvider } from "@/store/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Recommendation",
  description: "Te recomendamos las mejores peliculas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AppLayout>
            <MoviesProvider>{children}</MoviesProvider>
          </AppLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
