import "./components.css";
import { useNavigate } from "react-router-dom";

export default function Components() {
  const navigate = useNavigate();
  return (
    <div className="component">
      <h2>All Components</h2>
      <div className="component-div">
        <p onClick={() => navigate("/alert")}>Alert</p>
        <p onClick={() => navigate("/avatar")}>Avatar</p>
        <p onClick={() => navigate("/badge")}>Badge</p>
        <p onClick={() => navigate("/button")}>Button</p>
        <p onClick={() => navigate("/heading")}>Heading</p>
        <p onClick={() => navigate("/card")}>Card</p>
        <p onClick={() => navigate("/text")}>Text</p>
        <p onClick={() => navigate("/image")}>Image</p>
      </div>
    </div>
  );
}
