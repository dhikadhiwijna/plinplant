import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import anggrek from "../../../assets/Plant/anggrek-mature.jpg";

const EnsiklopediaById = () => {
  const router = useRouter();
  console.log("router", router.query);

  return (
    <div>
      <div>
        <Image src={anggrek} alt="img" />
        {/* {router.query} */}

        <div>
          <h1>{router.query.id}</h1>
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
            quidem debitis iusto repudiandae architecto magni obcaecati deleniti
            impedit qui adipisci consequatur ipsum sapiente, non, quod, nesciunt
            quis. Facilis, in error.
          </p>

          <h3>Kegunaan</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            sapiente sit temporibus ad laborum deleniti atque ea voluptas.
            Dolorum, iusto!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnsiklopediaById;

export const getServerSideProps = (context: any) => {
  console.log("context", context);

  return {
    props: {},
  };
};
