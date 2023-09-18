export default function Link({ src, children }) {
  return (
    <a href={src} className="link-button">
      {children}
    </a>
  );
}
