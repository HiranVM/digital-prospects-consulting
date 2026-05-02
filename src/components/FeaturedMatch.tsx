'use client';

import Image from 'next/image';
import { Clock, MapPin } from 'lucide-react';

export function FeaturedMatch() {
  return (
    <div className="w-full bg-card-bg dark:bg-card-bg-dark rounded-sm overflow-hidden relative flex items-center justify-between pt-2">

      {/* LEFT PLAYER IMAGE */}
      <div className="relative w-[220px] h-[280px] shrink-0">
        <Image
          src="/images/lion.png" // replace with your image
          alt="player"
          fill
          className="object-contain !left-[30px]"
        />
        <Image
          src="/images/player.png" // replace with your image
          alt="player"
          fill
          className="object-contain !left-[-8px]"
        />
        
      </div>

      {/* CENTER CONTENT */}
      <div className="flex-1 text-white px-6">
        <div className="relative w-[370px] h-[85px] text-white">

          {/* Barcelona - Top Left */}
          <h1 className="absolute top-0 left-0 text-3xl font-bold tracking-wide">
            BARCELONA
          </h1>
          
          {/* Real Madrid - Bottom Right */}
          <h2 className="absolute bottom-0 right-0 text-3xl font-bold">
            REAL MADRID
          </h2>
          
          {/* Center Slanted Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[90px] h-[40px]">
          
            {/* Line 1 */}
            <span className="absolute left-0 top-[22px] w-[34px] h-[1px] bg-black rotate-[-30deg]"></span>
          
            {/* Line 2 */}
            <span className="absolute left-[10px] top-[12px] w-[80px] h-[1px] bg-black rotate-[-30deg]"></span>
          
            {/* Line 3 */}
            <span className="absolute left-[70px] top-[-1px] w-[34px] h-[1px] bg-black rotate-[-30deg]"></span>
          
            </div>
          </div>
          
        </div>

        {/* VS Row */}
        <div className="flex items-center justify-center gap-3 pr-48 mt-4">
          <Image src="/images/fcb.png" alt="barca"className='bg-[#1B26412E] p-[5px] rounded-full' width={28} height={28} />
          <span className="text-sm">VS</span>
          <Image src="/images/real.png" alt="real"className='bg-[#1B26412E] p-[5px] rounded-full' width={28} height={28} />
        </div>

        {/* Info */}
        <div className="flex items-center pl-16 gap-6 mt-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className='w-4 h-4' /> <span>5:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className='w-4 h-4' /> <span>Spain</span>
          </div>
        </div>
      </div>

      {/* RIGHT CTA */}
      <div className="w-1/4 z-50 flex flex-col items-start pt-20 pl-6 text-white">
        <p className="text-[29px]">Up To $50</p>
        <p className="text-[29px]">Free Matched</p>

        <button className="mt-1 bg-white text-[#2f3f4f] px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Join Now <span className="text-lg font-bold">›</span>
        </button>
      </div>

      {/* BACKGROUND SHAPE */}
      <div className="absolute right-0 top-0 w-[320px] h-full bg-polygon-bg dark:bg-polygon-bg "
        style={{
           clipPath: "polygon(30% 32%, 100% 0%, 100% 100%, 14% 99%, 10% 92%, 8% 85%, 7% 78%, 7% 70%, 8% 62%, 10% 56%, 13% 49%, 17% 43%, 21% 38%, 25% 34%)"
        }}
      />
      </div>
  );
}