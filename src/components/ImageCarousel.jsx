import { useState } from "react";
import { imageSlider } from "../utils/images";

export function ImageCarousel() {
  const [index, setIndex] = useState(0);

  function nextImage() {
    if (index + 1 >= imageSlider.length) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  }
  function previousImage() {
    if (index <= 0) {
      setIndex(imageSlider.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  }
  return (
    <>
      <div>
        <button onClick={() => previousImage()}>-</button>
        <img src={imageSlider[index].img} alt={imageSlider[index].alt} />
        <button onClick={() => nextImage()}>+</button>
      </div>
    </>
  );
}
