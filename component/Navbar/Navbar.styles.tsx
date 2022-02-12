import styled from "styled-components";
import colors from "../../styles/colors";
import Container from "../Container";

export const NavBg = styled.div`
  background-color: #254c50f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled(Container)`
  transition: all 0.5s ease;
  backdrop-filter: blur(5px);
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: auto;
  max-width: 500px;

  & > li {
    color: ${colors.white};
    font-family: "Poppins";
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-of-type(2) {
      margin: 0 20px;
      border-left: 1px solid ${colors.yellowTransparent};
      padding-left: 20px;
    }

    & > a {
      & > .cart {
        color: ${colors.lightGreenTransparent};
        font-size: 18px;
        cursor: pointer;
        margin-top: 5px;

        &:hover {
          color: ${colors.lightGreen};
        }
      }
    }
  }
`;
