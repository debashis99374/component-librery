import "./leftsideBar.css";
import { NavLink } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <div className="leftsideBar">
      <ol>
        <li>
          <NavLink className="navLink" to="/alert">
            Alert
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/avatar">
            Avatar
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/badge">
            Badge
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/button">
            Button
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/heading">
            Heading
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/card">
            Card
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/text">
            Text
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/image">
            Image
          </NavLink>
        </li>
      </ol>
    </div>
  );
}
