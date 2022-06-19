import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { valueProps } from "../../../data/dummyData";
import colors from "../../../styles/colors";
import Container from "../../Container";

const ValueComp = () => {
  return (
    <Wrapper>
      <h1>Why PlinPlant</h1>
      <Value>
        {valueProps.map((data, index) => (
          <ValueWrapper key={index}>
            <Image src={data.img} alt={data.name} />
            <p>{data.name}</p>
          </ValueWrapper>
        ))}
      </Value>
    </Wrapper>
  );
};

export default ValueComp;

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;

  & > h1 {
    margin-bottom: 50px;
    font-weight: bold;
  }
`;

const Value = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > text {
    margin-top: 10px;
  }
`;
