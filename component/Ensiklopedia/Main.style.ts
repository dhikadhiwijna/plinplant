import styled from "styled-components";
import colors from "../../styles/colors";
import Container from "../Container";

export const BgContainer = styled.div`
  background-color: ${colors.green};
  padding-bottom: 150px;
`;

export const ContainerWrapper = styled(Container)`
  /* display: flex;
  flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  & > p {
    max-width: 500px;
    margin: 10px auto 50px auto;

    &::after {
      position: absolute;
      content: "";
      height: 70%;
      width: 3px;
      background-color: ${colors.yellow};
      top: 150px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  & > h1 {
    margin: 50px 0 10px 0;
  }
`;

export const BoxContainer = styled.ul`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;

  & > li {
    &:nth-of-type(1) {
      max-width: 45%;
      overflow: visible;
      height: 50%;
      padding: 20px;
      background-color: ${colors.green};
      border-radius: 10px;
      position: relative;

      & > h3 {
        text-align: left;
        color: ${colors.white};
      }

      & > p {
        color: ${colors.white};
        text-align: left;
      }

      & > div {
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 20px solid ${colors.green};
        position: absolute;
        right: 0;
        top: 0;
        margin-right: -10px;
      }
    }
    &:nth-of-type(2) {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background-color: ${colors.green};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    &:last-of-type {
      width: 45%;
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const BoxContainerRight = styled.ul`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;

  & > li {
    &:nth-of-type(1) {
      width: 45%;
      display: flex;
      justify-content: flex-end;
    }
    &:nth-of-type(3) {
      max-width: 45%;
      overflow: visible;
      height: 50%;
      padding: 20px;
      background-color: ${colors.green};
      border-radius: 10px;
      position: relative;

      & > h3 {
        text-align: left;
        color: ${colors.white};
      }

      & > p {
        color: ${colors.white};
        text-align: left;
      }

      & > div {
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 20px solid ${colors.green};
        position: absolute;
        left: 0;
        top: 0;
        margin-left: -10px;
      }
    }
    &:nth-of-type(2) {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background-color: ${colors.green};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const TextBox = styled.div``;
