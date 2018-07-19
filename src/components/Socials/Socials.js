import React from 'react';

import "./Socials.css";

const socials = [
  {
    name: "linkedin",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/brandonsueur/"
  },{
    name: "Twitter",
    icon: "fab fa-twitter",
    url: "https://twitter.com/_brandonsueur"
  },{
    name: "YouTube",
    icon: "fab fa-youtube",
    url: "https://www.youtube.com/channel/UCk3deqZbjdsTN3k3GComLCg"
  }
];

const Socials = () => (
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

export default Socials;
