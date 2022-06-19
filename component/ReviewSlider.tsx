import React from "react";
import Card from "./Card";
import Head from "next/head";
import Slider from "react-slick";
import { products, reviews } from "../data/dummyData";
import styled from "styled-components";
import colors from "../styles/colors";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import StarCounter from "../helper/StarCounter";

type SliderProps = {
  products: dataProp[];
};

interface dataProp {
  name: string;
  category: string;
  id: number;
  img: StaticImageData;
}

const ReviewSlider = () => {
  return (
    <div>
      <main>
        <SliderContainer>
          <h3>Review</h3>
          {reviews.map((data, index) => (
            <ReviewContainer>
              <div>
                <div>
                  <div>
                    <div>
                      <Image
                        src={data.img}
                        alt={data.name}
                        width={50}
                        height={50}
                        layout="fixed"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <h5>{data.name}</h5>
                      <h6>{data.created}</h6>
                    </div>
                  </div>
                  <h6>{StarCounter(data.rating)}</h6>
                </div>
                <h5>{data.text}</h5>
              </div>
            </ReviewContainer>
          ))}
        </SliderContainer>
      </main>
    </div>
  );
};

export default ReviewSlider;

const SliderContainer = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: ${colors.darkGreen};
  height: 84vh;
  overflow: hidden;
  overflow-y: scroll;
  max-width: 350px;

  & > h3 {
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;

  & > div {
    width: 96%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 5px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${colors.lightGreenTransparent};

    & > h5 {
      color: ${colors.white};
      margin: 5px 0;
    }

    & > div {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;

        & > div:first-of-type {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          overflow: hidden;
          margin-left: -20px;
          margin-top: -20px;
        }

        & > div:last-of-type {
          margin-left: 15px;
          & > h5 {
            color: ${colors.white};
            font-weight: bold;
            margin-bottom: 2px;
          }
          & > h6 {
            color: ${colors.white};
          }
        }
      }
    }
  }
`;
