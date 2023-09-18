import "../badge.css";
import { Icon } from "@iconify/react";

export default function BadgeI({ count, iconName }) {
  return (
    <div className="badgeI">
      <span>{count}</span>
      <Icon icon={iconName} className="badge-photo" />
    </div>
  );
}
