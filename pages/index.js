import VNav from "../components/vNav";
import Navbar from './../components/Navbar';
import VideoBlock from "../components/VideoBlock";
import CardReliable from "../components/CardReliable";

export default function Home() {
  return (
    <>
      <VNav />
      <main>
        <Navbar />
        <VideoBlock />
        <div style={{position:"absolute"}}>
        <h1>Hello World</h1>
        <CardReliable />
        </div>
      </main> 
    </>
  );
}