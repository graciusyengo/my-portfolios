import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>A propos De Moi</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  Je suis Gracius Yengo <span>Developpeur web </span>{" "}
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quasi error ea molestiae, libero facilis, consectetur eveniet
                  ipsum neque velit repellat vero, accusantium praesentium quod
                  sapiente soluta quo repudiandae aut? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quo illo suscipit beatae
                  rem explicabo cum, dolorum magni iure temporibus iste
                  blanditiis ipsa voluptatem sint nesciunt, architecto
                  consequatur quis quisquam nemo.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personnal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Website : <span>www.domaine.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email : <span>yengogracius@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Tel : <span>+243972479631</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Ville :<span>Kinshasa</span>
                    </p>
                  </div>

                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <Link href="#" className="btn"> Télécharger Cv</Link>
                    <Link  href="#" className="btn hire-me"> Me Contacter</Link>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">skills
              <div className="row">
                <div className="skill-item">
                  <h5> HTML</h5>
                </div>
                <div className="skill-item">
                  <h5> CSS</h5>
                </div>
                <div className="skill-item">
                  <h5> JAVA SCRIPT</h5>
                </div>
                <div className="skill-item">
                  <h5> REACT JS</h5>
                </div>

              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
