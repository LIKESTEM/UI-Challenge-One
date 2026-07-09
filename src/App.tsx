import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import PopularWeek from "./components/PopularWeek/PopularWeek";
import TopSellers from "./components/TopSellers/TopSellers";
import ExploreArtworks from "./components/ExploreArtworks/ExploreArtworks";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div id="top" className="app">
      <Navbar />
      <Hero />
      <Partners />
      <PopularWeek />
      <TopSellers />
      <ExploreArtworks />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
