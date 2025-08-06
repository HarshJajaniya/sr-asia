"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <div className="relative w-full py-8 px-[20px] overflow-hidden">
  {/* Stats Grid */}
   <div className="relative z-10 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-[35px]" id="stats-title">
                  The SR Asia Footprint 
                </h2>
      </div>
  
  <div className="relative z-10 max-w-full mx-auto w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-[35px]">
      <Stat
        value={120}
        suffix="+"
        label="Projects Implemented"
      />

      <Stat
        value={1.2}
        decimals={1}
        suffix=" Million+"
        label="Beneficiaries Reached"
      />

      <Stat
        value={80}
        suffix="+"
        label="CSR/ESG Clients Served"
      />

      <Stat
        value={50000}
        separator=","
        suffix="+"
        label="Field Research & Surveys"
      />
    </div>
  </div>

  {/* World Map Background */}
  <div className="absolute w-full h-full inset-0 z-0">
    <Image
      src="/12.png"
      alt="World Map Background"
      fill
      className="object-contain opacity-50"
      priority
    />
  </div>
</div>


  );
}

/* ───────────── Reusable Stat Component ───────────── */
function Stat({
  value,
  label,
  suffix = "",
  decimals = 0,
  separator = "",
}: {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-[#14444D]">
        <CountUp
          end={value}
          duration={1.8}
          decimals={decimals}
          separator={separator}
        />
        {suffix}
      </h2>
      <p className="text-sm text-[#14444D] mt-2">{label}</p>
    </div>
  );
}
