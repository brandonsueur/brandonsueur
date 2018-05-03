import React, { Component } from 'react'

class Socials extends Component{
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            links: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/links")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        links: result
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
        const { links } = this.state;

        return (
            <ul className="social-icons">
                {links.map((link, i) => (
                    <li key={link.name}>
                        <a target="_blank" rel="noopener noreferrer" href={link.url}>
                            <i className={link.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}


export default Socials
