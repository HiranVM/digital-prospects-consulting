import React from "react";
import Image from "next/image";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";

interface Match {
  id: number;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  time: string;
  location: string;
  isFavorite?: boolean;
  highlight?: boolean;
}

const matches: Match[] = [
  {
    id: 1,
    team1: {
      name: "Barcelona",
      logo: "/images/fcb.png",
    },
    team2: {
      name: "Real Madrid",
      logo: "/images/real.png",
    },
    time: "5:00 PM",
    location: "Spain",
    highlight: true,
  },
  {
    id: 2,
    team1: {
      name: "NY Yorks",
      logo: "/images/Titans.png",
    },
    team2: {
      name: "NY Yorks",
      logo: "/images/Tampa.png",
    },
    time: "5:00 PM",
    location: "London",
  },
  {
    id: 3,
    team1: {
      name: "NY Yorks",
      logo: "/images/league.jpg",
    },
    team2: {
      name: "NY Yorks",
      logo: "/images/france.png",
    },
    time: "5:00 PM",
    location: "London",
  },
  {
    id: 4,
    team1: {
      name: "NY Yorks",
      logo: "/images/your.jpg",
    },
    team2: {
      name: "NY Yorks",
      logo: "/images/soccer.jpg",
    },
    time: "5:00 PM",
    location: "London",
  },
  {
    id: 5,
    team1: {
      name: "NY Yorks",
      logo: "/images/FC_Chelsea.png",
    },
    team2: {
      name: "NY Yorks",
      logo: "/images/FC_Leic.png",
    },
    time: "5:00 PM",
    location: "London",
  },
];

export function MatchCard({ match }: { match: Match }) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 rounded-xl border
      ${match.highlight
        ? "bg-card-bg dark:bg-transparent dark:border-[#FFFFFF80] text-white "
        : "bg-white dark:bg-[#1E293B] border-card-bg dark:border-[#FFFFFF26]"}
      `}
    >
      
      {/* LEFT */}
      <div className="flex items-center justify-between w-[62%]">

        {/* Team 1 */}
        <div className="flex items-center gap-4">
          <Image src={match.team1.logo} className={`${match.team1.logo !=="/images/fcb.png" ? 'bg-white rounded-full' : 'w-[30px] h-[30px]'}`} alt={match.team1.name} width={36} height={36} />
          <span>{match.team1.name}</span>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center">
          <div className="h-6 w-[1px] bg-black dark:bg-white" />
          <span className="bg-black text-white text-xs p-1 rounded-full">
            VS
          </span>
          <div className="h-6 w-[1px] bg-black dark:bg-white" />
        </div>

        {/* Team 2 */}
        <div className="flex items-center gap-2">
          <Image src={match.team2.logo} className={` object-cover rounded-full bg-white ${match.team2.logo.includes("real") ? 'p-2 w-[32px] h-[34px]' : match.team2.logo.includes("france") ? 'w-[34px] h-[32px]' : ''}`} alt={match.team2.name} width={36} height={36} />
          <span>{match.team2.name}</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 ml-6">
          <Clock size={16} />
          <span>{match.time}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{match.location}</span>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-around w-[28%]">
        <FaHeart className="text-red-500 w-6 h-6 cursor-pointer" />
        <button className="flex items-center gap-2">
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export function LatestMatches() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black dark:text-white">Latest Matches</h3>
          <div className="flex items-center gap-3">
            <p className="text-lg font-base ">Filter :</p>
            <select className="px-2 py-2 border text-card-bg dark:text-white border-card-bg dark:border-white rounded-full text-[13px] hover:bg-slate-600 transition-colors">
              <option value="">Football</option>
              <option value="">Basketball</option>
            </select>
            <select className="px-2 py-2 border text-card-bg dark:text-white border-card-bg dark:border-white rounded-full text-[13px] hover:bg-slate-600 transition-colors">
              <option value="">Anywhere</option>
              <option value="">Live</option>
              <option value="">Completed</option>
            </select>
            
            <button className="text-lg font-base text-black dark:text-white hover:underline">View All</button>
          </div>
      </div>
      <div className="grid gap-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
