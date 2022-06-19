import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../component/Button";
import Container from "../../component/Container";
import { cartItems, transactions } from "../../data/dummyData";
import colors from "../../styles/colors";

const Cart = () => {
  const router = useRouter();
  return (
    <ColorContainer>
      <ContainerWrapper>
        <h1>Keranjang</h1>
        <div>
          <CartContainer>
            {cartItems.map((data, index) => (
              <CartWrapper key={index}>
                <div>
                  <div>
                    <Image
                      src={data.img}
                      alt={data.name}
                      width={100}
                      height={100}
                      objectFit="fill"
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <h4>{data.name}</h4>
                    <h5>{data.phase}</h5>
                  </div>
                </div>
                <div>
                  <p>{data.price}</p>
                  <div>
                    <button>-</button>
                    <p>{data.quantity}</p>
                    <button>+</button>
                  </div>
                  <FaRegTrashAlt className="trash" />
                </div>
              </CartWrapper>
            ))}
          </CartContainer>
          <SummaryContainer>
            <h3>Ringkasan Belanja</h3>
            <div>
              <h4>Total Barang</h4>
              <h4>5</h4>
            </div>
            <div>
              <h5>Juvenile Dewasa</h5>
              <h5>5 Barang</h5>
            </div>
            <div>
              <p>Total Harga</p>
              <p>Rp. 400.000</p>
            </div>
            <div>
              <Button
                color={colors.white}
                bgColor={colors.yellow}
                border={colors.yellow}
                Cart
                onClick={() => router.push("../checkout/1")}
              >
                <h3 style={{ fontWeight: "bold", color: colors.white }}>
                  Beli
                </h3>
              </Button>
            </div>
          </SummaryContainer>
        </div>
      </ContainerWrapper>
    </ColorContainer>
  );
};

export default Cart;

const ColorContainer = styled.div`
  background-color: ${colors.green};
  height: 100vh;
`;
const ContainerWrapper = styled(Container)`
  padding-top: 100px;

  & > h1 {
    margin-bottom: 30px;
    color: ${colors.white};
    font-weight: bold;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const CartContainer = styled.div`
  width: 800px;
  height: 100%;
`;

const CartWrapper = styled.div`
  background-color: ${colors.lightGreenTransparent};
  border-radius: 15px;
  max-width: 700px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  & > div {
    &:first-of-type {
      display: flex;
      align-items: center;

      & > div {
        &:first-of-type {
          width: 100;
          height: 100;
          overflow: hidden;
          display: flex;
          border-radius: 10px;
        }
        &:last-of-type {
          margin-left: 20px;

          & > h4 {
            color: ${colors.white};
          }
          & > h5 {
            color: ${colors.white};
            /* padding: 5px 0; */
            border-radius: 5px;
            background-color: ${colors.lightGreenTransparent};
            text-align: center;
          }
        }
      }
    }

    &:last-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 40vh;
      margin-right: 50px;

      & > .trash {
        fill: ${colors.white};
        cursor: pointer;
      }

      & > p {
        color: ${colors.white};
      }

      & > div {
        display: flex;
        justify-content: space-between;
        width: 100px;

        & > p {
          color: ${colors.white};
        }

        & > button {
          border: none;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background-color: ${colors.lightGreenTransparent};
          color: ${colors.white};
          cursor: pointer;
        }
      }
    }
  }
`;

const SummaryContainer = styled.div`
  background-color: ${colors.darkGreen};
  width: 300px;
  height: 100%;
  max-width: 400px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  & > h3 {
    color: ${colors.white};
    margin-bottom: 15px;
  }

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;

    & > h4 {
      color: ${colors.white};
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid ${colors.lightGreenTransparent};
    padding: 10px 0 20px 0;

    & > h5 {
      color: ${colors.white};
      margin: 5px 0;
      padding: 5px;

      &:nth-of-type(2) {
        font-weight: 300;
        background-color: ${colors.lightGreenTransparent};
        border-radius: 5px;
        margin-bottom: 5px;
      }
    }
  }

  & > div:nth-of-type(3) {
    display: flex;
    justify-content: space-between;

    & > p {
      color: ${colors.white};
      margin: 25px 0;
    }
  }
  & > div:nth-of-type(4) {
    display: flex;
  }
`;
