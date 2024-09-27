import React from 'react';

function ContactInfo({ icon, text, alt }) {
  return (
    <div className="flex gap-1.5 items-center self-start mt-6 first:mt-0">
      <img loading="lazy" src={icon} alt={alt} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
}

export default ContactInfo;