"use client";
import { SessionProvider } from "next-auth/react";

export default function AuthProider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
