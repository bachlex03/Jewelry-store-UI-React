import { useEffect, useState } from "react";

import * as sliders from "./storeSlider";

const arrSliders = Object.values(sliders);
function Slider() {
  const [index, setIndex] = useState(1);

  const Comp = arrSliders[index];

  useEffect(() => {
    // setTimeout(() => {}, 5000);
  }, []);

  return <Comp />;
}

export default Slider;
