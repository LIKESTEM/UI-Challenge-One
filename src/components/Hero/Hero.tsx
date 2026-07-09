import Button from "../Inputs/Button";
import BidCard from "./BidCard";
import HeroStats from "./HeroStats";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.copy}>
        <h1 className={styles.heading}>Discover, Collect and Sell Dope Art and NFTs</h1>
        <p className={styles.subtext}>
          The world's largest digital marketplace for crypto collections and non fungible tokens (NFTs).
        </p>

        <div className={styles.ctaRow}>
          <Button variant="primary">Discover</Button>
          <Button variant="outline">Create</Button>
          <button className={styles.watchVideo} type="button">
            <span className={styles.videoIcon}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                {/* Main camera body (rounded rectangle) */}
                <rect x="0" y="0" width="9" height="10" rx="1.5" />
                {/* Camera lens cap (triangle on the right side) */}
                <path d="M10 3 L14 1.5 L14 8.5 L10 7 Z" />
              </svg>
            </span>

            Watch a video
          </button>
        </div>

        <HeroStats />
      </div>

      <BidCard />
    </section>
  );
}

export default Hero;
