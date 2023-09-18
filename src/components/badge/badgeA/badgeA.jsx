import "../badge.css";

export default function BadgeA({ count, src }) {
  return (
    <div className="badgeA">
      <span>{count}</span>
      <img src={src} className="badge-photo" />
    </div>
  );
}
