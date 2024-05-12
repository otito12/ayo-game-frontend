import { Inter } from "next/font/google";
import "./globals.css";
import Themer from "./providers/themeprovider";
import type { Metadata } from "next";
import AppContainer from "./components/app-container/AppContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayo Game",
  description: "Ayo Game",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <Themer>
          <AppContainer>{children}</AppContainer>
        </Themer>
      </body>
    </html>
  );
}
