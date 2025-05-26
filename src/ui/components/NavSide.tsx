"use client";

import { RiShoppingBagLine } from "react-icons/ri";
import { FaDog } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: <RiShoppingBagLine />, path: "/orders" },
  { icon: <FaImage />, path: "/pictures" },
];

export default function NavSide() {
  const pathname = usePathname();

  return (
    <nav className="w-[70px] bg-white border-r-2 border-gray-100 flex flex-col items-center h-screen fixed">
      <div className="my-5">
        <span className="flex items-center justify-center w-12 h-12 bg-amber-200 rounded-full border-3 border-white shadow-inner">
          <FaDog size={28} className="text-gray-800" />
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.path;
          return (
            <a
              key={idx}
              href={item.path}
              className={`
                flex items-center justify-center
                w-18 h-12 rounded-xl
                relative transition-colors duration-200 text-2xl
                ${isActive ? "text-pink-600" : "text-slate-600"}
              `}
            >
              {item.icon}
              <div
                className={`
                  absolute left-0 top-1/2 h-full bg-pink-600 rounded-r -translate-y-1/2
                  transition-all duration-300 ease-out
                  ${isActive ? "w-2 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </a>
          );
        })}
      </div>

      <div className="my-5">
        <button
          className="
            cursor-pointer
            flex items-center justify-center
            rounded-xl w-11 h-11
            text-gray-400 hover:text-pink-600
            transition-all duration-200
          "
        >
          <IoMdLogOut size={30} />
        </button>
      </div>
    </nav>
  );
}
