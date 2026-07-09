import { SectionHeading } from "../Text/Text";
import Slider from "../Slider/Slider";
import ArtworkCard, { type Artwork } from "./ArtworkCard";
import sonasCosta from "../../assets/artworks/sonas-costa.jpg";
import versace from "../../assets/artworks/versace.jpg";
import digitalDecade from "../../assets/artworks/digital-decade.jpg";
import winterJamz from "../../assets/artworks/winter-jamz.jpg";
import pastelWifey from "../../assets/artworks/pastel-wifey.jpg";
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
    featured: true,
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
];

function PopularWeek() {
  return (
    <section className={styles.section} id="explore">
      <SectionHeading>Popular this week</SectionHeading>
      <Slider className={styles.row}>
        {ARTWORKS.map((artwork) => (
          <ArtworkCard key={artwork.name} {...artwork} />
        ))}
      </Slider>
    </section>
  );
}

export default PopularWeek;
