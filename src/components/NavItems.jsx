/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function NavItem({ children, routeValue }) {
  return (
    <Link
      to={`${routeValue}`}
      className="text-xl  font-inter font-medium  text-white hover:text-red-600 duration-700"
    >
      {children}
    </Link>
  );
}
