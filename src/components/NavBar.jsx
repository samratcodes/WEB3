import NavItem from "./NavItems";

export default function NavBar() {
  return (
    <ul className="flex justify-between items-center  w-[420px] ">
      <NavItem routeValue="/property">Property</NavItem>
      <NavItem routeValue="/acquired">Acquired</NavItem>
      <NavItem routeValue="/blog">Blog</NavItem>
      <NavItem routeValue="/profile">Profile</NavItem>
    </ul>
  );
}
