import React from "react";
import Card from "./Card";
// import { Html, Head, Main, NextScript } from "next/document";
import Head from "next/head";
import Slider from "react-slick";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderProps = {
  products: dataProp[];
};

interface dataProp {
  name: string;
  category: string;
  id: number;
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
      <main>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></Script>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></Script>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/react-slick/0.13.1/react-slick.js"></Script>
        <Slider {...settings}>
          {products.map((data, index) => {
            return (
              <Card
                key={index}
                name={data.name}
                image={data.img}
                id={data.id}
                screen="home"
              />
            );
          })}
        </Slider>
      </main>
    </div>
  );
};

export default SliderContainer;
