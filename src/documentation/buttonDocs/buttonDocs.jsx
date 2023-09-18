import { CodeBlock } from "react-code-blocks";
import Float from "../../components/button/flotingButton/floatingButton";
import IconButton from "../../components/button/iconButton/iconButton";
import Link from "../../components/button/link/link";
import Primery from "../../components/button/primery/primery";
import "./buttonDocs.css";

export default function ButtonDocs() {
  const code1 = `
  <Primery type={"primery"}>Primery</Primery>
      <Primery type={"secondary"}>Secondary</Primery>
  `;
  const code2 = `
  <Link src={"/"}>Link button</Link>
  `;
  return (
    <div className="buttondocs">
      <h2>Button Component</h2>
      <p>
        Button component is used to display different types of buttons like
        primary button, button with icon, link button, floating action button.
      </p>
      <div>
        <h4>Primery Button</h4>
        <Primery type={"primery"}>Primery</Primery>
        <Primery type={"secondary"}>Secondary</Primery>
      </div>
      <p>How to use it</p>
      <CodeBlock text={code1} language="jsx" showLineNumbers={false} />
      <div>
        <h4>Link Button</h4>
        <Link src={"/"}>Link button</Link>
      </div>
      <p>How to use it</p>
      <CodeBlock text={code2} language="jsx" showLineNumbers={false} />
      <div>
        <h4>Icon Button</h4>
        <IconButton iconName={"ri:delete-bin-line"}>Icon Button</IconButton>
      </div>

      <h4>Float Action Button----------->>>>>></h4>
      <Float />
    </div>
  );
}
