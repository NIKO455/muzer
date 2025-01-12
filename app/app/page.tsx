"use client";
import { signIn, signOut } from "next-auth/react";
import Header from "./header";
export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
