import BadgeI from "../../components/badge/badgeI/badgeI";
import BadgeA from "../../components/badge/badgeA/badgeA";
import { CodeBlock } from "react-code-blocks";
import "./badgeDocs.css";

export default function BadgeDocs() {
  const code = `<BadgeI count={2} iconName={"ri:delete-bin-line"} />
  <BadgeA count={3} src={"https://res.cloudinary.com/dt6nk7xus/image/upload/v1694066785/avatars/avatar-svgrepo-com_epdt8m.svg"} />`;
  return (
    <div className="badgedocs">
      <h2>Badge Component</h2>
      <p>
        This component is used to show count number on top of icon or avatar
      </p>

      <h4>Badge on Icons</h4>

      <div>
        <BadgeI count={2} iconName={"ri:delete-bin-line"} />
        <BadgeA
          count={3}
          src={
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1694066785/avatars/avatar-svgrepo-com_epdt8m.svg"
          }
        />
      </div>

      <p>How to use </p>
      <CodeBlock text={code} language="jsx" showLineNumbers={false} />
    </div>
  );
}
