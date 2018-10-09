import React from 'react'
import { api } from '../../api.js'

import "./Socials.css"

class Socials extends React.Component {
  state = {
    socials: []
  }

  componentDidMount() {
    api.get('/socials')
      .then(res =>
        this.setState({ socials : res.data.socials})
      )
  }

  render() {
    const { socials } = this.state

    return (
      <ul className="socials">
        {socials.map((social, i) => (
          <li key={social.name}>
            <a target="_blank" rel="noopener noreferrer" href={social.url}>
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

export default Socials
