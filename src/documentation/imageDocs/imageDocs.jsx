import { CodeBlock } from "react-code-blocks";
import Image from "../../components/image/image";
import ImageResponsive from "../../components/image/imageResponsive";

export default function ImageDocs() {
  const code = `<Image name={"image"} alt={"img"} size={"500px"} src="https://media.istockphoto.com/id/1409424975/photo/medical-background-of-painful-back.jpg?s=2048x2048&w=is&k=20&c=40ODmVI8s1m0yVmvKnMaiMOBFH02M5LV4N9iFgpX6xw="/>
  <ImageResponsive 
  name={"image"}
  alt={"img"}
  size={"500px"}
  src="https://media.istockphoto.com/id/1409424975/photo/medical-background-of-painful-back.jpg?s=2048x2048&w=is&k=20&c=40ODmVI8s1m0yVmvKnMaiMOBFH02M5LV4N9iFgpX6xw="
 />`;
  return (
    <div className="imagedocs">
      <h2>Image Component</h2>
      <p>This component helps in giving a image to your website</p>
      <Image
        name={"image"}
        alt={"img"}
        size={"500px"}
        src="https://media.istockphoto.com/id/1409424975/photo/medical-background-of-painful-back.jpg?s=2048x2048&w=is&k=20&c=40ODmVI8s1m0yVmvKnMaiMOBFH02M5LV4N9iFgpX6xw="
      />
      <ImageResponsive
        name={"image"}
        alt={"img"}
        size={"500px"}
        src="https://media.istockphoto.com/id/1409424975/photo/medical-background-of-painful-back.jpg?s=2048x2048&w=is&k=20&c=40ODmVI8s1m0yVmvKnMaiMOBFH02M5LV4N9iFgpX6xw="
      />
      <p>How to use image compomant</p>
      <CodeBlock text={code} language="jsx" />
    </div>
  );
}
