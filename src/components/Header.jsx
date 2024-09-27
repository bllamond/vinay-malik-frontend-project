import React from 'react'; 
import Button from './Button';
import Navigation from './Navigation';

const Header = () => (
  <header className="flex flex-wrap gap-10 justify-between items-center px-20 py-6 w-full max-md:px-5 max-md:max-w-full bg-transparent z-50 fixed top-0 left-0">
    <div className="flex flex-wrap gap-9 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
      <h1 className="self-stretch my-auto text-4xl font-medium tracking-tight leading-none text-white">
        Wefo
      </h1>
      <Navigation />
    </div>
    <Button>
      Start a project
    </Button>
  </header>
);

export default Header;
