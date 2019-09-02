import React from 'react';

import './Button.scss';

const Button = props => {
  const { text, link, newTab } = props;
  return (
    <a
      className="button"
      href={link}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {text}

      <svg width="29" height="13">
        <g
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 6.5h26M22 1l6 5.5-6 5.5" />
        </g>
      </svg>
    </a>
  );
};

export default Button;
