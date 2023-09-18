import { useNavigate } from "react-router-dom";
import "./heading.css";
import { useState } from "react";

export default function Heading() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const componentsArr = [
    "alert",
    "avatar",
    "badge",
    "button",
    "heading",
    "card",
    "text",
    "image"
  ];
  const handleClick = () => {
    if (componentsArr.includes(search.toLowerCase())) {
      navigate(`/${search}`);
    } else {
      alert("Sorry we don't have this component right now");
    }

    setSearch("");
  };
  return (
    <div className="heading">
      <div>
        <h2>
          Component <span>Librery</span>{" "}
        </h2>
      </div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search components"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/components")}>Components</p>
      </div>
    </div>
  );
}
