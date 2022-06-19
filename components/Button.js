const Button = ({ children, hasArrow = false, ...restProps }) => {
  return (
    <button
      className={`flex rounded-full bg-primary ${
        hasArrow ? "p-4" : "p-4 px-6"
      } items-center shadow-btn transition-shadow transition hover:shadow-btnHover`}
      {...restProps}>
      <span
        className={`w-full font-body font-semibold text-white ${
          hasArrow ? "ml-2" : ""
        }`}>
        {children}
      </span>

      {hasArrow && (
        <div className="ml-4 rounded-full bg-blue-grey bg-opacity-40 p-3">
          <svg
            className="w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 12">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 6H1m7-5 5 5-5-5Zm5 5-5 5 5-5Z"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
