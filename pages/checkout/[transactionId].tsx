import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { warn } from "../../assets/svg";
import Button from "../../component/Button";
import Container from "../../component/Container";
import { cartItems } from "../../data/dummyData";
import colors from "../../styles/colors";

const Transaction = () => {
  return (
    <ColorContainer>
      <ContainerWrapper>
        <h1>Checkout</h1>
        <div>
          <div>
            <AddressContainer>
              <h2>Alamat Pengiriman</h2>
              <div>
                <div>
                  <div>
                    <h5>Fajar</h5>
                    <h6>087787111616</h6>
                  </div>
                  <h5>
                    Komplek PLN P3B Jl.JCC No.24, Gandul, Depok, Jawa Barat,
                    Indonesia, 12440
                  </h5>
                </div>
                <div style={{ minWidth: "180px" }}>
                  <Button
                    color={colors.white}
                    bgColor={colors.lightGreenTransparent}
                    border={colors.lightGreenTransparent}
                  >
                    Pilih Alamat Lain
                  </Button>
                </div>
              </div>
            </AddressContainer>
            <BottomWrapper>
              <div>
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
                        <h6>{data.quantity} barang (500 gram)</h6>
                      </div>
                    </div>
                    <div>
                      <p>{data.price}</p>
                    </div>
                  </CartWrapper>
                ))}
              </div>
              <InformationContainer>
                <h4>Pilih Pembayaran</h4>
                <Button color={colors.white} bgColor={colors.yellow} Signup>
                  {/* <h5>Bank Tujuan</h5> */}
                  Bank Tujuan
                </Button>
                <div>
                  <div>
                    <Image src={warn} alt="warn" width={30} height={30} />
                  </div>
                  <h6>
                    Pembayaran diatas pukul 14.00 berpotensi dikirim hari
                    berikutnya
                  </h6>
                </div>

                <div>
                  <div>
                    <Image src={warn} alt="warn" width={30} height={30} />
                  </div>
                  <h6>
                    Berat barang (-1 kg) dikenakan biaya ongkos kirim sebesar
                    Rp. 10.000. Berlaku kelipatan.
                  </h6>
                </div>
              </InformationContainer>
            </BottomWrapper>
          </div>
          <SummaryContainer>
            <h3>Ringkasan Belanja</h3>
            <div>
              <div>
                <h4>Total Harga</h4>
                <h5>5 Barang</h5>
              </div>
              <h4>Rp.400.000</h4>
            </div>
            <div>
              <div>
                <h4>Total Ongkos Kirim</h4>
                <h5>JKT - BDG</h5>
              </div>
              <h4>Rp.15.000</h4>
            </div>
            <div>
              <h3>Total Tagihan</h3>
              <h3>Rp. 415.000</h3>
            </div>
            <div>
              <Button
                color={colors.white}
                bgColor={colors.yellow}
                border={colors.yellow}
                Cart
              >
                <h3 style={{ fontWeight: "bold", color: colors.white }}>
                  Proses
                </h3>
              </Button>
            </div>
          </SummaryContainer>
        </div>
      </ContainerWrapper>
    </ColorContainer>
  );
};

export default Transaction;

const ColorContainer = styled.div`
  background-color: ${colors.green};
  height: 100%;
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
  /* width: fit-content;
  height: fit-content; */
  margin: 30px 0;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

const InformationContainer = styled.div`
  width: 270px;
  margin-left: 10px;
  /* width: 280px; */

  & > h4 {
    color: ${colors.white};
    margin: 10px 0;
  }

  & > div {
    background-color: rgba(250, 77, 77, 0.3);
    position: relative;
    margin: 10px 0;
    overflow: hidden;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;

    & > h6 {
      text-align: center;
      color: ${colors.white};
      z-index: 2;
    }

    & > div {
      position: absolute;
      top: -5px;
      left: -5px;
    }
  }
`;

const CartWrapper = styled.div`
  background-color: ${colors.lightGreenTransparent};
  border-radius: 15px;
  min-width: 400px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
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
`;

const AddressContainer = styled.div`
  background-color: ${colors.darkGreen};
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  & > h2 {
    color: ${colors.white};
    margin-bottom: 10px;
  }

  & > div {
    border-top: 1px solid ${colors.lightGreen};
    padding-top: 10px;

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
      & > div {
        display: flex;
        margin-bottom: 10px;

        & > h5 {
          color: ${colors.white};
          margin-right: 10px;
        }
        & > h6 {
          color: ${colors.white};
          text-align: center;
          border-radius: 5px;
          padding: 3px;
          background-color: ${colors.lightGreenTransparent};
        }
      }

      & > h5 {
        color: ${colors.white};
        width: 80%;
        line-height: 25px;
        margin: 10px 0;
      }
    }
  }
`;

const SummaryContainer = styled.div`
  background-color: ${colors.darkGreen};
  min-width: 300px;
  height: 100%;
  border-radius: 15px;
  padding: 20px;
  margin-left: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  & > h3 {
    color: ${colors.white};
    margin-bottom: 15px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    & > h4 {
      color: ${colors.white};
    }
    & > div {
      margin-bottom: 10px;
      & > h4 {
        color: ${colors.white};
      }
      & > h5 {
        color: ${colors.white};
        margin: 5px 0;
        padding: 5px;
        font-weight: 300;
        background-color: ${colors.lightGreenTransparent};
        border-radius: 5px;
        margin-bottom: 5px;
        text-align: center;
        font-weight: lighter;
        width: fit-content;
      }
    }
  }

  & > div:nth-of-type(3) {
    display: flex;
    padding: 20px 0;
    border-top: 1px solid ${colors.lightGreenTransparent};

    & > h3 {
      color: ${colors.white};
    }
  }
`;
