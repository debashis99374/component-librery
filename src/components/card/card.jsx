import { useState } from "react";
import "./card.css";
import { Icon } from "@iconify/react";

export function CardWithBadge({ title, badgeName }) {
  return (
    <div className="card card-badge">
      <h4>{title}</h4>
      <p>{badgeName}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        asperiores.
      </p>
    </div>
  );
}
export function CardWithDismis({ title }) {
  const [dismiss, setDismiss] = useState(true);
  return dismiss ? (
    <div className="card card-dismis">
      <h4>{title}</h4>
      <Icon
        icon="ion:close"
        className="icon-card"
        onClick={() => setDismiss(false)}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        asperiores.
      </p>
    </div>
  ) : null;
}
export function CardWithOverlay({ title }) {
  return (
    <div className="card card-overlay">
      <img src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-1480690.jpg&fm=jpg" />
      <h4>{title}</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        asperiores.
      </p>
    </div>
  );
}
export function CardWithText({ title }) {
  return (
    <div className="card card-text">
      <h4>{title}</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        asperiores.
      </p>
    </div>
  );
}
export function CardVertical({ title }) {
  return (
    <div className="card card-vertical">
      <img src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-1480690.jpg&fm=jpg" />
      <h4>{title}</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        asperiores.
      </p>
    </div>
  );
}
export function CardHorizontal({ title }) {
  return (
    <div className="card card-horizontal">
      <img src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-1480690.jpg&fm=jpg" />
      <div>
        <h4>{title}</h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          asperiores.
        </p>
      </div>
    </div>
  );
}
export function CardWithShadow({ title }) {
  return (
    <div className="card card-Shadow">
      <h4>{title}</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        asperiores.
      </p>
    </div>
  );
}
