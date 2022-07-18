import React from "react";
import "semantic-ui-css/semantic.min.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import ProductPage from "../pages/product/[newId]";
import { client } from "../utils/shopify";
import { Dropdown, Menu, Search, Select } from "semantic-ui-react";
import AboutUs from "./AboutUs";

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
} from "semantic-ui-react";

export default function Navbar({ collections }) {
  const [fixed, setFixed] = useState(false);
  const [text, setText] = useState("");

  const options = [
    { key: 1, text: "Topwear", value: 1, href: "#" },
    { key: 2, text: "Bottomwear", value: 2, href: "#" },
    { key: 3, text: "Footwear", value: 3, href: "#" },
  ];

  const footwear = [
    { key: 1, text: "Shoes", value: 1, href: "/categories/footwear/Shoes" },
    {
      key: 2,
      text: "Sandals & Flipflops",
      value: 2,
      href: "/categories/footwear/Sandals",
    },
  ];

  const about = [
    { key: 1, text: "About Us", value: 1, href: "/about" },
    { key: 2, text: "FAQs", value: 2, href: "/faq" },
  ];

  const searchProduct = (e) => {
    setText(e.target.value);
  };

  console.log("abcd", client);
  return (
    <Visibility once={false}>
      <Segment
        inverted
        textAlign="center"
        style={{ padding: "1em 2em", minHeight: 50 }}
      >
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size={"medium"}
        >
          <Container>
            <Link href="/">
              <Menu.Item>
                <h3>Classy Store</h3>
              </Menu.Item>
            </Link>

            <Menu.Item>
              <Dropdown text="Men" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Dropdown text="Topwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Shirts" />
                        <Dropdown.Item text="T-Shirts" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Bottomwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Jeans" />
                        <Dropdown.Item text="Trousers" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Footwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Shoes" />
                        <Dropdown.Item text="Slips" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text="Women" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Dropdown text="Topwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Shirts" />
                        <Dropdown.Item text="T-Shirts" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Bottomwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Jeans" />
                        <Dropdown.Item text="Skirts" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Footwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Shoes" />
                        <Dropdown.Item text="Sandals" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item>
              <Dropdown text="Kids" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Dropdown text="Topwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Boy" />
                        <Dropdown.Item text="Girl" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Bottomwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Boy" />
                        <Dropdown.Item text="Girl" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Footwear">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Boy" />
                        <Dropdown.Item text="Girl" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text="About" options={about} simple />
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
                  const cart = JSON.parse(storage.getItem("cart"));
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
