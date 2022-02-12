import React from "react";
import Card from "../Card";
import Head from "next/head";
import Slider from "react-slick";

type SliderProps = {
  products: dataProp[];
};

interface dataProp {
  name: string;
  category: string;
  img: StaticImageData;
}

const SliderContainer = ({ products }: SliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          rel="stylesheet"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-slick/0.13.1/react-slick.js"></script>
      </Head>

      <main>
        <Slider {...settings}>
          {products.map((data, index) => {
            return (
              <Card key={index} name={data.name} image={data.img} id={index} />
            );
          })}
        </Slider>
      </main>
    </div>
  );
};

export default SliderContainer;
