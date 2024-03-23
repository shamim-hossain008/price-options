const Link = ({ route }) => {
  return (
    <li className="mr-6 font-bold px-6 hover:bg-green-700">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
