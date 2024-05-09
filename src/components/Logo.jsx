import { Link } from "react-router-dom";
import logo from "../assets/NftHome_logo_white.png";

export default function Logo() {
  return (
    <Link to={"/"} className="p-1">
      <img src={logo} alt="logo" className="w-20 h-20" />
    </Link>
  );
}
