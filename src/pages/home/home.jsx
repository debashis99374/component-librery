import "./home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Explore My Component Librery</h2>
      <p>Here you can find diffrent components for your web app</p>
      <button className="button-common" onClick={() => navigate("/components")}>
        Explore
      </button>
    </div>
  );
}
