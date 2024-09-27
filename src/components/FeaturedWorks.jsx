import React from 'react';
import ProjectCard from './ProjectCard';

const FeaturedWorks = () => {
  const projects = [
    {
      title: "Roboto Landing page",
      tags: ["Development", "UI/UX", "Illustration"],
      imageHeight: "h-[448px]"
    },
    {
      title: "Groteck Website",
      tags: ["Development", "UI/UX", "Illustration"],
      imageHeight: "h-[448px]"
    },
    {
      title: "Poppin App Design",
      tags: ["UI/UX", "Illustration"],
      imageHeight: "h-[448px]"
    },
    {
      title: "Helvatica Branding",
      tags: ["Branding", "UI/UX"],
      imageHeight: "h-[448px]"
    }
  ];

  return (
    <section className="flex flex-wrap gap-9 items-start px-20 py-28 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col min-w-[240px] w-[622px] max-md:max-w-full">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <header className="flex flex-col px-20 w-full text-white max-md:px-5 max-md:max-w-full">
          <h2 className="gap-2 self-start text-xl leading-snug">Featured Works</h2>
          <h1 className="mt-6 text-6xl font-medium tracking-tighter leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Take a look at <br /> our projects
          </h1>
        </header>
        {projects.slice(2).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;