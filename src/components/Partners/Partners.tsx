import React from "react";
import Slider from "../Slider/Slider";
import styles from "./Partners.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPaypal } from "@fortawesome/free-brands-svg-icons"; 
import { 
  SiBinance,
  SiCoinbase,
  SiRevolut,
  // SiExodus,
  // SiBitfinex,
  SiBlockchaindotcom,
  SiStripe,
  // SiKraken,
  // SiLedger,
  // SiMetamask,
  SiOpensea,
  // SiTrustpilot,
 } from "react-icons/si";
 import type { IconType } from "react-icons";


const TYPE_FONTAWESOME = "fontAwesome";
const TYPE_SI = "reactIconsSi";

type Partner =
  | { name: string; icon: IconDefinition; type: typeof TYPE_FONTAWESOME }
  | { name: string; icon: IconType; type: typeof TYPE_SI }
  | { name: string; icon?: undefined; type?: undefined };



const PARTNERS: Partner[] = [
  { name: "PayPal", icon: faPaypal, type: TYPE_FONTAWESOME },
  { name: "coinbase" },
  { name: "Binance", icon: SiBinance, type: TYPE_SI },
  { name: "Revolut", icon: SiRevolut, type: TYPE_SI },
  { name: "Exodus" },
  { name: "Bitfinex" },
  { name: "Blockchain", icon: SiBlockchaindotcom, type: TYPE_SI },
  { name: "Stripe", icon: SiStripe, type: TYPE_SI },
  { name: "Kraken" },
  { name: "Ledger" },
  { name: "MetaMask" },
  { name: "OpenSea", icon: SiOpensea, type: TYPE_SI },
  { name: "Trust Wallet" }, // no icon
];

function Partners() {
  return (
    <div className={styles.partners}>
      <Slider className={styles.row} direction="left" speed={30}>
        {PARTNERS.map(({ name, icon, type }) => (
          <span className={styles.brand} key={name}>
            { type === TYPE_FONTAWESOME && icon && (<FontAwesomeIcon icon={icon} />) } 
            { type === TYPE_SI && icon && React.createElement(icon) } 
            &nbsp;{name}
          </span>
        ))}
      </Slider>
    </div>
  );
}

export default Partners;



