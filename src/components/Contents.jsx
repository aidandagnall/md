
import React from "react";

function useHeadings() {
  const [headings, setHeadings] = React.useState([]);
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1))
      }));
    setHeadings(elements);
  }, []);
  // console.log(headings);
  return headings;
}


// type HeadingProps = {
//   children: string;
//   as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
//   id?: string;
// };

function useScrollSpy(ids, options) {
  const [activeId, setActiveId] = React.useState();
  const observer = React.useRef();
  React.useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [ids, options]);
  return activeId;
}

// Now, the function that renders it all
function Contents() {
  const headings = useHeadings();
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    { rootMargin: "0% 0% -25% 0%" }
  );
  return (
    <nav className="toc">
      <h4>Contents</h4>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              style={{
                marginLeft: `${heading.level - 2}em`,
                fontWeight: activeId === heading.id ? "bold" : "normal"
              }}
              href={`#${heading.id}`}
            >
              - {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Contents;