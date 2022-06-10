import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import ProductPage from '../pages/product/[newId]';

import {
  Button,
  Container,
  Header,
  Menu,
  Image,
  Sidebar,
  Visibility,
  Segment,
  Icon,
} from 'semantic-ui-react';

export default function Navbar() {
  const [fixed, setFixed] = useState(false);

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
            <Link href="/about">
              <Menu.Item>About Us</Menu.Item>
            </Link>

            <Link href="/contact">
              <Menu.Item>Contact</Menu.Item>
            </Link>

            <Menu.Item position="right">
              <Button
                onClick={() => {
                  const storage = window.localStorage;
                  const cart = JSON.parse(storage.getItem('cart'));
                  Router.replace(cart.webUrl);
                }}
              >
                <Icon name="shopping cart"></Icon>Cart
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
