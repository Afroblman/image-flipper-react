import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import "./imageSlider.css";
export default function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0);
  function handlePreviousImg() {
    setIndex((prevIndex) =>
      prevIndex == 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  }
  function handleNextImg() {
    setIndex((nextIndex) =>
      nextIndex == imageUrls.length - 1 ? 0 : nextIndex + 1
    );
  }
  function handleBtnClick(currentIndex) {
    setIndex(currentIndex);
  }
  return (
    <>
      <h1>Image Slider</h1>
      <div>
        <button onClick={handlePreviousImg} className="left-arrow">
          <BsArrowLeft />
        </button>
        <img className="img" src={imageUrls[index]} alt={`Image ${index}`} />
        <button onClick={handleNextImg} className="right-arrow">
          <BsArrowRight />
        </button>
      </div>
      <div className="btns">
        {imageUrls.map((_, btnIndex) => (
          <span
            onClick={() => handleBtnClick(btnIndex)}
            className={btnIndex === index ? "active" : ""}
            key={btnIndex}
          ></span>
        ))}
      </div>
    </>
  );
}
