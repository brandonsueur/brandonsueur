
import React, { Component } from 'react'

import vector from './img/vector.svg'
import browser from './img/browser.svg'
import coding from './img/coding.svg'

import "./Services.css"

class Services extends Component{

    render() {
        return(
            <section id="services">
                <div className="container content-service">
                    <div className="col-md-4">
                        <div className="service">
                            <img alt="Vector" src={vector} />

                            <h2>Branding</h2>

                            <p>
                                Je crée des identités visuelles qui représente vos objectifs et vos idées. En
                                utilisant la suite Adobe : Illustrator, PhotoShop, XD.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service">
                            <img alt="browser" src={browser} />

                            <h2>UI/UX Design</h2>

                            <p>
                                J'adore créer un design simple et propre pour le web et mobile, en mettant
                                l'accent sur la typographie, le contenu et les couleurs.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service">
                            <img alt="Coding" src={coding} />

                            <h2>Intégration Web</h2>

                            <p>
                                J'aime créer des sites web qui fonctionnent sur n'importe quel support
                                (Mobile, Tablette), en utilisant les dernières technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
