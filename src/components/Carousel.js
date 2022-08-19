import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";

import "./styled.css";
import "./flickity.css";

const Carousel = props => {
  let flkty;
  let [carouselIndex, setCarouselIndex] = useState(null);

  const handleChange = index => {
    setCarouselIndex(index); // Not working
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", index => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={c => (flkty = c)}
      options={{ initialIndex: props.initialIndex }}
    >
      <img src="http://placeimg.com/640/480/animals/sepia" />
    </Flickity>
  );
};

export default Carousel;

// function App() {
//   return (
//     <div className="App">
//       <h1>React Flickity</h1>
//       <Carousel initialIndex={3} />
//     </div>
//   );
// }


