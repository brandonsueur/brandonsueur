import React from 'react';

import "./Tags.css";

const tags = [
  {
    name: "Node.js",
    url: "https://nodejs.org/"
  },
  {
    name: "React",
    url: "https://reactjs.org/"
  },
  {
    name: "Laravel",
    url: "https://laravel.com/"
  },
  {
    name: "CakePHP",
    url: "https://cakephp.org/"
  }
];

const Tags = () => (
  <ul className="tags">
    {tags.map((tag, i) => (
      <li key={tag.name}>
        <a target="_blank" rel="noopener noreferrer" title={tag.name} href={tag.url}>
          {tag.name}
        </a>
      </li>
    ))}
  </ul>
)

export default Tags;
