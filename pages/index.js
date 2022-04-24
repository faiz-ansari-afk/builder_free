import VNav from "../components/vNav";
import Navbar from './../components/Navbar';
import VideoBlock from "../components/VideoBlock";
import SecondBlock from "../components/SecondBlock";
import CounterBlock from "../components/CounterBlock";
import ClientPreferred from './../components/ClientPreferred';
import ClientStory from './../components/ClientStory';
import HappyGorilla from './../components/HappyGorilla';
import CityBlock from './../components/CityBlock';
import FormBlock from './../components/FormBlock';
import Socials from './../components/Socials';
import Footer from './../components/Footer';




export default function Home() {
  return (
    <>
      <VNav />
      <main>
        <Navbar />
        <VideoBlock />
        
        <SecondBlock />
        <CounterBlock />
        <ClientPreferred />
        <ClientStory />
        {/* <HappyGorilla /> */}
        <CityBlock />
        <FormBlock />
        <Socials />
        <Footer />
      </main> 
    </>
  );
}