
import Header from './components/Header';
import MainContent from './components/MainContent';
import FeaturedWorks from './components/FeaturedWorks';
import ServicesSection from './components/SeviceSection';
import LeadershipTeam from './components/LeadershipTeam';
import TestimonialSection from './components/TestimonialSection';
import WhoAreWe from './components/WhoAreWe';


function App() {
  return (
    <div className="flex overflow-hidden flex-col w-full text-white bg-zinc-950 max-md:max-w-full">
      <div className="flex flex-col w-full min-h-[854px] max-md:max-w-full">
        <Header />
        <MainContent />
        <WhoAreWe />
        <FeaturedWorks />
        <ServicesSection />
        <LeadershipTeam />
        <TestimonialSection />
      </div>
    </div>
  );
}

export default App;

