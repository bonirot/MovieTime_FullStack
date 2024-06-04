import Header from "@/components/header";
import React from "react";

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
