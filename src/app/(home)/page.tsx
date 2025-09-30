"use client";
import { Typography } from '@/components';
import { useEffect } from "react";
export default function Home() {
  

  useEffect(() => {
    fetch("/api/clue")
      .then((res) => res.json())
      .then((data) => console.warn("help me pleaseee!"));
  }, []);
  return (
    <main className="min-h-screen w-full grid place-items-center">
      <div>
        <div className="flex flex-col items-center gap-0 ">
          <div className="relative">
            <div className="flex items-center gap-4">
              <Typography.Display className="text-center font-sketch-block font-normal text-primary">
                Hack
              </Typography.Display>
              <Typography.Display className="text-center font-grutch-shaded font-normal">
                NITR
              </Typography.Display>
            </div>
            <div className="absolute -bottom-20 right-0">
              <Typography.H1 className="font-sketch-block font-normal">
                7.0
              </Typography.H1>
            </div>
          </div>
        </div>
        <Typography.H6 className=" font-normal text-center  font-sketch-block text-black mt-24">
          India's Largest Student Run Hackathon |
          <span className="text-primary"> Coming Soon</span>
        </Typography.H6>
      </div>
    </main>
  );
}
