import styles from "./Partners.module.css";

const PARTNERS = ["PayPal", "coinbase", "BINANCE", "Revolut", "EXODUS", "BITFINEX", "Blockchain"];

function Partners() {
  return (
    <div className={styles.partners}>
      <div className={styles.track}>
        {PARTNERS.map((name) => (
          <span className={styles.brand} key={name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Partners;
