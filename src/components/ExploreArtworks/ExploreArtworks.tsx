import { SectionHeading } from "../Text/Text";
import CategoryCard, { type Category } from "./CategoryCard";
import abstract1 from "../../assets/categories/abstract-1.jpg";
import abstract2 from "../../assets/categories/abstract-2.jpg";
import abstract3 from "../../assets/categories/abstract-3.jpg";
import threeDArt1 from "../../assets/categories/3d-art-1.jpg";
import threeDArt2 from "../../assets/categories/3d-art-2.jpg";
import threeDArt3 from "../../assets/categories/3d-art-3.jpg";
import modernArt1 from "../../assets/categories/modern-art-1.jpg";
import modernArt2 from "../../assets/categories/modern-art-2.jpg";
import modernArt3 from "../../assets/categories/modern-art-3.jpg";
import game1 from "../../assets/categories/game-1.jpg";
import game2 from "../../assets/categories/game-2.jpg";
import game3 from "../../assets/categories/game-3.jpg";
import graffiti1 from "../../assets/categories/graffiti-1.jpg";
import graffiti2 from "../../assets/categories/graffiti-2.jpg";
import graffiti3 from "../../assets/categories/graffiti-3.jpg";
import watercolor1 from "../../assets/categories/watercolor-1.jpg";
import watercolor2 from "../../assets/categories/watercolor-2.jpg";
import watercolor3 from "../../assets/categories/watercolor-3.jpg";
import styles from "./ExploreArtworks.module.css";

const CATEGORIES: Category[] = [
  { label: "Abstract", count: "30", images: [abstract1, abstract2, abstract3] },
  { label: "3D Art", count: "45", images: [threeDArt1, threeDArt2, threeDArt3] },
  { label: "Modern Art", count: "59", images: [modernArt1, modernArt2, modernArt3] },
  { label: "Game", count: "25", images: [game1, game2, game3] },
  { label: "Graffiti", count: "36", images: [graffiti1, graffiti2, graffiti3] },
  { label: "Watercolor", count: "40", images: [watercolor1, watercolor2, watercolor3] },
];

function ExploreArtworks() {
  return (
    <section className={styles.section} id="marketplace">
      <SectionHeading>Explore Artworks</SectionHeading>
      <div className={styles.grid}>
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </div>
    </section>
  );
}

export default ExploreArtworks;
