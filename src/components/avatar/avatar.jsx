import "./avatar.css";

export default function Avatar({ src, name, alt, size }) {
  const getImgDetails = (size) => {
    switch (size) {
      case "small":
        return 30;

      case "medium":
        return 40;
      case "large":
        return 50;
    }
  };

  return (
    <img
      src={src}
      name={name}
      alt={alt}
      width={getImgDetails(size)}
      className="avatar-icon"
    />
  );
}
