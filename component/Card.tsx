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
  // onClickBuy?: () => void;
  // onClickEnsli?: () => void;
}

const Card = ({ name, image, id }: CardProps) => {
  const router = useRouter();

  const onClickEnsiklopedia = () => {
    router.push(`./ensiklopedia/${id + 1}/${name}`);
    // console.log("clicked ensli");
  };

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
        <ButtonContainer>
          <Button
            bgColor={colors.green}
            border={colors.transparent}
            color={colors.white}
            card
            // onClick={onClickBuy}
          >
            Beli
          </Button>
          <Button
            bgColor={colors.lightGreen}
            border={colors.transparent}
            color={colors.white}
            card
            onClick={onClickEnsiklopedia}
          >
            Ensiklopedia
          </Button>
        </ButtonContainer>
      </div>
    </CardContainer>
  );
};

export default Card;

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
    transform: translateY(-50%);
    left: 0;
    right: 0;
    transition: all 0.3s ease;

    & > h4 {
      color: ${colors.white};
      margin-bottom: 5px;
    }
  }

  &:hover {
    /* transform: scale(1.2); */
    & > div {
      top: -30%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
