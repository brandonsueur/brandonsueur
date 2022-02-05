const Button = ({ children, hasArrow = false, ...restProps }) => {
  return (
    <button
      className={`flex bg-primary rounded-full ${
        hasArrow ? "p-4" : "p-4 px-6"
      } items-center shadow-btn hover:shadow-btnHover transition-shadow transition`}
      {...restProps}>
      <span
        className={`font-body font-semibold text-white w-full ${
          hasArrow ? "ml-2" : ""
        }`}>
        {children}
      </span>

      {hasArrow && (
        <div className="p-3 ml-4 rounded-full bg-[#2982CE] bg-opacity-40">
          <svg
            className="w-[12px]"
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
