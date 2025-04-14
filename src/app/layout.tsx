import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/header/header";

export const metadata: Metadata = {
  title: "Onclusive Social Test",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
