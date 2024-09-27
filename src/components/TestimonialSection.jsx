
import ContactInfo from './ContactInfo';
import TestimonialCard from './TestimonialCard';
import ContactForm from './ContactForm';

function TestimonialSection() {
  const contactInfo = [
    { icon: "./CallIcon.png", text: "0972 663 633", alt: "Phone icon" },
    { icon: "./MailIcon.png", text: "hello@wefo.com", alt: "Email icon" }
  ];

  return (
    <section className="box-border flex relative flex-col shrink-0">
      <div className="flex overflow-hidden flex-wrap gap-9 items-start p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col text-xl leading-snug text-white whitespace-nowrap min-h-[300px] min-w-[240px] w-[500px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
            <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-white rounded-full" aria-hidden="true" />
            <h2 className="self-stretch my-auto">Testimonials</h2>
          </div>
        </div>
        <TestimonialCard />
      </div>
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start p-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[500px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h2 className="flex-1 shrink gap-10 w-full text-5xl tracking-tighter text-white leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Feel free to connect with us!
              </h2>
            </div>
            <div className="flex flex-col mt-12 max-w-full text-base tracking-tight text-white w-[146px] max-md:mt-10">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} icon={info.icon} text={info.text} alt={info.alt} />
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
        <footer className="flex flex-col px-20 w-full text-base leading-none text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center py-6 w-full border-t border-white border-opacity-20 max-md:max-w-full">
            <nav className="flex gap-6 items-center self-stretch my-auto">
              <a href="#privacy" className="gap-2.5 self-stretch py-2 my-auto">Privacy</a>
              <a href="#terms" className="gap-2.5 self-stretch py-2 my-auto">Term</a>
              <a href="#security" className="gap-2.5 self-stretch py-2 my-auto">Security</a>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default TestimonialSection;