import React from 'react';
import { Card, Image, Header, Icon, Button } from 'semantic-ui-react';
import { client } from '../utils/shopify';
import Link from 'next/link';

export default function Collection({ products }, { key }) {
  console.log('prod', products);

  const name = products[0].title;
  const collection = products[0].products.map((item) => {
    return item;
  });
  console.log('collection', collection);

  return (
    <>
      <h2 style={{ textAlign: 'center' }}> {name} Collections</h2>
      <Card.Group itemsPerRow={3}>
        {collection.map((e) => {
          const newId = e.id.slice(-13);
          console.log('newid', newId);

          return (
            <>
              <></>
              <Link href={`/product/${newId}`}>
                <Card>
                  <Image src={e.images[0].src} alt={e.title} />
                  <Card.Content>
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
    </>
  );
}

export async function getServerSideProps({ query }) {
  console.log('qry', query);
  // Fetch data from external API
  const products = await client.collection.fetchAllWithProducts();

  // Pass data to the page via props

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
