import "../styles/globals.css";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUser,
  faList,
  faComments,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {

  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter(); // Récupère la route active

  const isActive = (path) => router.pathname === path;

  // Détecter si on est sur mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 991);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fermer le menu lors du changement de page
  useEffect(() => {
    setNavOpen(false);
  }, [router.pathname]);

  return (
    <div className="main-contenaire">
      <div className="aside">
        <div className="logo">
         <Link href="/"> <span>gy</span></Link> 
        </div>
        <div className={"nav-toggler" + (navOpen ? " open" : "")} onClick={() => setNavOpen(v => !v)}>
          <span></span>
        </div>
        {/* Afficher la croix uniquement si menu ouvert et mobile */}
        {navOpen && isMobile && (
          <button
            className="close-nav"
            aria-label="Fermer le menu"
            onClick={() => setNavOpen(false)}
            style={{
              position: 'fixed',
              top: 18,
              right: 30,
              background: 'none',
              border: 'none',
              fontSize: 40,
              color: '#ec1839',
              zIndex: 10001,
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        )}
        <ul className={"nav" + (navOpen ? " show" : "") }>
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              {isMobile ? 'Accueil' : (<><FontAwesomeIcon icon={faHome} style={{ fontSize: 16,marginRight:15  }} /> Accueil</>)}
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              {isMobile ? 'A Propos' : (<><FontAwesomeIcon icon={faUser} style={{ fontSize: 16,marginRight:15 }} /> A Propos</>)}
            </Link>
          </li>
          <li>
            <Link href="/service" className={isActive('/service') ? 'active' : ''}>
              {isMobile ? 'Services' : (<><FontAwesomeIcon icon={faList} style={{ fontSize: 16, marginRight:15  }} /> services</>)}
            </Link>
          </li>
          <li>
            <Link href="/portfolios" className={isActive('/portfolios') ? 'active' : ''}>
              {isMobile ? 'Portfolios' : (<><FontAwesomeIcon icon={faBriefcase} style={{ fontSize: 16, marginRight:15  }} /> portfolios</>)}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
              {isMobile ? 'Contact' : (<><FontAwesomeIcon icon={faComments} style={{ fontSize: 16,marginRight:15 }} /> contact</>)}
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
      <Component {...pageProps} />
      
      </div>
    </div>
  );
}
