import Heading from "./pages/heading/heading";
import Home from "./pages/home/home";
import "./styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Components from "./pages/componentsPage/components";
import LeftSideBar from "./pages/leftSideBar/leftsideBar";
import AlertDocs from "./documentation/alertDocs/alertDocs";
import AvatarDocs from "./documentation/avatarDocs/avatarDocs";
import ImageDocs from "./documentation/imageDocs/imageDocs";
import HeadingDocs from "./documentation/headingDocs/heading";
import TextDocs from "./documentation/text/text";
import ButtonDocs from "./documentation/buttonDocs/buttonDocs";
import BadgeDocs from "./documentation/badgeDocs/badgeDocs";
import CardDocs from "./documentation/cardDocs/cardDocs";

export default function App() {
  const location = useLocation();
  const currentLocation = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  return (
    <div className="App">
      <Heading />

      <div className="app-div">
        <div>{currentLocation && <LeftSideBar />}</div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/alert" element={<AlertDocs />} />
            <Route path="/avatar" element={<AvatarDocs />} />
            <Route path="/image" element={<ImageDocs />} />
            <Route path="/heading" element={<HeadingDocs />} />
            <Route path="/text" element={<TextDocs />} />
            <Route path="/button" element={<ButtonDocs />} />
            <Route path="/badge" element={<BadgeDocs />} />
            <Route path="/card" element={<CardDocs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
