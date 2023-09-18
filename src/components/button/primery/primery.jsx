import "./primery.css";

export default function Primery({ type, children }) {
  return <button className={`kind ${type}`}>{children}</button>;
}
