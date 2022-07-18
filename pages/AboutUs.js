import React, { useEffect } from 'react';
import Link from 'next/link';

import { client } from '../utils/shopify';
import { Card, Image, Header, Icon, Button } from 'semantic-ui-react';
export default function About({ products }) {
  const name = products[11].title;
  const details = products[11].description;
  const collection = products[11].products.map((item) => {
    return item;
  });

  console.log('AboutUs1', products);
  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: 30 }}>{name}</h1>
      <Card.Group>
        {collection.map((e) => {
          const newId = e.id.slice(-13);
          // console.log('newid', newId);

          return (
            <>
              <></>

              <Image src={e.images[0].src} alt={e.title} centered />
              <div
                style={{
                  padding: 30,
                }}
              >
                <h2 style={{ textAlign: 'center', padding: 20 }}>
                  Our Mission
                </h2>
                <div style={{}}>{details}</div>
              </div>
            </>
          );
        })}
      </Card.Group>
    </div>
  );
}

export async function getServerSideProps() {
  // console.log('qry', query);
  // Fetch data from external API
  const products = await client.collection.fetchAllWithProducts();

  // Pass data to the page via props

  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
