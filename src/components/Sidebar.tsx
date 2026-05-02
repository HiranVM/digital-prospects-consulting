import React from "react";
import { ChartNoAxesColumn, Users, Plus } from "lucide-react";
import { MdDashboard, MdSportsFootball  } from "react-icons/md";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoFootball } from "react-icons/io5";
import Shuttlecock from "@/components/icons/Shuttlecock.svg";
import Tabletennies from "@/components/icons/Tabletennies.svg";
import Cricketball from "@/components/icons/Cricketball.svg";
import Tennisball from "@/components/icons/Tennisball.svg";
import Basketball from "@/components/icons/basketball.svg";


const menuItems = [
  { icon: MdDashboard, label: "Home" },
  { icon: Users, label: "Live Match" },
  { icon: ChartNoAxesColumn, label: "Scorecard" },
  { icon: IoFootball, label: "Commentary", active: true },
  { icon: MdSportsFootball , label: "Players" },
  { icon: Shuttlecock, label: "shuttlecock" },
  { icon: Tabletennies, label: "table tennis" },
  { icon: Cricketball, label: "cricket" },
  { icon: Tennisball, label: "tennis" },
  { icon: Basketball, label: "basketball" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-24 flex-col bg-nav-bg border-r border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="">
        <div className="flex items-center gap-2 mb-8 px-6 py-4 border-b border-black">
          <div className="w-12 h-12 bg-card-bg dark:bg-icon-bg rounded-sm dark:border-slate-800 flex items-center justify-center">
            <HiOutlineBars3BottomLeft color="white" size={28} />
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-center gap-3 px-3 py-2 text-sm hover:bg-red-500/20 transition-colors duration-300 font-medium transition-all ${
                item.active
                  ? "border-l-4 border-[#F14B51]"
                  : ""
              }`}
            >
              <item.icon className={`w-10 h-10 text-[#212121] dark:text-white cursor-pointer ${item.active ? "!text-[#F14B51]" : ""}`} />
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col justify-end h-full items-center px-3 py-2 transition-all">
        <Plus className="w-12 h-12 text-white dark:text-black bg-card-bg dark:bg-white rounded-full p-1 cursor-pointer" />
      </div>

    </aside>
  );
}
