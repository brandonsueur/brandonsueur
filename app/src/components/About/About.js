
import React, { Component } from 'react'

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
                        linkedin: [result[2].url]
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
                            <p>
                                Je m'appelle Brandon, j'ai 19 ans et j'habite actuellement à Amiens. Depuis maintenant quelques années, je suis passionné par les nouvelles technologies, plus particulièrement par le développement web. J'ai commencé par suivre des vidéos ou des articles sur Grafikart et CodeAcademy. Après quelques mois, j'ai commencé à créer de petites pages, à comprendre certaines choses et après avoir fait multiples tutoriels, je me suis donc lancé sur des choses plus concrètes tel que l'apprentissage de CakePHP 3. C'est à partir de là que je me suis dit qu'il fallait que je réalise un Github afin de montrer mon avancement mais aussi ma montée en compétences. Maintenant, mon envie principale est d'approfondir mes compétences en JavaScript avec des frameworks tel que VueJS et ReactJS.
                            </p>

                            <br />

                            <p>
                                Depuis février 2017, je suis salarié chez CGI, où je suis Développeur Front-End & Back-End. J'y ai appris beaucoup de choses depuis mon arrivé c'est une expérience très enrichissante, car ça me permet de m'améliorer en termes de compétence technique mais aussi humainement. J'ai pu apprendre beaucoup de choses telles que Drupal, CodeIgniter et SailsJS.
                            </p>

                            <br />

                            <p>
                                À côté de mon travail, je suis aussi freelance à temps partiel. L'objectif étant pour moi de réussir à réaliser des sites internet intéressants, inspirants et originaux. Si vous pensez que votre site internet peut prendre sa place sur mon portfolio, n'hésitez donc pas à me contacter.
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
