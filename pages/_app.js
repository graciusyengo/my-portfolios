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
    <div className="main-contenaire">
      <div className="aside">
        
        <div className="logo">
         <Link href="/"> <span>gy</span></Link> 
          </div>
         <div className="nav-toggler">
           <span></span>
         </div>

        <ul className="nav">
          <li>
            <Link href="/" className="active">
              {" "}
              <FontAwesomeIcon
                icon={faHome}
                style={{ fontSize: 16,marginRight:15  }}
              />{" "}
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" >
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: 16,marginRight:15 }}
              />
              A Propos
            </Link>
          </li>
          <li>
            <Link href="/service">
              <FontAwesomeIcon
                icon={faList}
                style={{ fontSize: 16, marginRight:15 }}
              />
              service
            </Link>
          </li>
          <li>
            <Link href="/portfolios">
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ fontSize: 16, marginRight:15  }}
              />
              portfolios
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <FontAwesomeIcon
                icon={faComments}
                style={{ fontSize: 16,marginRight:15 }}
              />
              contact
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
