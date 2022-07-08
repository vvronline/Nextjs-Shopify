import React, { useState } from 'react';
import {
  Grid,
  Image,
  List,
  Input,
  Header,
  Icon,
  Button,
} from 'semantic-ui-react';
import { client } from '../../utils/shopify';
import { Rating } from 'semantic-ui-react';

const { Row, Column } = Grid;
export default function ProductPage({ product }) {
  const [image, setImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(0);
  const [text, setText] = useState('');
  const [review, setReview] = useState([]);
  console.log('review', review);
  // Cart
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
  const AddReview = () => {
    <p> {setReview([...review, text])}</p>;
  };
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
          <h3>
            Price : <Icon name="rupee" size="small" />
            {product.variants[0].price}
          </h3>
          <Header> Size : {product.variants[0].title}</Header>
          <Header> Quantity : {quantity}</Header>
          <Header>Descscription </Header> <p>{product.description}</p>
          <Input
            style={{ width: 70 }}
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
            placeholder="Qty"
            defaultValue="0"
          />
          <Row style={{ marginTop: 50 }}>
            <h3>Rating & Reviews</h3>
            <Rating icon="star" defaultRating={0} maxRating={5} />
            <br></br>
            <br></br>
            <p>
              {review.map((e) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{e}</p>;
              })}
            </p>
            <br></br>
            <Input
              focus
              placeholder="Review..."
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={AddReview}>Add Review</Button>
          </Row>
        </Column>
      </Row>
    </Grid>
  );
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API

  const newquery = 'gid://shopify/Product/' + query.newId;
  console.log(newquery);
  const product = await client.product.fetch(newquery);

  // Pass data to the page via props

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}
