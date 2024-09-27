import React from 'react';
import MenuItem from './MenuItem';

const menuItems = ['Menu item', 'Menu item', 'Menu item', 'Menu item'];

const Navigation = () => (
  <nav className="flex flex-wrap gap-6 items-center self-stretch p-2 my-auto text-base leading-none border border-solid border-white border-opacity-50 min-w-[240px] rounded-[360px] max-md:max-w-full">
    {menuItems.map((item, index) => (
      <MenuItem key={index} active={index === 0}>
        {item}
      </MenuItem>
    ))}
  </nav>
);

export default Navigation;