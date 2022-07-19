import React, { useEffect } from "react";
import { client } from "../utils/shopify";

export default function AboutUs() {
  // const fetchPage = async () => {
  //   const page = await fetch(
  //     "https://vvronline.myshopify.com/admin/pages/89850740908.json",
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-Shopify-Access-Token": "1635700284d7b4d352007707069472f8",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       // credentials: "same-origin",
  //     }
  //   );

  //   // const pages = await client.pages;

  //   console.log("Data from external - ", page);
  // };

  // useEffect(() => {
  //   fetchPage();
  // }, []);

  return (
    <div style={{ margin: "0 260px", padding: "60px 40px" }}>
      <p
        style={{
          margin: "40px p",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
        }}
      >
        About US
      </p>
      <h2 style={{ margin: "35px 0", fontSize: "35px", fontWeight: "700px" }}>
        Who are we?
      </h2>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        }}
      >
        Like a breath of fresh ocean air, we were born from the desire to create
        a chilled living space that promotes positive energy. The exhilarating
        feeling of looking out into the wide-open ocean, listening to the sound
        of the waves rolling in on the shore, smelling salt in the air. Every
        wave that washes up and dissolves is like your every worry being carried
        away.{" "}
      </p>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        }}
      >
        {" "}
        Our business style was based around this incredible sense of freedom &
        relaxation. The ultimate dream of being on the beach all day. Surfing,
        wandering as the sun warms your skin. A place for family & friends to
        connect like when you're on holidays by the seaside - every single day.
        A home that emphasizes your creative ability.
      </p>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        }}
      >
        {" "}
        Established in 2017 in Gold Coast, a proudly owned Australian family
        business. Our vibrant team brings over 50 years of manufacturing &
        importing expertise to our latest brand. With a fresh, new approach
        inspired by nature, our products encapsulate the pure beauty of our
        beachside community.
      </p>
      <h2 style={{ margin: "35px 0", fontSize: "35px", fontWeight: "700px" }}>
        Our Mission
      </h2>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        }}
      >
        Our mission is to turn shopping for quality products upside down. From
        start to finish, we make sure you are comfortable and simplify your
        customer journey, you will feel the difference.
      </p>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        }}
      >
        We respect individuality. we are about creating an edge that allows you
        to stamp your own identity. We are dedicated to providing a fun &
        effortless shopping experience to turn your house into a home.
      </p>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "27px",
        }}
      >
        Home is where your heart is, and that's with ClassyStore.
      </p>
    </div>
  );
}

// export default AboutUs;
