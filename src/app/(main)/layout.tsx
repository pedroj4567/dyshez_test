import { ReactNode } from "react";
import { NavSide } from "../../ui/components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-[70px] flex-shrink-0">
        <NavSide />
      </div>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
