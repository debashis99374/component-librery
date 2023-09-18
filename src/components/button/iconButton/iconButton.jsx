import "./iconButton.css";
import { Icon } from "@iconify/react";

export default function IconButton({ iconName, children }) {
  return (
    <div className="iconbutton">
      <Icon icon={iconName} id="ss" />
      <p>{children}</p>
    </div>
  );
}
