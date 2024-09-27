import React from "react";

function SocialIcon({ src, alt }) {
  return (
    <div className="flex justify-center items-center p-3 w-9 border border-solid border-white border-opacity-30 rounded-[50px]">
      <img loading="lazy" src={src} alt={alt} className="object-contain self-stretch my-auto w-3.5 aspect-square" />
    </div>
  );
}

export default SocialIcon;