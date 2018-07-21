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

            <p>Vous aurez une réponse dans les plus brefs délais.</p>
            
          </div>
        </section>
      </div>
    )
  }
}

export default Contact;
