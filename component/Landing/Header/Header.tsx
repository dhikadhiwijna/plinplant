import Image from "next/image";
import React, { FC } from "react";
import * as S from "./Header.style";
import sm from "../../../assets/images/header-pic-small.jpg";
import lg from "../../../assets/images/header-pic-large.jpg";
import Button from "../../Button";
import colors from "../../../styles/colors";
import { FaChevronDown } from "react-icons/fa";

const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <div className="sm">
          <Image
            src={sm}
            alt="small-image"
            width={300}
            objectFit="contain"
            layout="intrinsic"
          />
        </div>
        <div className="lg">
          <Image
            src={lg}
            alt="large-image"
            width={860}
            // sizes="(min-width: 500px)"
            objectFit="cover"
            priority
          />
        </div>

        <S.Typography>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            expedita.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            fuga explicabo consectetur, laborum magnam quo deleniti esse a
            quisquam eos!
          </p>
          <Button
            bgColor={colors.lightGreenTransparent}
            color={colors.white}
            border={colors.transparent}
            scrollDown
          >
            <S.Down>
              <FaChevronDown className="icon" />
            </S.Down>
            <S.ButtonText>Scroll down for more</S.ButtonText>
          </Button>
        </S.Typography>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
