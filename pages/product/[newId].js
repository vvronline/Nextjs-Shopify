import React, { useState } from 'react';
import { Grid, Image, List, Input, Header } from 'semantic-ui-react';
import { client } from '../../utils/shopify';

const { Row, Column } = Grid;
export default function ProductPage({ product }) {
  const [image, setImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(0);
  const addToCart = async () => {
    const storage = window.localStorage;
    let checkoutId = storage.getItem('checkoutId');
    if (!checkoutId) {
      const checkout = await client.checkout.create();
      checkoutId = checkout.id;
      storage.setItem('checkoutId', checkoutId);
    }
    const cart = await client.checkout.addLineItems(checkoutId, [
      {
        variantId: product.variants[0].id,
        quantity,
      },
    ]);
    storage.setItem('cart', JSON.stringify(cart));
  };
  console.log(product);
  return (
    <Grid container centered style={{ marginTop: 20 }}>
      <Row columns={2}>
        <Column width={6}>
          <Row>
            <Image src={image.src} />
          </Row>
          <Row>
            <List horizontal divided>
              {product.images.map((image) => {
                return (
                  <List.Item key={image.id} onClick={() => setImage(image)}>
                    <Image size={'small'} src={image.src} />
                  </List.Item>
                );
              })}
            </List>
          </Row>
        </Column>
        <Column style={{ marginTop: 50 }} width={6}>
          <Header>
            <h2>{product.title}</h2>
          </Header>
          <Header> Price : {product.variants[0].price}</Header>
          <Header> Size : {product.variants[0].title}</Header>
          <Header> Quantity : {quantity}</Header>
          <Header>Descscription </Header> <p>{product.description}</p>
          <Input
            action={{
              color: 'yellow',
              labelPosition: 'left',
              icon: 'cart',
              content: 'ADD TO CART',
              onClick: addToCart,
            }}
            min="0"
            onChange={(e, { value }) => setQuantity(Number(value))}
            type="number"
            actionPosition="left"
            placeholder="Quantity"
            defaultValue="0"
          />
        </Column>
      </Row>
    </Grid>
  );
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  console.log(query);
  const newquery = 'gid://shopify/Product/' + query.newId;
  console.log(newquery);
  const product = await client.product.fetch(newquery);

  // Pass data to the page via props

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}
