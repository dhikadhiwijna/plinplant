import React from "react";
import styled from "styled-components";
import { products } from "../../../data/dummyData";
import colors from "../../../styles/colors";
import Container from "../../Container";
import SliderContainer from "../../Slider";

const Main = () => {
  let filteredData = [...new Set(products.map((x) => x.category))];

  const _upperCase = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <BgContainer>
      <SearchContainer>
        <SearchWrapper>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <input placeholder="Contoh: Basil" />
        </SearchWrapper>
      </SearchContainer>
      <ContainerWrapper>
        {filteredData.map((data, index) => (
          <SliderWrapper key={index}>
            <h3>{_upperCase(data)}</h3>
            <SliderContainer
              products={products.filter((x) => x.category === data)}
            />
          </SliderWrapper>
        ))}
      </ContainerWrapper>
    </BgContainer>
  );
};

export default Main;

const BgContainer = styled.div`
  background-color: ${colors.green};
  padding-bottom: 100px;
`;

const SearchContainer = styled(Container)``;

const SearchWrapper = styled.div`
  width: 60%;
  padding: 30px 40px;
  background-color: ${colors.lightGreenTransparent};
  border-radius: 10px 10px 0 0;

  & > h2 {
    color: ${colors.white};
    margin-bottom: 10px;
    font-weight: bold;
  }

  & > input {
    border: none;
    border-radius: 10px;
    padding: 15px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

const ContainerWrapper = styled(Container)`
  background-color: ${colors.darkGreen};
  padding: 60px 160px 40px 160px;
  border-radius: 0px 5px 5px 5px;
`;

const SliderWrapper = styled.div`
  margin: 10px 0;

  & > h3 {
    color: ${colors.white};
    margin: 10px 0;
  }
`;
