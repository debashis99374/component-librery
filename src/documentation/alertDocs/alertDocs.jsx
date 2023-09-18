import { CodeBlock } from "react-code-blocks";
import Alert from "../../components/alert/alert";
import "./alertDocs.css";

export default function AlertDocs() {
  const code = `<Alert status={"succes"}>This is a succes alert</Alert>
  <Alert status={"fail"}>This is a failure alert</Alert>
  <Alert status={"warning"}>This is a warning alert</Alert>`;
  return (
    <div className="alertdocs">
      <h2>Alert Component</h2>
      <p>This component is used to show diffrent types of alert messages</p>

      <div>
        <Alert status="succes">This is a succes alert</Alert>
        <Alert status={"fail"}>This is a failure alert</Alert>
        <Alert status={"warning"}>This is a warning alert</Alert>
      </div>
      <p>How to use alert component</p>
      <CodeBlock text={code} language="jsx" />
    </div>
  );
}
