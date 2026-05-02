'use client';
import React, { useEffect, useRef, useState } from "react";
import { Search, Bell, Mail, Heart, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 border-l border-white bg-nav-bg/80 backdrop-blur-md sticky top-0 z-10 px-4 md:px-8 flex items-center justify-between transition-colors duration-300">
      <div className="flex gap-4">
        <p className="text-lg cursor-pointer text-text-color relative dark:text-text-color">Live Match</p>
        <p className="text-lg cursor-pointer text-text-color dark:text-text-color">Scorecard</p>
        <p className="text-lg cursor-pointer text-text-color dark:text-text-color">Commentary</p>
        <p className="text-lg cursor-pointer text-text-color dark:text-text-color">Players</p>
        <p className="text-lg cursor-pointer text-text-color dark:text-text-color">My Matches</p>
        <div className="absolute top-0 left-10 w-[70px] rounded-b-lg h-[4px] bg-[#F14B51]"/>
      </div>
      <div className="flex-1 pl-18">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Matches, Players, Stats..."
            className="w-full border border-black dark:border-white rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
          />
           <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black dark:text-white" />
        </div>
      </div>

      <div className="flex items-center gap-4 pl-12">
        <ThemeToggle />
        <button className="p-2 rounded-full transition-all relative">
          <Bell className="w-7 h-7" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
        </button>
        <Mail className="w-7 h-7" />
        <Heart className="w-7 h-7" />
        <div className="relative" ref={ref}>
        
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 p-1 pl-1 pr-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
        >
          <Image
            src="/images/profile.png"
            alt="profile"
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white"
          />
          <span className="text-sm font-medium dark:text-slate-200 hidden sm:block">
            John Doe
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
    
        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
            
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              Profile
            </button>
        
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              Settings
            </button>
        
          </div>
        )}
      </div>
      </div>
    </header>
  );
}
