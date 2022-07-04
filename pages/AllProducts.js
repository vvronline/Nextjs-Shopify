import Head from 'next/head';

import { client } from '../utils/shopify';

import Link from 'next/link';
import { Card, Header, Image, Button, Icon } from 'semantic-ui-react';

export default function Landing({ products }) {
  return (
    <div>
      <>
        <br />{' '}
      </>
      <Head>
        <title>Classy Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <></>
      <Card.Group itemsPerRow={3} height={300}>
        {products.map((product) => {
          // console.log(products);
          product.newId = product.id.slice(-13);
          // console.log("id", product.newId)

          return (
            <>
              <Link key={product.id} href={`/product/${product.newId}`}>
                <Card>
                  <Image src={product.images[0].src} alt={product.title} />
                  <Card.Content>
                    <Header floated="right">
                      <Button animated="fade">
                        <Button.Content visible>Buy Now</Button.Content>
                        <Button.Content hidden>
                          <Icon name="rupee" />
                          {product.variants[0].price}
                        </Button.Content>
                      </Button>
                    </Header>

                    <Header floated="left">{product.title}</Header>
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
  const products = await client.product.fetchAll();

  // Pass data to the page via props

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
