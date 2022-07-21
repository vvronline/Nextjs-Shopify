import React from "react";
import { Card, Image, Header, Button, Icon } from "semantic-ui-react";
import { client } from "../utils/shopify";
import Link from "next/link";
import Carousal from "../components/Carousal";

export default function WomenSandals({ products }, { key }) {
  const name = products[9].title;
  const collection = products[9].products.map((item) => {
    return item;
  });
  console.log("AboutUs1", products[7]);
  return (
    <div style={{ margin: 30, padding: 30 }}>
      <h2 style={{ textAlign: "center" }}> {name} Collections</h2>
      <Carousal />

      <Card.Group itemsPerRow={3}>
        {collection.map((e) => {
          const newId = e.id.slice(-13);
          console.log("newid", e);

          return (
            <>
              <></>
              <Link href={`/product/${newId}`}>
                <Card>
                  <Image src={e.images[0].src} alt={e.title} />
                  <Card.Content itemsPerRow={4}>
                    <Header floated="left">{e.title}</Header>
                    <Button animated="fade" floated="right">
                      <Button.Content visible>Buy Now</Button.Content>
                      <Button.Content hidden>
                        <Icon name="rupee" />
                        {e.variants[0].price}
                      </Button.Content>
                    </Button>
                  </Card.Content>
                </Card>
              </Link>
            </>
          );
        })}
      </Card.Group>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const products = await client.collection.fetchAllWithProducts();

  // Pass data to the page via props

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
