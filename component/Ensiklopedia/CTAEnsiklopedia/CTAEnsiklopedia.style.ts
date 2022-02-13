import styled from "styled-components";
import colors from "../../../styles/colors";
import Container from "../../Container";

export const BgContainer = styled.div`
  background-color: ${colors.green};
  padding: 50px 0;
`;

export const ContainerWrapper = styled(Container)`
  display: flex;
  background-color: ${colors.darkGreen};
  padding: 50px;
  margin: 10px auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  & > div {
    max-width: 700px;
    &:nth-of-type(1) {
      & > h2 {
        color: ${colors.white};
        margin-bottom: 20px;
      }

      & > p {
        color: ${colors.white};
      }
    }
  }
`;
