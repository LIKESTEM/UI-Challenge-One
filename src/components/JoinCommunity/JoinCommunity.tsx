import Button from "../Inputs/Button";
import styles from "./JoinCommunity.module.css";

function JoinCommunity() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <h2 className={styles.heading}>Join Us to Create Sell and Collect NFTs Digital Art</h2>
        <Button variant="primary">Join Community</Button>
      </div>
    </section>
  );
}

export default JoinCommunity;
