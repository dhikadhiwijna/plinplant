import React from "react";
import Card from "./Card";
import Head from "next/head";
import Slider from "react-slick";
import { products } from "../data/dummyData";
import styled from "styled-components";
import colors from "../styles/colors";

type SliderProps = {
  products: dataProp[];
};

interface dataProp {
  name: string;
  category: string;
  id: number;
  img: StaticImageData;
}

const VerticalSlider = () => {
  return (
    <div>
      <main>
        <SliderContainer>
          <h3>Tanaman terkait</h3>
          {products.map((data, index) => {
            return (
              <Card
                key={index}
                name={data.name}
                image={data.img}
                id={data.id}
                screen="shop"
              />
            );
          })}
        </SliderContainer>
      </main>
    </div>
  );
};

export default VerticalSlider;

const SliderContainer = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: ${colors.darkGreen};
  height: 84vh;
  overflow: hidden;
  overflow-y: scroll;

  & > h3 {
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
  }
`;
