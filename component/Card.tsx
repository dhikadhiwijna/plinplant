import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Button from "./Button";

interface CardProps {
  name: string;
  image: StaticImageData;
  id: number;
  screen: "home" | "shop";
}

const Card: React.FC<CardProps> = ({ name, image, id, screen }) => {
  const router = useRouter();

  const _firstName = (value: string) => {
    return value.split(" ")[0];
  };

  const onClickEnsiklopedia = () => {
    router.push(`../ensiklopedia/${id}/${name}`);
  };

  const onClickBuy = () => {
    router.push(`../store/${id}`);
  };

  switch (screen) {
    case "home":
      return (
        <CardContainer>
          <Image
            src={image}
            alt="image"
            width={160}
            height={120}
            objectFit="fill"
            layout="fixed"
          />
          <div>
            <h4>{name}</h4>
            <div>
              <Button
                bgColor={colors.green}
                border={colors.transparent}
                color={colors.white}
                card
                onClick={onClickBuy}
              >
                <H5>Beli</H5>
              </Button>
              <Button
                bgColor={colors.lightGreen}
                border={colors.transparent}
                color={colors.white}
                card
                onClick={onClickEnsiklopedia}
              >
                <H5>Ensiklopedia</H5>
              </Button>
            </div>
          </div>
        </CardContainer>
      );
    case "shop":
      return (
        <ShopContainer>
          <Image
            src={image}
            alt="image"
            width={120}
            height={120}
            objectFit="cover"
            layout="fixed"
          />
          <div>
            <h4>{_firstName(name)}</h4>
            <div>
              <Button
                bgColor={colors.green}
                border={colors.transparent}
                color={colors.white}
                card
                onClick={onClickBuy}
              >
                <H5>Beli</H5>
              </Button>
              <Button
                bgColor={colors.lightGreenTransparent}
                border={colors.transparent}
                color={colors.white}
                card
                onClick={onClickEnsiklopedia}
              >
                <H5>Ensiklopedia</H5>
              </Button>
            </div>
          </div>
        </ShopContainer>
      );

    default:
      return null;
  }
};

export default Card;

const H5 = styled.h5`
  color: ${colors.white};
  padding: 2px 0;
`;

const CardContainer = styled.div`
  width: 160px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  & > div {
    position: relative;
    padding: 5px;
    top: 0%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    transition: all 0.3s ease;

    & > h4 {
      color: ${colors.white};
      margin-bottom: 5px;
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  }

  &:hover {
    & > div {
      top: -30%;
    }
  }
`;

const ShopContainer = styled.div`
  width: 260px;
  height: auto;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  background-color: ${colors.lightGreenTransparent};

  & > div {
    margin: 0 10px;

    & > h4 {
      margin: 5px 0 10px 0;
      color: ${colors.white};
    }

    & > div {
      height: 63px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 140px;
      min-width: 100px;
    }
  }
`;
