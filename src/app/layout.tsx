import React from "react";
import "@/app/globals.css";
// import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "TurniejeKoszykarskie.pl - Znajdź swój kolejny turniej",
  description:
    "Platforma turniejów koszykarskich w Polsce. Znajdź turniej, dołącz do drużyny lub zorganizuj własne wydarzenie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head />
      <body>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
