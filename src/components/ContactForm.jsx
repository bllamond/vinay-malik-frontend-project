import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <form className="flex flex-col w-full max-md:max-w-full">
        <div className="flex justify-between items-end pb-5 w-full border-b border-white border-opacity-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <label htmlFor="name" className="text-sm leading-none text-white">Name <span className="text-red-600">*</span></label>
            <input type="text" id="name" placeholder="Your name" className="mt-6 text-lg leading-loose text-zinc-500 bg-transparent border-none w-full" required />
          </div>
        </div>
        <div className="flex justify-between items-end pb-5 mt-8 w-full border-b border-white border-opacity-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <label htmlFor="email" className="text-sm leading-none text-white">Email <span className="text-red-600">*</span></label>
            <input type="email" id="email" placeholder="Your email address" className="mt-6 text-lg leading-loose text-zinc-500 bg-transparent border-none w-full" required />
          </div>
        </div>
        <div className="flex justify-between items-end pb-5 mt-8 w-full border-b border-white border-opacity-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-h-[136px] min-w-[240px] max-md:max-w-full">
            <label htmlFor="message" className="text-sm leading-none text-white">Message</label>
            <textarea id="message" placeholder="Write your message here..." className="mt-6 text-lg leading-loose text-zinc-500 bg-transparent border-none w-full h-24 resize-none"></textarea>
          </div>
        </div>
        <button type="submit" className="flex gap-3 justify-center items-center self-start px-6 py-3 mt-9 text-base font-medium leading-none text-white whitespace-nowrap border border-solid border-white border-opacity-30 min-h-[44px] rounded-[360px] max-md:px-5">
          <span className="self-stretch my-auto">Send</span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;