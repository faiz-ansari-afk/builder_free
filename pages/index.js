import VNav from "../components/vNav";
import Navbar from './../components/Navbar';
import VideoBlock from "../components/VideoBlock";
import SecondBlock from "../components/SecondBlock";

export default function Home() {
  return (
    <>
      <VNav />
      <main>
        <Navbar />
        <VideoBlock />
        <div style={{position:"absolute"}}>
        <SecondBlock />
        </div>
      </main> 
    </>
  );
}