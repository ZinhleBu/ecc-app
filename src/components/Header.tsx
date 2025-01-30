/** @format */

import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row grow justify-center items-center relative px-5 md:px-16 py-8 h-fit bg-green-500 w-full text-white header">
      <div className="flex items-center justify-start text-white relative w-1/3">
        <img src="/menu.svg" alt="Menu" className="h-8 w-auto" /> 

      </div>
      <div className="flex items-center justify-center text-white relative w-1/3">
      <img src="/logo.svg" alt="Logo" className="h-20 w-auto" /> 

      </div>
      <div className="flex items-center justify-end text-white relative w-1/3">
        <input type="text"  className="h-8 w-1/2 rounded-lg " style={{ backgroundColor: "rgba(239, 240, 240, 0.5)" }} />
        <Search size={18} color="green"  className="-ml-6"/>
      </div>
    </header>
  );
}
