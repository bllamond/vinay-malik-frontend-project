import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Brand Identity",
      description: "We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values",
      isActive: true
    },
    {
      title: "UX/UI design",
      description: "We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values",
      isActive: false
    },
    {
      title: "Webflow developer",
      description: "We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company's values",
      isActive: false
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center px-20 py-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col p-16 w-full rounded-3xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-9 w-full text-white max-md:max-w-full">
          <h2 className="flex flex-col text-xl leading-snug min-w-[240px] w-[500px] max-md:max-w-full">
            Our Services
          </h2>
          <p className="flex-1 shrink self-start text-4xl tracking-tighter leading-10 basis-0 max-md:max-w-full">
            We are a close-knit team of experts dedicated to crafting memorable and
            <span className="text-white"> emotionally engaging websites, digital experiences, and native apps.</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mt-28 w-full min-h-[350px] max-md:mt-10 max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;