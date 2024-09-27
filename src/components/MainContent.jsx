import Button from './Button';

const MainContent = () => (
  <main className="flex relative flex-col items-start px-20 pt-24 pb-40 mt-6 w-full rounded-none min-h-[731px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <img src='./Group6.png' className="object-cover absolute inset-0 size-full" alt="" />
    <h2 className="relative text-9xl tracking-tighter leading-[129px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
      We create award <br /> winning website
    </h2>
    <section className="flex relative flex-col mt-24 mb-0 ml-3.5 max-w-full w-[394px] max-md:mt-10 max-md:mb-2.5 max-md:ml-2.5">
      <p className="text-xl leading-7 text-white">
        Based in San Francisco, we are a digital products design & development studio that passionate with the creation high applicability of digital experiences
      </p>
      <Button className="self-start mt-12 max-md:mt-10">
        Explore
      </Button>
    </section>
  </main>
);

export default MainContent;
