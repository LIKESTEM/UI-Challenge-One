import { useState } from "react";
import Button from "../Inputs/Button";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["Home", "Explore", "Marketplace", "Artists", "News"];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <a href="#top" className={styles.logo}>
        PLAY<span className={styles.logoBadge}>NFT</span>
      </a>

      <nav className={styles.nav}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={link === active ? styles.activeLink : undefined}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <div className={styles.search}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <Button variant="primary">Register</Button>
      </div>

      <button
        type="button"
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}>
        <div className={styles.mobileSearch}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={link === active ? styles.activeLink : undefined}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
