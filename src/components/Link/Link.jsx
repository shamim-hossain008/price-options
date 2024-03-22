const Link = ({ route }) => {
  return (
    <li className="mr-6 font-bold">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
