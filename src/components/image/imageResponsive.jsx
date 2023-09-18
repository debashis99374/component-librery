import "./image.css";

export default function ImageResponsive({ src, size, name, alt }) {
  return (
    <div>
      <img
        src={src}
        width={size}
        name={name}
        alt={alt}
        className="responsive-img"
      />
    </div>
  );
}
