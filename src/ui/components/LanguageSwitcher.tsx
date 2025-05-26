"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");
  return (
    <select
      className="border-2 border-gray-200 rounded-lg px-3 py-2 text-md bg-white text-[#797979] w-[170px] "
      value={lang}
      onChange={(e) => setLang(e.target.value)}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
