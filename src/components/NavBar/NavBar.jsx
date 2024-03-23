import { useState } from "react";
import { RiCloseCircleLine, RiMenuFill } from "react-icons/ri";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  return (
    <nav className="text-black p-6 bg-green-500">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <RiCloseCircleLine /> : <RiMenuFill />}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } p-8 bg-green-500 rounded-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
