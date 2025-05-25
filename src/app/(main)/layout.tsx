import { ReactNode } from "react";
import MainNav from "@/components/navigation/main-nav";
import { Sidebar } from "@/components/navigation/sidebar";

export default function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
