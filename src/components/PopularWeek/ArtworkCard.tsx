import styles from "./PopularWeek.module.css";

export interface Artwork {
  name: string;
  creator: string;
  price: string;
  likes: string;
  image: string;
}

interface ArtworkCardProps extends Artwork {
  centered?: boolean;
}

function ArtworkCard({ name, creator, price, likes, image, centered }: ArtworkCardProps) {
  return (
    <div className={`${styles.card} ${centered ? styles.centered : ""}`}>
      <div className={styles.cardInner}>
        <img src={image} className={styles.thumb} alt={name} />
        <div className={styles.cardFooter}>
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.creator}>by {creator}</p>
          </div>
          <div className={styles.cardMeta}>
            <span className={styles.priceTag}>{price}</span>
            <span className={styles.likes}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={styles.likeIcon}>
                <path d="M12 21s-7.5-4.6-10-9.3C0.4 8 2 4 6 4c2.2 0 3.9 1.3 6 3.4C14.1 5.3 15.8 4 18 4c4 0 5.6 4 4 7.7C19.5 16.4 12 21 12 21z" />
              </svg>
              {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtworkCard;
