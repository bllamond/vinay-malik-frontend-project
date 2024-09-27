import React from "react";
import Button from "./Button";
import ImageContainer from "./ImageContainer";

function WhoAreWe() {
  return (
    <section className="box-border flex relative flex-col shrink-0">
      <div className="flex flex-wrap gap-9 p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-start min-w-[240px] w-[500px] max-md:max-w-full">
          <h2 className="gap-2 self-stretch text-xl leading-snug text-white">
            Who are we?
          </h2>
          <ImageContainer />
        </div>
        <div className="flex flex-col flex-1 shrink self-start text-white basis-0 min-w-[240px] max-md:max-w-full">
          <p className="flex-1 shrink gap-2.5 self-stretch p-2.5 w-full text-4xl tracking-tighter leading-10 max-md:max-w-full">
            We create mind-blowing visuals, brands, websites and products{" "}
            <span className="text-white">
              that help startups and innovative companies gain more exposure.
            </span>
          </p>
        </div>
      </div>
      <img
        loading="lazy"
        src="./Frame120.png"
        alt=""
        className="object-contain w-full aspect-[5.26] max-md:max-w-full"
      />
    </section>
  );
}

export default WhoAreWe;