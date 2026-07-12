import Slider from "../Slider/Slider";
import styles from "./Partners.module.css";

const PARTNERS = [
  "PayPal",
  "coinbase",
  "BINANCE",
  "Revolut",
  "EXODUS",
  "BITFINEX",
  "Blockchain",
  "Stripe",
  "Kraken",
  "Ledger",
  "MetaMask",
  "OpenSea",
  "Trust Wallet",
];

function Partners() {
  return (
    <div className={styles.partners}>
      <Slider className={styles.row} direction="left" speed={30}>
        {PARTNERS.map((name) => (
          <span className={styles.brand} key={name}>
            {name}
          </span>
        ))}
      </Slider>
    </div>
  );
}

export default Partners;
