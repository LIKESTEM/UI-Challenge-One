import Button from "../Inputs/Button";
import heroArtwork from "../../assets/artworks/hero-bidcard.jpg";
import styles from "./Hero.module.css";

function BidCard() {
  return (
    <div className={styles.bidCard}>
      <img src={heroArtwork} className={styles.artwork} alt="Featured NFT artwork" />

      <div className={styles.bidInfo}>
        <div className={styles.bidRow}>
          <div>
            <p className={styles.bidLabel}>Ending in:</p>
            <p className={styles.bidValue}>1h 20m 30s</p>
            <Button variant="primary">Place a Bid</Button>
          </div>
          <div>
            <p className={styles.bidLabel2}>Highest Bid</p>
            <p className={styles.bidValue2}>32.4 ETH</p>
            <Button variant="ghost">Purchase</Button>
          </div>
        </div>
        {/* <div className={styles.bidActions}>
          <Button variant="primary">Place a Bid</Button>
          <Button variant="ghost">Purchase</Button>
        </div> */}
      </div>
    </div>
  );
}

export default BidCard;
