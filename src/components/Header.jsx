/* eslint-disable react/prop-types */
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="w-full px-4 py-2 flex justify-between border-b-2 border-black  shadow-md sticky top-0 z-20 bg-[#00073F]  ">
      <Logo />
      <NavBar />
    </div>
  );
}
