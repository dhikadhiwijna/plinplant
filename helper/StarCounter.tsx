import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import colors from "../styles/colors";

const StarCounter = (input: number) => {
  switch (input) {
    case 1:
      return (
        <StarContainer>
          <FaStar className="star" />
          <FaStar className="starreg" />
          <FaStar className="starreg" />
          <FaStar className="starreg" />
          <FaStar className="starreg" />
        </StarContainer>
      );

    case 2:
      return (
        <StarContainer>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="starreg" />
          <FaStar className="starreg" />
          <FaStar className="starreg" />
        </StarContainer>
      );
    case 3:
      return (
        <StarContainer>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="starreg" />
          <FaStar className="starreg" />
        </StarContainer>
      );
    case 4:
      return (
        <StarContainer>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="starreg" />
        </StarContainer>
      );
    case 5:
      return (
        <StarContainer>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </StarContainer>
      );
    default:
      break;
  }
};

export default StarCounter;

const StarContainer = styled.div`
  display: flex;

  & > .star {
    fill: ${colors.yellow};
    font-size: 16px;
  }
  & > .starreg {
    fill: ${colors.lightGreenTransparent};
    font-size: 16px;
  }
`;
