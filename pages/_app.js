import "../styles/globals.css";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaWhatsapp } from "react-icons/fa6";


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
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/243982382176"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contactez-moi sur WhatsApp"
        >
          {/* Icône SVG officielle WhatsApp */}


          <FaWhatsapp />

        
        </a>
        <style jsx global>{`
          .whatsapp-float {
            position: fixed;
            right: 24px;
            bottom: 32px;
            z-index: 10000;
            background: #25D366;
            color: #fff;
            border-radius: 50%;
            box-shadow: 0 2px 12px #8884;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            animation: whatsapp-bounce 1.2s infinite alternate;
            transition: box-shadow 0.2s;
          }
          .whatsapp-float:hover {
            box-shadow: 0 4px 24px #25D36699;
            background: #128C7E;
          }
          @keyframes whatsapp-bounce {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.1); }
            100% { transform: translateY(0) scale(1); }
          }
          @media (max-width: 600px) {
            .whatsapp-float {
              width: 44px;
              height: 44px;
              bottom: 18px;
              right: 12px;
            }
            .whatsapp-float span {
              font-size: 22px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
