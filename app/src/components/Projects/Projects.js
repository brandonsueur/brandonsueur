
import React, { Component } from 'react'

import "./Projects.css"

class Projects extends Component{

    render() {
        return(
            <section id="projects">
                <div className="container">
                    <div className="project">
                        <div className="col-md-6">
                            <h3><a className="project-name" href="">Moosta</a> <a className="link-github" target="_blank" rel="noopener noreferrer" href="https://github.com/brandonsueur/Moosta"><i className="fa fa-github"></i></a></h3>

                            <div className="tags">
                                <li>Node.JS</li>
                                <li>express</li>
                            </div>

                            <p>
                                Un petit tchat réalisé pour apprendre SocketIO mais aussi pouvoir discuter avec des amis
                                autre que Discord pour juste expérimenté et testé des fonctionnalités sympas.
                            </p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="col-md-6">
                            <h3><a className="project-name" href="">IntermarcheTV</a> <a className="link-github" target="_blank" rel="noopener noreferrer" href="https://github.com/IntermarcheTV/app"><i className="fa fa-github"></i></a></h3>

                            <div className="tags">
                                <li>CakePHP 3</li>
                                <li>scss</li>
                            </div>

                            <p>
                                Création d'une application web avec CakePHP 3 pendant mon stage chez Intermarché. L'idée est
                                d'afficher toute les promotions et les fêtes sur les téléviseurs dans le magasin.
                            </p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="col-md-6">
                            <h3><a className="project-name" href="">Ticki</a></h3>

                            <div className="tags">
                                <li>CakePHP 3</li>
                                <li>scss</li>
                            </div>

                            <p>
                                Un projet réalisé avec CakePHP afin de l'apprendre. L'objectif étant de créer des tickets
                                et des personnes répondrons à vos tickets afin de résoudre votre ticket.
                            </p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="col-md-6">
                            <h3><a className="project-name" href="">Gity</a></h3>

                            <div className="tags">
                                <li>Laravel</li>
                                <li>scss</li>
                            </div>

                            <p>
                                Une plateforme pour vos des statistiques GitHub. L'intérêt principal c'est de centraliser
                                le tout et réussir à avoir des informations intéressantes tel que vos unfollowers.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}

export default Projects;
