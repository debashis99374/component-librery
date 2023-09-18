import { CodeBlock } from "react-code-blocks";
import Heading from "../../components/heading/heading";
import "./heading.css";

export default function HeadingDocs() {
  const code = `<Heading size="50px">H1</Heading>
  <Heading size="40px">H2</Heading>
  <Heading size="30px">H3</Heading>
  <Heading size="20px">H4</Heading>`;
  return (
    <div className="headingdocs">
      <h2>Heading Component</h2>
      <p>This components is used to create heading texts</p>
      <Heading size="50px">H1</Heading>
      <Heading size="40px">H2</Heading>
      <Heading size="30px">H3</Heading>
      <Heading size="20px">H4</Heading>
      <p>How to use this component</p>
      <CodeBlock text={code} language="jsx" />
    </div>
  );
}
