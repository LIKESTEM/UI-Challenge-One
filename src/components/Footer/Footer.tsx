import styles from "./Footer.module.css";

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: "Explore", links: ["Art", "Photography", "Music", "Games"] },
  { title: "My Account", links: ["My Profile", "My Collections", "My Favorites", "My Account Settings"] },
  { title: "Resources", links: ["Help Center", "Partners", "Suggestions", "Newsletters"] },
  { title: "Company", links: ["About", "Careers", "Ranking", "Activity"] },
];

const SOCIALS = [
  {
    name: "X",
    path: "M18.4 2H21l-6.6 7.5L22 22h-6.1l-4.8-6.3L5.6 22H3l7.1-8.1L2 2h6.3l4.3 5.8zM17.3 20h1.7L7.8 3.9H6z",
  },
  {
    name: "Instagram",
    path: "M12 2c2.7 0 3 0 4 .1 1 0 1.7.2 2.3.4.6.3 1.1.6 1.6 1.1s.8 1 1.1 1.6c.2.6.4 1.3.4 2.3.1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.7-.4 2.3a4.6 4.6 0 0 1-2.7 2.7c-.6.2-1.3.4-2.3.4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.7-.2-2.3-.4a4.6 4.6 0 0 1-2.7-2.7c-.2-.6-.4-1.3-.4-2.3C2 15 2 14.7 2 12s0-3 .1-4c0-1 .2-1.7.4-2.3a4.6 4.6 0 0 1 2.7-2.7c.6-.2 1.3-.4 2.3-.4C8.5 2.6 8.8 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.2-8.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z",
  },
  {
    name: "Facebook",
    path: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9c0-.4.3-.7.7-.7z",
  },
  {
    name: "Discord",
    path: "M16.2 3.8a14.5 14.5 0 0 0-3.7-1.2 10 10 0 0 0-.5 1c-1.4-.2-2.7-.2-4.1 0a10 10 0 0 0-.5-1 14.4 14.4 0 0 0-3.6 1.2C1.5 7.3.9 10.7 1.2 14.1c1.4 1 2.9 1.8 4.5 2.3q.5-.75 1-1.6a9.5 9.5 0 0 1-1.5-.7q.2-.15.4-.3c2.9 1.4 6.1 1.4 9 0q.2.15.4.3-.7.45-1.5.7.4.85 1 1.6c1.6-.5 3.1-1.3 4.5-2.3.4-3.9-.6-7.3-2.6-10.3zM8.2 12c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5.9 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.logo}>
            PLAY<span className={styles.logoBadge}>NFT</span>
          </a>
          <p className={styles.description}>
            The World's Largest Digital Marketplace for crypto collections
            and non fungible tokens (NFTs) buy, sell and discover exclusive
            digital assets
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href="#top"
                aria-label={social.name}
                className={styles.socialIcon}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.linkGrid}>
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
