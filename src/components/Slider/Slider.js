import { useEffect, useLayoutEffect, useState } from "react";

import * as sliders from "./storeSlider";

const arrSliders = Object.values(sliders);
function Slider() {
  const [index, setIndex] = useState(0);

  let Comp = arrSliders[index];

  console.log(index);

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => {
        if (prev === arrSliders.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 10000);
  }, []);

  return <Comp />;
}

export default Slider;
