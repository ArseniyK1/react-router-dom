import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const math = useMatch(to);

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: math ? "var(--color-active)" : "white",
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
