import Image from "next/image";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";

export default function LiveMatchesUI() {
  return (
    <div className="bg-icon-bg dark:bg-icon-bg min-h-screen w-[32%] text-white flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-text-color dark:text-text-color tracking-tight">Live Matches</h1>
        <div className="flex items-center gap-4">
          <FaArrowLeft className="text-text-color dark:text-text-color hover:text-gray-500 transition-colors" />
          <FaArrowRight className="text-[#F14B51] hover:text-[#f14b51c1] transition-colors" />
        </div>
      </div>
      
      {/* Live Match Card */}
      <div className="rounded-xl p-4 border border-card-border-color dark:border-card-border-color">

        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <Image src="/images/FC_Chelsea.png" alt="Chelsea" width={48} height={48} className="mx-auto" />
            <p className="text-xs text-text-color dark:text-text-color font-bold mt-1">Chelsea</p>
            <div className="flex-1 text-text-color dark:text-text-color bg-transparent border border-black dark:border-none dark:bg-[#3a4f63] w-[80px] font-semibold text-center py-2 rounded-md">
              1.8
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <p className="text-[10px] text-text-color dark:text-text-color flex justify-center text-gray-400 mb-1">Premier League</p>
            <div className="flex flex-col justify-center">
              <p className="text-[22px] text-text-color dark:text-text-color font-extrabold">1 : 2</p>
              <p className="text-xs text-orange-400">● 49:30</p>
            </div>
            <div className="flex-1 text-text-color dark:text-text-color bg-transparent border border-black dark:border-none dark:bg-[#3a4f63] w-[80px] font-semibold text-center py-2 rounded-md">
              2.1
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <Image src="/images/FC_Leic.png" alt="Leicester" width={48} height={48} className="mx-auto" />
            <p className="text-xs text-text-color dark:text-text-color font-bold mt-1">Leicester C</p>
            <div className="flex-1 text-text-color dark:text-text-color bg-transparent border border-black dark:border-none dark:bg-[#3a4f63] w-[80px] font-semibold text-center py-2 rounded-md">
              1.3
            </div>
          </div>
        </div>
      </div>

      {/* League Section */}
      <div className="flex flex-col gap-3">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/england.png" alt="England" width={24} height={24}/>
            <h2 className="text-base text-text-color dark:text-text-color font-semibold">Premier League</h2>
            <span className="text-xs text-[#AAAAAA]">England</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* Table Card */}
        <div className="bg-icon-bg dark:bg-card-bg border border-card-border-color dark:border-none rounded-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_0.6fr_0.6fr_0.6fr_0.6fr_0.6fr] text-xs text-text-color dark:text-text-color px-4 py-2 border-b border-[#3a4f63]">
            <span>Team</span>
            <span>D</span>
            <span>L</span>
            <span>Ga</span>
            <span>Gd</span>
            <span>Pts</span>
          </div>

          {/* Rows */}
          {[
            "Liverpool",
            "Man United",
            "Leicester City",
            "Villareal",
            "Villareal",
          ].map((team, i) => {
            const isLast = i === 4;
            return (
              <div
                key={i}
                className={`grid grid-cols-[2fr_0.6fr_0.6fr_0.6fr_0.6fr_0.6fr] text-text-color dark:text-text-color px-4 py-3 text-xs ${isLast ? "border-none" : "border-b border-[#3a4f63]"}`}
              >
                <span className="flex items-center gap-2"><Image src={`/images/${team}.png`} alt={team} width={16} height={16} /> {team}</span>
                <span>6</span>
                <span>2</span>
                <span>21</span>
                <span>16</span>
                <span>33</span>
              </div>
          )})}
        </div>
      </div>

      {/* League Section2 */}
      <div className="flex flex-col gap-3">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/spain.png" alt="Spain" width={24} height={24}/>
            <h2 className="text-base text-text-color dark:text-text-color font-semibold">La Liga</h2>
            <span className="text-xs text-[#AAAAAA]">Spain</span>
          </div>
          <span className="text-2xl">›</span>
        </div>

        {/* Table Card */}
        <div className="bg-icon-bg dark:bg-card-bg border border-card-border-color dark:border-none rounded-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_0.6fr_0.6fr_0.6fr_0.6fr_0.6fr] text-xs text-text-color dark:text-text-color px-4 py-2 border-b border-[#3a4f63]">
            <span>Team</span>
            <span>D</span>
            <span>L</span>
            <span>Ga</span>
            <span>Gd</span>
            <span>Pts</span>
          </div>

          {/* Rows */}
          {[
            "Liverpool",
            "Man United",
            "Leicester City",
            "Villareal",
            "Villareal",
          ].map((team, i) => {
            const isLast = i === 4;
            return (
              <div
                key={i}
                className={`grid grid-cols-[2fr_0.6fr_0.6fr_0.6fr_0.6fr_0.6fr] text-text-color dark:text-text-color px-4 py-3 text-xs ${isLast ? "border-none" : "border-b border-[#3a4f63]"}`}
              >
                <span className="flex items-center gap-2"><Image src={`/images/${team}.png`} alt={team} width={16} height={16} /> {team}</span>
                <span>6</span>
                <span>2</span>
                <span>21</span>
                <span>16</span>
                <span>33</span>
              </div>
          )})}
        </div>
      </div>

      {/* Trending Section */}
      <div className="bg-nav-bg dark:bg-card-bg rounded-xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] font-semibold text-text-color dark:text-text-color tracking-tight">Trending Now</h1>
          <div className="flex items-center gap-4">
            <FaArrowLeft className="text-text-color dark:text-text-color hover:text-gray-500 transition-colors" />
            <FaArrowRight className="text-text-color dark:text-text-color hover:text-gray-500 transition-colors" />
          </div>
        </div>

        {/* Match Card */}
        <div className="rounded-xl p-4 border border-card-border-color dark:border-card-border-color">
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <Image src="/images/FC_Chelsea.png" alt="Chelsea" width={48} height={48} className="mx-auto" />
              <p className="text-xs text-text-color dark:text-text-color font-bold mt-1">Chelsea</p>
              <div className="flex-1 text-text-color dark:text-text-color bg-transparent border border-black dark:border-none dark:bg-[#3a4f63] w-[80px] font-semibold text-center py-2 rounded-md">
                1.8
              </div>
            </div>
          
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <p className="text-[10px] text-text-color dark:text-text-color flex justify-center text-gray-400 mb-1">Premier League</p>
              <div className="flex flex-col justify-center">
                <p className="text-[22px] text-text-color dark:text-text-color font-extrabold">1 : 2</p>
                <p className="text-xs text-orange-400">● 49:30</p>
              </div>
              <div className="flex-1 text-text-color dark:text-text-color bg-transparent border border-black dark:border-none dark:bg-[#3a4f63] w-[80px] font-semibold text-center py-2 rounded-md">
                2.1
              </div>
            </div>
          
            <div className="flex flex-col items-center justify-center gap-1 text-center">
              <Image src="/images/FC_Leic.png" alt="Leicester" width={48} height={48} className="mx-auto" />
              <p className="text-xs text-text-color dark:text-text-color font-bold mt-1">Leicester C</p>
              <div className="flex-1 text-text-color dark:text-text-color bg-transparent border border-black dark:border-none dark:bg-[#3a4f63] w-[80px] font-semibold text-center py-2 rounded-md">
                1.3
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}