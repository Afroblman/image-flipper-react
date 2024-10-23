import { useState } from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.webp";
import ImageSlider from "./ImageSlider";
import "./App.css";
const IMAGES = [image1, image2, image3, image4];
function App() {
  return (
    <>
      <ImageSlider imageUrls={IMAGES} />
    </>
  );
}

export default App;
