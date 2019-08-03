import React from 'react';

import './Dots.scss';

const Dots = props => {
  const { name } = props;

  return (
    <div className={`dots dots-${name}`}>
      <svg width="100%" height="100%">
        <pattern
          id="pattern-circles-blue"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle fill="#E2E2E2" cx="2" cy="2" r="2" />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles-blue)"
        />
      </svg>
    </div>
  );
};

export default Dots;
