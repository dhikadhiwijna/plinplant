import Image from "next/image";
import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Button from "../../Button";
import Container from "../../Container";
import { cta } from "../../../assets/illustration";

const CTA = () => {
  return (
    <BgContainer>
      <Wrapper>
        <Typography>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            dolor. Ducimus sequi omnis nobis odit! Iure aperiam architecto optio
            iusto ipsum in dicta velit quis quae maiores. Minima dignissimos
            nemo odit!
          </p>
          <div>
            <Button
              bgColor={colors.green}
              border={colors.transparent}
              color={colors.white}
              CTA
            >
              Gabung Sekarang
            </Button>
          </div>
        </Typography>
        <Image src={cta} alt="CTA" width={600} height={600} />
      </Wrapper>
    </BgContainer>
  );
};

export default CTA;

const Wrapper = styled(Container)`
  display: flex;
`;

const BgContainer = styled.div`
  background-color: ${colors.yellowTransparent};
`;

const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 65px 0;

  & > p {
    width: 80%;
    margin-bottom: 40px;
    font-weight: 300;
  }
`;
