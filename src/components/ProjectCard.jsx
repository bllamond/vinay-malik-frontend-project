import React from 'react';

const ProjectCard = ({ title, tags, imageHeight }) => {
  return (
    <article className="flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col w-full rounded-3xl bg-neutral-900 max-md:max-w-full">
        <div className={`flex shrink-0 bg-black bg-opacity-20 ${imageHeight} max-md:max-w-full`} />
      </div>
      <div className="flex flex-col mt-6 w-full text-white max-md:max-w-full">
        <div className="flex gap-2.5 items-center self-start text-sm text-center whitespace-nowrap">
          {tags.map((tag, index) => (
            <span key={index} className="gap-2 self-stretch px-3 py-2 my-auto border border-solid border-stone-500 rounded-[30px]">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-6 text-3xl font-medium tracking-tight leading-none max-md:max-w-full">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default ProjectCard;