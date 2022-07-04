import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import ProductPage from '../pages/product/[newId]';
import { client } from '../utils/shopify';
import { Dropdown, Menu, Select } from 'semantic-ui-react';

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
  const [value, setValue] = useState([]);

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
                <h2>Classy Store</h2>
              </Menu.Item>
            </Link>

            <Link href="/CollectionMen" key={1}>
              <Menu.Item>
                <h4>Men</h4>
              </Menu.Item>
            </Link>
            <Link href="/CollectionWomen">
              <Menu.Item>
                <h4>Women</h4>
              </Menu.Item>
            </Link>

            <Menu.Item position="right">
              {' '}
              <Input inverted placeholder="Search..." icon="search" />
            </Menu.Item>

            <Menu.Item position="right">
              <Button
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
            <Menu.Item>
              <Icon name="user circle" size="large" />
              Login
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
}
