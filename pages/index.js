import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import Router from 'next/router';
import Carousal from '../components/Carousal';
import YouTube from 'react-youtube';
import { client } from '../utils/shopify';
import BrandInfo from '../components/BrandInfo';
import { Card, Image, Header, Icon } from 'semantic-ui-react';

export default function Home({ products }) {
  console.log('first', products);
  const name = products[2].title;
  const collection = products[2].products.map((item) => {
    return item;
  });
  console.log('collection', collection);
  const opts = {
    height: '490',
    width: 900,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div style={{ margin: 20 }}>
      <Carousal />
      <BrandInfo />
      <div style={{ margin: 40 }}>
        <h2 style={{ textAlign: 'center', margin: '50px' }}> {name}</h2>
        <Card.Group itemsPerRow={4}>
          {collection.map((e) => {
            const newId = e.id.slice(-13);

            console.log('newid', e);

            return (
              <>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {' '}
        <Button color="blue" onClick={() => Router.push('./AllProducts')}>
          View All
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 50,
        }}
      >
        <YouTube videoId="GtDPjlUToKU" opts={opts} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const products = await client.collection.fetchAllWithProducts();

  // Pass data to the page via props

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
