import { CodeBlock } from "react-code-blocks";
import Avatar from "../../components/avatar/avatar";
import "./avatarDocs.css";

export default function AvatarDocs() {
  const code = `<Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" size="small" name="small-img" alt="img"/>
<Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" size="medium" name="medium-img" alt="img"/>
  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" size="large" name="large-img" alt="img"/>`;
  return (
    <div className="avatardocs">
      <h2>Avatar Component</h2>
      <p>Avatar component is used as a profile picture</p>
      <div>
        <Avatar
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          size="small"
          name="small-img"
          alt="img"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          size="medium"
          name="medium-img"
          alt="img"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          size="large"
          name="large-img"
          alt="img"
        />
      </div>

      <p>Wonder how to use it?</p>
      <CodeBlock text={code} language="jsx" />
    </div>
  );
}
