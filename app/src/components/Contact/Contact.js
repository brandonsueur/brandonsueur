
import React, { Component } from 'react'

import Socials from '../Socials'

class Contact extends Component{

    render() {
        return(
            <section id="contact">
                <div className="container">

                    <h2>Vous êtes intéressé à travailler avec moi ?<span>N'hésitez pas  à m'écrire !</span></h2>

                    <p>Écrivez-moi directement sur mon e-mail — <a href="mailto:brandon.sueur@outlook.fr">brandon.sueur@outlook.fr</a> ou n'hésitez pas à visiter mes différents réseaux sociaux ci-dessous. Vous aurez une réponse dans les plus brefs délais.</p>

                    <Socials />
                </div>
            </section>
        )
    }
}

export default Contact;
