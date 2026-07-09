import styles from "./ExploreArtworks.module.css";

export interface Category {
  label: string;
  count: string;
  images: string[];
}

function CategoryCard({ label, count, images }: Category) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbs}>
        {images.map((image, i) => (
          <img key={image} src={image} className={styles.thumb} alt={`${label} sample ${i + 1}`} />
        ))}
      </div>
      <img src={images[0]} className={styles.hero} alt={`${label} featured`} />
      <div className={styles.footer}>
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>{count} items</span>
      </div>
    </div>
  );
}

export default CategoryCard;
