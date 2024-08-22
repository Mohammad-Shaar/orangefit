import { Link } from "react-router-dom";

const LinkBtn = ({ children, path }) => {
  return (
    <Link
      to={path}
      className="bg-gray-50 text-orange-400 rounded-2xl font-bold uppercase p-3 md:py-3 md:px-16 hover:bg-gray-300"
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
