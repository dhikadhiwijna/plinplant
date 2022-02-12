import styled from "styled-components";
import colors from "../../../styles/colors";
import Container from "../../Container";

export const HeaderContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.green};
`;

export const Wrapper = styled(Container)`
  padding-top: 130px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  @media (max-width: 900px) {
    & > .sm {
      min-width: 200px;
      margin-right: 30px;
    }

    & > .lg {
      min-width: 300px;
      height: 450px;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    padding-top: 100px;
    & > .sm {
      max-width: 500px;
      width: 100%;
      margin-right: unset;
      margin-bottom: 10px;
    }

    & > .lg {
      display: none;
    }
  }
`;

export const Typography = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  max-width: 533px;

  & > p {
    margin: 20px 0 30px;
    color: ${colors.white};
  }

  & > h1 {
    color: ${colors.white};
  }

  @media (max-width: 900px) {
    max-width: 400px;
  }

  @media (max-width: 760px) {
    position: unset;

    & > p {
      margin: 10px 0 20px;
    }
  }
`;

export const Down = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;

  & > .icon {
    width: 55px;
    height: 15px;
  }
`;

export const ButtonText = styled.p`
  color: ${colors.white};
`;
