
import React, { Component } from 'react'

import Socials from '../Socials'

import "./Contact.css"

class Contact extends Component{
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            mail: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/infos")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        mail: result[0].value
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
            <section id="contact">
                <div className="container">

                    <h2>Vous êtes intéressé à travailler avec moi ?<span>N'hésitez pas  à m'écrire !</span></h2>

                    <p>Écrivez-moi directement sur mon e-mail — <a href={ "mailto:" + this.state.mail}>{this.state.mail}</a> ou n'hésitez pas à visiter mes différents réseaux sociaux ci-dessous. Vous aurez une réponse dans les plus brefs délais.</p>

                    <Socials />
                </div>
            </section>
        )
    }
}

export default Contact;
