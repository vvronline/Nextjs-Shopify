import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import ProductPage from '../pages/product/[newId]';
import { client } from '../utils/shopify';
import { Dropdown, Menu, Search, Select } from 'semantic-ui-react';

import {
  Button,
  Container,
  Header,
  Image,
  Sidebar,
  Visibility,
  Segment,
  Input,
  Icon,
} from 'semantic-ui-react';

export default function Navbar({ collections }) {
  const [fixed, setFixed] = useState(false);
  const [text, setText] = useState('');

  const options = [
    { key: 1, text: 'Men', value: 1, href: '/CollectionMen' },
    { key: 2, text: 'Women', value: 2, href: '/CollectionWomen' },
  ];

  const footwear = [
    { key: 1, text: 'Shoes', value: 1, href: '/categories/footwear/Shoes' },
    {
      key: 2,
      text: 'Sandals & Flipflops',
      value: 2,
      href: '/categories/footwear/Sandals',
    },
  ];

  const searchProduct = (e) => {
    setText(e.target.value);
  };

  return (
    <Visibility once={false}>
      <Segment
        inverted
        textAlign="center"
        style={{ padding: '1em 2em', minHeight: 50 }}
      >
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size={'medium'}
        >
          <Container>
            <Link href="/">
              <Menu.Item>
                <h3>Classy Store</h3>
              </Menu.Item>
            </Link>

            <Menu.Item>
              <Dropdown text="Clothes" options={options} simple />
            </Menu.Item>
            <Menu.Item>
              <Dropdown text="Footwear" options={footwear} simple />
            </Menu.Item>
            {/* <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                onChange={searchProduct}
              />
            </Menu.Item> */}
            <Menu.Item position="right">
              <Button
                color="black"
                onClick={() => {
                  const storage = window.localStorage;
                  const cart = JSON.parse(storage.getItem('cart'));
                  // console.log('cart', cart);
                  Router.replace(cart.webUrl);
                }}
              >
                <Icon name="shopping cart"></Icon>
                Cart
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
}
