const Link = (props) => {
  const { title, ...restProps } = props;

  return (
    <a
      className="text-indigo-600 border-b-2 hover:border-indigo-600"
      {...restProps}
    >
      {title}
    </a>
  );
};
export default Link;
