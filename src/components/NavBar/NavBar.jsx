const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <a href={`route.path`}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
