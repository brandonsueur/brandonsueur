import React from 'react';

import './Tags.scss';

const tags = [
  'PHP',
  'Autonome',
  'MySQL',
  'Git',
  'Rigoureux',
  'React',
  'Docker',
  'Vue.js',
  'Adobe xd',
  'MVC',
  'Sketch',
  'Laravel 5',
  'JavaScript',
  'Polyvalent',
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
