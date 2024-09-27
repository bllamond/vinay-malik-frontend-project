import React from 'react';

function TestimonialCard() {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <blockquote className="w-full text-4xl tracking-tighter leading-10 text-white rounded-none max-md:max-w-full">
          A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!
        </blockquote>
        <div className="flex gap-5 items-center self-start mt-10">
          <img loading="lazy" src="./avatar.png" alt="Kathryn Murphy" className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[50px]" />
          <div className="flex flex-col self-stretch my-auto w-[166px]">
            <div className="text-base font-medium leading-none text-white">
              Kathryn Murphy
            </div>
            <div className="mt-4 text-sm leading-none text-zinc-400">
              Senior Marketing, Spotify
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;