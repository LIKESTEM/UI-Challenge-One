import { useState } from "react";
import { SectionHeading } from "../Text/Text";
import Slider from "../Slider/Slider";
import ArtworkCard, { type Artwork } from "./ArtworkCard";
import sonasCosta from "../../assets/artworks/sonas-costa.jpg";
import versace from "../../assets/artworks/versace.jpg";
import digitalDecade from "../../assets/artworks/digital-decade.jpg";
import winterJamz from "../../assets/artworks/winter-jamz.jpg";
import pastelWifey from "../../assets/artworks/pastel-wifey.jpg";
import abstractFlow from "../../assets/categories/abstract-1.jpg";
import neonDepths from "../../assets/categories/3d-art-1.jpg";
import modernMuse from "../../assets/categories/modern-art-1.jpg";
import retroGrid from "../../assets/categories/game-1.jpg";
import wallEchoes from "../../assets/categories/graffiti-1.jpg";
import oceanWash from "../../assets/categories/watercolor-1.jpg";
import styles from "./PopularWeek.module.css";

const ARTWORKS: Artwork[] = [
  {
    name: "Sonas Costa",
    creator: "arus Tong",
    price: "1.75 ETH",
    likes: "39k",
    image: sonasCosta,
  },
  {
    name: "Versace",
    creator: "Antoni Tudisco",
    price: "2.45 ETH",
    likes: "48k",
    image: versace,
  },
  {
    name: "Digital Decade",
    creator: "Anthony gargasz",
    price: "2.45 ETH",
    likes: "50k",
    image: digitalDecade,
  },
  {
    name: "Winter Jamz",
    creator: "Antoni Tudisco",
    price: "2.3 ETH",
    likes: "47k",
    image: winterJamz,
  },
  {
    name: "Pastel Wifey",
    creator: "blake kathryn",
    price: "3.21 ETH",
    likes: "44k",
    image: pastelWifey,
  },
  {
    name: "Abstract Flow",
    creator: "Jordan Vale",
    price: "1.92 ETH",
    likes: "31k",
    image: abstractFlow,
  },
  {
    name: "Neon Depths",
    creator: "Mika Sorel",
    price: "2.87 ETH",
    likes: "42k",
    image: neonDepths,
  },
  {
    name: "Modern Muse",
    creator: "Elena Cross",
    price: "2.15 ETH",
    likes: "36k",
    image: modernMuse,
  },
  {
    name: "Retro Grid",
    creator: "Sam Okafor",
    price: "1.64 ETH",
    likes: "28k",
    image: retroGrid,
  },
  {
    name: "Wall Echoes",
    creator: "Nia Brandt",
    price: "2.03 ETH",
    likes: "33k",
    image: wallEchoes,
  },
  {
    name: "Ocean Wash",
    creator: "Theo Lindqvist",
    price: "2.58 ETH",
    likes: "39k",
    image: oceanWash,
  },
];

function PopularWeek() {
  const [centeredIndex, setCenteredIndex] = useState(2);

  return (
    <section className={styles.section} id="explore">
      <div className={styles.inner}>
        <SectionHeading>Popular this week</SectionHeading>
      </div>
      <Slider className={styles.row} onCenterChange={setCenteredIndex}>
        {ARTWORKS.map((artwork, index) => (
          <ArtworkCard key={artwork.name} {...artwork} centered={index === centeredIndex} />
        ))}
      </Slider>
    </section>
  );
}

export default PopularWeek;
