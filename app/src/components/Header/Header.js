
import React, { Component } from 'react'

import pictureMe from './img/me.jpg'
import Socials from '../Socials'

class Header extends Component{
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            search_job: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/infos")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        search_job: result[1].value
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
        const checkSearchJob = (this.state.search_job === "true") ? true : false

        const isSearchJob = checkSearchJob;

        return(
            <section id="header">
                <div className="container">
                    <div className="head">
                        <div className="col-md-2 col-sm-4 col-xs-4">
                            <div className="hexagone animated fadeInDown">
                                <svg className="hex" width="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.57 272.74">
                                    <path d="M14.81,61.07,112.34,4.76a23.75,23.75,0,0,1,23.75,0l97.53,56.31A23.75,23.75,0,0,1,245.5,81.64V194.26a23.75,23.75,0,0,1-11.88,20.57l-97.53,56.31a23.75,23.75,0,0,1-23.75,0L14.81,214.83A23.75,23.75,0,0,1,2.93,194.26V81.64A23.75,23.75,0,0,1,14.81,61.07Z"
                                          transform="translate(-2.93 -1.58)"/>
                                </svg>
                            </div>

                            <img src={pictureMe} alt="Brandon Sueur" />
                        </div>

                        <div className="col-md-10">
                            <div className="title">
                                <h3 className="animated fadeIn">Brandon Sueur</h3>
                                <span className="animated fadeInUp">{isSearchJob ? `Disponible pour des missions Freelance.` : `` }</span>
                            </div>

                            <Socials />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
