import "./image.css";

export default function Image({ src, size, name, alt }) {
  return <img src={src} width={size} name={name} alt={alt} id="img-round" />;
}
