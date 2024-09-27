import React from 'react';

const ServiceCard = ({ title, description, isActive }) => {
  return (
    <article className={`flex flex-col flex-1 shrink justify-between p-9 rounded-3xl basis-0 min-w-[240px] max-md:px-5 ${isActive ? 'bg-indigo-600' : ''}`}>
      <div className="flex justify-between items-start w-full">
        <h3 className="text-4xl font-medium tracking-tight leading-10 text-white uppercase w-[245px]">
          {title}
        </h3>
        
      </div>
      <p className={`mt-28 text-base leading-7 ${isActive ? 'text-white' : 'text-zinc-400'} max-md:mt-10`}>
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;