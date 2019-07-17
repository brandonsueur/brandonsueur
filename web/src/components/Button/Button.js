import React from 'react';

import './Button.scss';

class Button extends React.PureComponent {
  render() {
    const { text, link } = this.props;
    return (
      <a className="button" href={link}>
        {text}

        <svg width="29" height="13">
          <g
            stroke="#FFF"
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
  }
}

export default Button;
