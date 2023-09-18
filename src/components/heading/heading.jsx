import "./heading.css";

export default function Heading({ size, children }) {
  return <h1 style={{ fontSize: size }}>{children}</h1>;
}
