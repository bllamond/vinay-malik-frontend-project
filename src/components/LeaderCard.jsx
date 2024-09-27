import React from "react";
import SocialIcon from "./SocialIcon";


function LeaderCard({ name, role, bgColor }) {
  return (
    <div className="flex gap-9 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex shrink-0 self-stretch my-auto ml-3.5 border border-solid border-white border-opacity-20 h-[163px] min-w-[240px] rounded-[360px] w-[337px]" />
      <div className={`flex overflow-hidden flex-wrap self-stretch my-auto ${bgColor} min-w-[240px] rounded-[360px] w-[587px] max-md:max-w-full`}>
        <div className="flex overflow-hidden flex-col flex-1 shrink basis-0 min-w-[240px]">
          <div className="flex shrink-0 bg-black bg-opacity-20 h-[189px]" />
        </div>
        <div className="flex flex-col flex-1 shrink items-start py-6 my-auto basis-0 min-w-[240px]">
          <div className="flex flex-col">
            <h3 className="text-4xl font-medium tracking-tighter leading-none text-white">{name}</h3>
            <p className="mt-4 text-lg leading-loose text-white text-opacity-80">{role}</p>
          </div>
          
        </div>
      </div>
      <div className="flex flex-1 shrink self-stretch my-auto border border-solid basis-0 border-white border-opacity-20 h-[163px] min-w-[240px] rounded-[360px] w-[353px]" />
    </div>
  );
}

export default LeaderCard;