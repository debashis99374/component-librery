import { CodeBlock } from "react-code-blocks";
import Text from "../../components/text/text";
import "./text.css";

export default function TextDocs() {
  const code = `<Text>Classic/Normal</Text>
  <Text><i>Italic</i></Text>
  <Text><strong>Bold</strong></Text>`;
  return (
    <div className="textdocs">
      <h2>Text Component</h2>
      <p>This component is used for texts</p>
      <div>
        <Text>Classic/Normal</Text>
        <Text>
          <i>Italic</i>
        </Text>
        <Text>
          <strong>Bold</strong>
        </Text>
      </div>

      <p>How to use this component</p>
      <CodeBlock text={code} language="jsx" />
    </div>
  );
}
