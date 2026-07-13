import Slider from "../Slider/Slider";
import styles from "./Partners.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons"; // or wherever this comes from


const PARTNERS = [
  { name: "PayPal", icon: faPaypal },
  { name: "coinbase" },
  { name: "BINANCE" },
  { name: "Revolut" },
  { name: "EXODUS" },
  { name: "BITFINEX" },
  { name: "Blockchain" },
  { name: "Stripe" },
  { name: "Kraken" },
  { name: "Ledger" },
  { name: "MetaMask" },
  { name: "OpenSea" },
  { name: "Trust Wallet" },
];

function Partners() {
  return (
    <div className={styles.partners}>
      <Slider className={styles.row} direction="left" speed={30}>
        {PARTNERS.map(({ name, icon }) => (
          <span className={styles.brand} key={name}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {name}
          </span>
        ))}
      </Slider>
    </div>
  );
}

export default Partners;



