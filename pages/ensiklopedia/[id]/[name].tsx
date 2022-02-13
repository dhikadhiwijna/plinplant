import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import anggrek from "../../../assets/Plant/anggrek-mature.jpg";
import { benih, plant, time } from "../../../assets/svg";
import Container from "../../../component/Container";
import colors from "../../../styles/colors";
import * as H from "../../../component/Ensiklopedia/Header.style";
import * as M from "../../../component/Ensiklopedia/Main.style";
import CTAEnsiklopedia from "../../../component/Ensiklopedia/CTAEnsiklopedia/CTAEnsiklopedia";
import Footer from "../../../component/Footer/Footer";

const EnsiklopediaById = () => {
  const router = useRouter();
  console.log("router", router.query);

  return (
    <>
      <H.BgContainer>
        <H.ContainerWrapper>
          <div className="image">
            <Image
              src={anggrek}
              alt="img"
              width={600}
              height={400}
              objectFit="cover"
              layout="fixed"
            />
          </div>

          <H.Typography>
            <h1>{router.query.name}</h1>

            <h3>Asal Tanaman</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              libero. Atque, odit minima ex ad eligendi nisi nesciunt quia
              perspiciatis aliquid quisquam rem autem, animi, non fuga mollitia
              assumenda rerum.
            </p>

            <h3>Kualitas</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              quidem debitis iusto repudiandae architecto magni obcaecati
              deleniti impedit qui adipisci consequatur ipsum sapiente, non,
              quod, nesciunt quis. Facilis, in error.
            </p>

            <h3>Kegunaan</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              sapiente sit temporibus ad laborum deleniti atque ea voluptas.
              Dolorum, iusto!
            </p>
          </H.Typography>
        </H.ContainerWrapper>
      </H.BgContainer>
      <H.BoxWrapper>
        <H.Box>
          <Image src={benih} width={70} height={70} alt="svg" />
          <h4>WAKTU TUMBUH</h4>
          <h4>14 HARI</h4>
        </H.Box>
        <H.Box>
          <Image src={plant} width={70} height={70} alt="svg" />
          <h4>DEWASA DALAM</h4>
          <h4>14 HARI</h4>
        </H.Box>
        <H.Box>
          <Image src={time} width={70} height={70} alt="svg" />
          <h4>TIPE PERTUMBUHAN</h4>
          <h4>14 HARI</h4>
        </H.Box>
      </H.BoxWrapper>

      <M.ContainerWrapper>
        <h1>Plant Breeding</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor eius
          placeat! Tenetur labore mollitia voluptas natus omnis blanditiis vel.
        </p>

        <M.BoxContainer>
          <li>
            <div />
            <h3>Juvenile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
              architecto reprehenderit unde voluptates nemo nam commodi quis.
              Fuga, quidem?
            </p>
          </li>

          <li>
            <div />
          </li>

          <li>
            <Image
              src={anggrek}
              alt="juvenile"
              width={300}
              height={200}
              objectFit="cover"
            />
          </li>
        </M.BoxContainer>

        <M.BoxContainerRight>
          <li>
            <Image
              src={anggrek}
              alt="juvenile"
              width={300}
              height={200}
              objectFit="cover"
            />
          </li>
          <li>
            <div />
          </li>
          <li>
            <div />
            <h3>Juvenile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
              architecto reprehenderit unde voluptates nemo nam commodi quis.
              Fuga, quidem?
            </p>
          </li>
        </M.BoxContainerRight>

        <M.BoxContainer>
          <li>
            <div />
            <h3>Juvenile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
              architecto reprehenderit unde voluptates nemo nam commodi quis.
              Fuga, quidem?
            </p>
          </li>

          <li>
            <div />
          </li>

          <li>
            <Image
              src={anggrek}
              alt="juvenile"
              width={300}
              height={200}
              objectFit="cover"
            />
          </li>
        </M.BoxContainer>

        <M.BoxContainerRight>
          <li>
            <Image
              src={anggrek}
              alt="juvenile"
              width={300}
              height={200}
              objectFit="cover"
            />
          </li>
          <li>
            <div />
          </li>
          <li>
            <div />
            <h3>Juvenile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
              architecto reprehenderit unde voluptates nemo nam commodi quis.
              Fuga, quidem?
            </p>
          </li>
        </M.BoxContainerRight>
      </M.ContainerWrapper>

      <CTAEnsiklopedia />

      <Footer color={colors.green} textColor={colors.white} />
    </>
  );
};

export default EnsiklopediaById;

export const getServerSideProps = (context: any) => {
  console.log("context", context);

  return {
    props: {},
  };
};
