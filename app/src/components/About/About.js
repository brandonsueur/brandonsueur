
import React, { Component } from 'react'

import "./About.css"

class About extends Component{
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            linkedin: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/links")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        linkedin: [result[0].url]
                    })
                },

                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        return(
            <section id="about">
                <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="head">
                            <h2>Qui suis-je ?</h2>
                        </div>

                        <div className="content">
                            <p>Je suis un développeur Front-End motivé et très passionné par son métier depuis quelques années. </p>

                            <p>
                            C'est par curiosité que j'ai découvert la programmation à l'âge de 14 ans. C'est rapidement devenu une passion, toujours guidé par ma curiosité, je me suis mis à expérimenter par moi-même tout un tas de technologie, et je n'ai depuis jamais arrêté !
                            </p>

                            <p>
                                Depuis février 2017, je suis salarié chez CGI, où je suis Développeur Front-End & Back-End. J'y ai appris beaucoup de choses depuis mon arrivé c'est une expérience très enrichissante, car ça me permet de m'améliorer en termes de compétence technique mais aussi humainement. J'ai pu apprendre beaucoup de choses telles que Drupal, Symfony, CodeIgniter et SailsJS.
                            </p>

                            <p>
                                À côté de mon travail, je suis aussi freelance à temps partiel. Je me suis lancé dans l'aventure Freelance car
                                j'apprécie travailler en direct avec le client. Comprendre et répondre à une problématique
                                sont des choses très stimulantes pour moi, et je prends plaisir à m'y impliquer dans le but de livrer un produit abouti.
                            </p>

                            <p>
                                Si vous pensez que votre site internet peut prendre sa place sur mon portfolio, n'hésitez donc pas à me contacter.
                                J'ai hâte d'échanger sur votre projet que ce soit par <a href="mailto:brandon.sueur@outlook.fr">mail</a>, <a href="tel:0608151628">téléphone</a> ou autour d'un café si vous êtes sur Amiens.
                            </p>

                            <div className="links right">
                                <span className="bar"></span>

                                <a className="link-linkedin" target="_blank" rel="noopener noreferrer" href={this.state.linkedin[0]}>
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>

                                <a className="link-malt" target="_blank" rel="noopener noreferrer" href="https://www.malt.fr/profile/brandonsueur">Malt</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
