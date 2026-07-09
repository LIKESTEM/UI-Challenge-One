import styles from "./TopSellers.module.css";

export interface Seller {
  name: string;
  eth: string;
  avatar: string;
}

function SellerCard({ name, eth, avatar }: Seller) {
  return (
    <div className={styles.card}>
      <img src={avatar} className={styles.avatar} alt={name} />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.eth}>{eth} Eth</p>
      </div>
    </div>
  );
}

export default SellerCard;
