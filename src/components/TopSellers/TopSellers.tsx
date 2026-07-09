import { SectionHeading } from "../Text/Text";
import Slider from "../Slider/Slider";
import SellerCard, { type Seller } from "./SellerCard";
import leightonKramer from "../../assets/avatars/leighton-kramer.jpg";
import haylieArcand from "../../assets/avatars/haylie-arcand.jpg";
import bowenHiggins from "../../assets/avatars/bowen-higgins.jpg";
import saigeFuentes from "../../assets/avatars/saige-fuentes.jpg";
import sophieMclain from "../../assets/avatars/sophie-mclain.jpg";
import jeremyBurch from "../../assets/avatars/jeremy-burch.jpg";
import amelieGriffith from "../../assets/avatars/amelie-griffith.jpg";
import isabelaHart from "../../assets/avatars/isabela-hart.jpg";
import diegoBentley from "../../assets/avatars/diego-bentley.jpg";
import daisyArnold from "../../assets/avatars/daisy-arnold.jpg";
import styles from "./TopSellers.module.css";

const SELLERS: Seller[] = [
  { name: "Leighton Kramer", eth: "276.7", avatar: leightonKramer },
  { name: "Haylie Arcand", eth: "345.6", avatar: haylieArcand },
  { name: "Bowen Higgins", eth: "323.7", avatar: bowenHiggins },
  { name: "Saige Fuentes", eth: "347.7", avatar: saigeFuentes },
  { name: "Sophie Mclain", eth: "230.6", avatar: sophieMclain },
  { name: "Jeremy Burch", eth: "267.9", avatar: jeremyBurch },
  { name: "Amelie Griffith", eth: "334.1", avatar: amelieGriffith },
  { name: "Isabela Hart", eth: "289.1", avatar: isabelaHart },
  { name: "Diego Bentley", eth: "290.7", avatar: diegoBentley },
  { name: "Daisy Arnord", eth: "265.4", avatar: daisyArnold },
];

const ROW_ONE = SELLERS.slice(0, 5);
const ROW_TWO = SELLERS.slice(5);

function TopSellers() {
  return (
    <section className={styles.section} id="artists">
      <SectionHeading>Top Sellers</SectionHeading>
      <div className={styles.rows}>
        <Slider className={styles.grid} direction="left">
          {ROW_ONE.map((seller) => (
            <SellerCard key={seller.name} {...seller} />
          ))}
        </Slider>
        <Slider className={styles.grid} direction="right">
          {ROW_TWO.map((seller) => (
            <SellerCard key={seller.name} {...seller} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TopSellers;
