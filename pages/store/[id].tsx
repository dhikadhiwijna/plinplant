import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../component/Button";
import Card from "../../component/Card";
import Container from "../../component/Container";
import ReviewSlider from "../../component/ReviewSlider";
import VerticalSlider from "../../component/VertSlider";
// import VerticalSlider from "../../component/VertSlider";
import { cartItems, products } from "../../data/dummyData";
import colors from "../../styles/colors";

const Store = () => {
  const router = useRouter();
  console.log("router", router.query.id);

  const [phaseState, setPhaseState] = useState(3);
  const [add, setAdd] = useState(1);

  return (
    <ColorContainer>
      <ContainerWrapper>
        <VerticalSlider />
        <MainCart>
          <CartContainer>
            <div>
              <p>Ensiklopedia</p>
              <span>i</span>
            </div>
            <Cart>
              <LeftCart>
                <div>
                  <Image
                    src={cartItems[phaseState].img}
                    alt={cartItems[phaseState].name}
                    width={150}
                    height={150}
                    layout="fixed"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p onClick={() => setAdd(add - 1)}>-</p>
                  <p>{add}</p>
                  <p onClick={() => setAdd(add + 1)}>+</p>
                </div>
              </LeftCart>
              <RightCart>
                <h3>Lavender</h3>
                <div>
                  <h5>
                    <FaStar style={{ fill: colors.yellow }} /> 4.8
                  </h5>
                  <h5>Stock : 123</h5>
                </div>
                <h4>Rp. 100.000</h4>
                <div />
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
                <Button
                  bgColor={colors.yellow}
                  color={colors.white}
                  border={colors.transparent}
                >
                  <FaCartPlus
                    style={{ fill: colors.white, marginRight: "5px" }}
                  />
                  Tambah ke keranjang
                </Button>
              </RightCart>
            </Cart>
          </CartContainer>
          <CartPhase>
            {cartItems.map((data, index) => (
              <div
                key={index}
                style={{ position: "relative" }}
                onClick={() => {
                  setPhaseState(index);
                  setAdd(1);
                }}
              >
                <PhaseImage>
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={100}
                    height={100}
                    layout="fixed"
                    objectFit="cover"
                  />
                </PhaseImage>
                <PhaseCover />
                <PhaseText>{data.phase}</PhaseText>
              </div>
            ))}
          </CartPhase>
        </MainCart>
        <ReviewSlider />
      </ContainerWrapper>
    </ColorContainer>
  );
};

export default Store;

export const getServerSideProps = (context: any) => {
  console.log("context", context);

  return {
    props: {},
  };
};

const ContainerWrapper = styled(Container)`
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const ColorContainer = styled.div`
  background-color: ${colors.green};
  height: 100vh;
`;

const Cart = styled.div`
  margin-top: 50px;
  display: flex;
`;

const RightCart = styled.div`
  margin: 0 10px 0 20px;

  & > h3 {
    color: ${colors.white};
    margin-bottom: 5px;
  }

  & > h4 {
    color: ${colors.white};
    margin-bottom: 5px;
  }

  & > h5 {
    color: ${colors.white};
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    &:last-of-type {
      width: 100%;
      height: 1px;
      margin: 15px 0;
      background-color: ${colors.lightGreenTransparent};
    }

    & > h5 {
      color: ${colors.white};
      &:first-of-type {
        margin-right: 10px;
      }

      &:last-of-type {
        padding: 3px;
        background-color: ${colors.lightGreenTransparent};
        border-radius: 5px;
      }
    }
  }
`;

const CartContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: ${colors.darkGreen};
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  position: relative;

  & > div {
    &:first-of-type {
      position: absolute;
      right: 0;
      display: flex;
      margin: 5px;
      padding: 5px 5px 5px 15px;
      background-color: ${colors.lightGreenTransparent};
      border-radius: 20px;

      & > p {
        color: ${colors.white};
        margin-right: 10px;
        font-weight: 300;
      }

      & > span {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: ${colors.lightGreen};
        text-align: center;
      }
    }
  }
`;

const LeftCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > div {
    &:first-of-type {
      display: flex;
      margin-left: -30px;
      border-radius: 20px;
      overflow: hidden;
      width: 150px;
      height: 150px;
    }

    &:last-of-type {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      /* background-color: red; */
      width: 100px;

      & > p {
        color: ${colors.white};
        text-align: center;
        font-weight: bold;

        &:first-of-type {
          background-color: ${colors.lightGreenTransparent};
          width: 20px;
          height: 20px;
          border-radius: 10px;
          cursor: pointer;
        }

        &:last-of-type {
          background-color: ${colors.lightGreenTransparent};
          width: 20px;
          height: 20px;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

const MainCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 25px;
`;

const CartPhase = styled.div`
  display: flex;
`;

const PhaseImage = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.darkGreen};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  top: 0px;
  z-index: 2;

  &:hover {
    top: -10px;
  }
`;
const PhaseCover = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 10px;
  margin: 5px;
  background-color: ${colors.darkGreen};
  z-index: 1;
`;

const PhaseText = styled.div`
  text-align: center;
  cursor: pointer;
  color: ${colors.white};
`;
