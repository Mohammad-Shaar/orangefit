import { Link } from "react-router-dom";

const LinkBtn = ({ children, path }) => {
  return (
    <Link
      to={path}
      className="inline-block bg-gray-50 text-orange-600 rounded-3xl font-bold shadow-[-2px_3px_6px_0px_#00000040] uppercase px-20 py-2.5 md:text-xl md:py-3 md:px-16 hover:bg-gray-300"
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
