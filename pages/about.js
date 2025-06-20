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
                Développeur passionné avec une expertise en développement web et mobile. Compétent dans la création de solutions robustes et intuitives, je m'efforce d'allier performance et expérience utilisateur. Mon approche analytique me permet de résoudre des problèmes complexes et d'optimiser les systèmes pour garantir une expérience fluide et efficace.
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
                      Tel : <span>+243982382176</span>
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
                    <a href="/DEVELOPPEUR WEB.pdf" download className="btn">Télécharger Cv</a>
                    <Link href="/contact" className="btn hire-me">Me Contacter</Link>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <h4 className="skills-title">Hard Skills </h4>
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
                  <div className="skill-item">
                    <h5> NEXT JS</h5>
                  </div>
                  <div className="skill-item">
                    <h5> NEST JS</h5>
                  </div>
                  <div className="skill-item">
                    <h5> MYSQL</h5>
                  </div>
                  <div className="skill-item">
                    <h5> MONGO DB</h5>
                  </div>
                </div>
              </div>

              {/* Soft Skills Section */}
              <div className="skills padd-15">
                <h4 className="skills-title">Soft Skills</h4>
                <div className="row">
                  <div className="skill-item">
                    <h5>Communication</h5>
                  </div>
                  <div className="skill-item">
                    <h5>Travail en équipe</h5>
                  </div>
                  <div className="skill-item">
                    <h5>Gestion du temps</h5>
                  </div>
                  <div className="skill-item">
                    <h5>Créativité</h5>
                  </div>
                  <div className="skill-item">
                    <h5>Résolution de problèmes</h5>
                  </div>
                  <div className="skill-item">
                    <h5>Adaptabilité</h5>
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
