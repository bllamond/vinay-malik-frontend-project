import React from "react";
import LeaderCard from "./LeaderCard";

const leadershipData = [
  {
    name: "Cody Fisher",
    role: "CEO Founder",
    bgColor: "bg-indigo-600",
  },
  {
    name: "Kristin Watson",
    role: "Manager",
    bgColor: "bg-neutral-900",
  },
  {
    name: "Leslie Alexander",
    role: "Design Lêader",
    bgColor: "bg-neutral-900",
  },
];

function LeadershipTeam() {
  return (
    <section className="flex overflow-hidden flex-col pt-20 pb-28 w-full max-md:pb-24 max-md:max-w-full">
      <header className="flex flex-wrap gap-9 px-20 w-full text-white max-md:px-5 max-md:max-w-full">
        <h2 className="flex flex-col text-xl leading-snug min-w-[240px] w-[500px] max-md:max-w-full">
          <span className="gap-2 self-stretch w-full max-md:max-w-full">Our leader</span>
        </h2>
        <p className="flex-1 shrink self-start text-4xl tracking-tighter leading-10 min-w-[240px] max-md:max-w-full">
          Each product is crafted with passion and{" "}
          <span className="text-white">dedication. Meet our leader !</span>
        </p>
      </header>
      <div className="flex overflow-hidden flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
        {leadershipData.map((leader, index) => (
          <LeaderCard key={index} {...leader} />
        ))}
      </div>
    </section>
  );
}

export default LeadershipTeam;