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

export default function App({ Component, pageProps }) {
  return (
    <div className="main-content">
      <div className="aside">
        <nav>
          <Link href="/">
            {" "}
            <FontAwesomeIcon
              icon={faHome}
              style={{ fontSize: 40, color: "" }}
            />{" "}
            Accueil
          </Link>
          <Link href="/about">
          <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 40, color: "" }}
            />
             A Propos
          </Link>
          <Link href="/service">
          <FontAwesomeIcon
              icon={faList}
              style={{ fontSize: 40, color: "" }}
            />
             service
          </Link>
          <Link href="/portfolios">
          <FontAwesomeIcon
              icon={faBriefcase}
              style={{ fontSize: 40, color: "" }}
            />
             portfolios
          </Link>
          <Link href="/contact">
          <FontAwesomeIcon
              icon={faComments}
              style={{ fontSize: 40, color: "" }}
            />
            contact
          </Link>
        </nav>
      </div>
      <div className="main-content">
      <Component {...pageProps} />
     
      <h1>home section</h1>

      </div>
      
    </div>
  );
}
