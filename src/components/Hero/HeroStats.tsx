import leightonKramer from "../../assets/avatars/leighton-kramer.jpg";
import haylieArcand from "../../assets/avatars/haylie-arcand.jpg";
import bowenHiggins from "../../assets/avatars/bowen-higgins.jpg";
import saigeFuentes from "../../assets/avatars/saige-fuentes.jpg";
import sophieMclain from "../../assets/avatars/sophie-mclain.jpg";
import styles from "./Hero.module.css";

const STATS = [
  { value: "27k +", label: "Art works" },
  { value: "20k +", label: "Auctions" },
  { value: "7k +", label: "Artists" },
];

const ACTIVE_USER_AVATARS = [leightonKramer, haylieArcand, bowenHiggins, saigeFuentes, sophieMclain];

function HeroStats() {
  return (
    <div className={styles.statsWrap}>
      <div className={styles.statsBar}>
        {STATS.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.activeUsers}>
        <div className={styles.avatarStack}>
          {ACTIVE_USER_AVATARS.map((avatar, i) => (
            <img
              key={avatar}
              src={avatar}
              className={styles.avatar}
              alt=""
              style={{ zIndex: ACTIVE_USER_AVATARS.length - i }}
            />
          ))}
        </div>
        <div>
          <p className={styles.statValue}>40k +</p>
          <p className={styles.statLabel}>Active Users</p>
        </div>
      </div>
    </div>
  );
}

export default HeroStats;
