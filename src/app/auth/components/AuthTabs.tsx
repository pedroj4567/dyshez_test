"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname === "/auth";
  const tabClass = (active: boolean) =>
    `text-2xl  font-bold px-2 py-1   ${
      active
        ? "text-gray-800 border-b-3 border-black"
        : "text-gray-400 font-semibold"
    }`;

  return (
    <div className="mb-3 flex justify-between mx-8 ">
      <Link href="/auth" className={tabClass(isLogin)}>
        Login
      </Link>
      <Link href="/auth/singup" className={tabClass(!isLogin)}>
        Register
      </Link>
    </div>
  );
}
