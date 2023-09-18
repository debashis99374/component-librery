import {
  CardWithDismis,
  CardWithBadge,
  CardWithOverlay,
  CardWithText,
  CardVertical,
  CardHorizontal,
  CardWithShadow
} from "../../components/card/card";
import "./cardDocs.css";
import { CodeBlock } from "react-code-blocks";

export default function CardDocs() {
  const code = `
  <CardWithBadge title={"Card with Badge"} badgeName={"New"}/>
      <CardWithDismis title={"Card with Dismis"}/>
      <CardWithOverlay title={"Card Overlay"}/>
      <CardWithText title={"Text Card"}/>
      <CardVertical title={"Vertical Card"}/>
      <CardHorizontal title={"Horizontal Card"}/>
      <CardWithShadow title="Card with shadow"/>
  `;
  return (
    <div className="carddocs">
      <h2>Card Component</h2>
      <p>Here is various types of card component to use</p>

      <CardWithBadge title={"Card with Badge"} badgeName={"New"} />
      <CardWithDismis title={"Card with Dismis"} />
      <CardWithOverlay title={"Card Overlay"} />
      <CardWithText title={"Text Card"} />
      <CardVertical title={"Vertical Card"} />
      <CardHorizontal title={"Horizontal Card"} />
      <CardWithShadow title="Card with shadow" />
      <p>How to use</p>
      <CodeBlock text={code} language="jsx" showLineNumbers={false} />
    </div>
  );
}
