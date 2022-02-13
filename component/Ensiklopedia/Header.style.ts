import styled from "styled-components";
import colors from "../../styles/colors";
import Container from "../Container";

export const BgContainer = styled.div`
  background-color: ${colors.green};
  padding-bottom: 150px;
`;

export const ContainerWrapper = styled(Container)`
  display: flex;
  padding-top: 100px;
  justify-content: space-between;

  & > .image {
    overflow: hidden;
    box-sizing: content-box;
    margin-right: 50px;
  }
`;

export const Typography = styled.div`
  min-width: 300px;
  max-width: 500px;

  & > h1 {
    color: ${colors.white};
    margin-bottom: 20px;
  }

  & > h3 {
    color: ${colors.white};
    margin-top: 20px;
    margin-bottom: 5px;
  }

  & > p {
    color: ${colors.white};
    font-weight: 200;
  }
`;
export const BoxWrapper = styled(Container)`
  display: flex;
  justify-content: flex-end;
  margin-top: -100px;
`;
export const Box = styled.div`
  width: 200px;
  height: 190px;
  background-color: ${colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  & > h4 {
    color: ${colors.green};

    &:first-of-type {
      margin-top: 15px;
    }
  }
`;
