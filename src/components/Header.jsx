function Header({ children, id, as: Element, ...props }) {
  const theId = id ?? getId(children);
  console.log(getId(children))
  return (
    <Element id={theId}  className="mb-2 mt-4" {...props}>
      {children}
    </Element>
  );
}

function getId(children) {
  return children
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}

export default Header;