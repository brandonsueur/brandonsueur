import React from 'react';

import './Tags.scss';

const tags = [
  'PHP',
  'MySQL',
  'Git',
  'React',
  'Docker',
  'Vue.js',
  'Adobe xd',
  'MVC',
  'SEO',
  'Sketch',
  'Laravel 5',
  'JavaScript',
  'Node.js'
];

const Tags = () => (
  <ul className="tags">
    {tags.map(tag => (
      <li>{tag}</li>
    ))}
  </ul>
);

export default Tags;
