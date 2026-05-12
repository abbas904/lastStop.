import banner from "../../assets/international/cairo/banner.jpeg";
import cairoImg from "../../assets/international/cairo/cairo.jpg";
import cairo1 from "../../assets/international/cairo/cairo1.jpg";
import cairo2 from "../../assets/international/cairo/cairo2.jpg";
import cairo3 from "../../assets/international/cairo/cairo3.jpg";
import cairo4 from "../../assets/international/cairo/cairo4.jpg";

const cairo = {
  id: "cairo",
  img: banner,
  areas: [
    {
      id: "pyramids",
      img: cairoImg,
      images: [cairo1, cairo2, cairo3, cairo4],
    },
  ],
};

export default cairo;
