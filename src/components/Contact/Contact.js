import React from 'react';

import "./Contact.css";

class Contact extends React.Component {
  render() {
    return(
      <div className="container">
        <section className="contact" id="contact">
          <h2>Entrer en contact</h2>

          <div className="content">
            <p>
              Vous avez un projet dont vous voulez parler? Une question? Un événement auquel
              vous aimeriez que je parle? Ou voulez juste dire bonjour? Vous pouvez utiliser
              le formulaire ci-dessous ou me retrouver en ligne sur mes différents réseaux sociaux.
              C'est toujours génial de parler et de faire de nouvelles connexions.
            </p>

            <div className="mail">
              <a href="mailto:brandon.sueur@outlook.fr">brandon.sueur@outlook.fr</a>
            </div>

            <h2>Prestations de service</h2>

            <div className="content">
              <p>
                Étant curieux et informé sur les produits que je développe, je commence chaque travail
                avec des questions détaillées sur votre entreprise et vos clients avant même que
                je commence à penser à des solutions de conception.
              </p>

              <p>
                Je ne travaille qu'avec un nombre déterminé de clients en même temps afin de garantir
                des résultats de haute qualité et significatifs. Si je sens que je ne serai pas un bon
                candidat pour votre idée, je vous le dirai et vous recommanderai d'autres solutions.
              </p>

              <p>
                Je n'accepterai votre projet que si je crois que je peux créer de la valeur pour votre
                entreprise et que les avantages seront supérieurs à l'argent que vous dépensez.
              </p>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Contact;
