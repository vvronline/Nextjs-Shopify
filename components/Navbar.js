import React from "react";
import "semantic-ui-css/semantic.min.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import { client } from "../utils/shopify";
import { Dropdown, Menu, Search, Select } from "semantic-ui-react";

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
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("logInStatus");
    const storeItem = JSON.parse(data);
    setUserName(storeItem && storeItem.name);
  });

  const about = [
    { key: 1, text: "About Us", value: 1, href: "about" },
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
                        <Link href="/MenShirts">
                          <Dropdown.Item text="Shirts" />
                        </Link>
                        <Link href="/MenTshirts">
                          <Dropdown.Item text="T-Shirts" />
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Bottomwear">
                      <Dropdown.Menu>
                        <Link href="/MenJeans">
                          <Dropdown.Item text="Jeans" />
                        </Link>
                        <Link href="/MenTrousers">
                          <Dropdown.Item text="Trousers" />
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Footwear">
                      <Dropdown.Menu>
                        <Link href="/MenShoes">
                          <Dropdown.Item text="Shoes" />
                        </Link>
                        <Link href="MenSlips">
                          <Dropdown.Item text="Slips" />
                        </Link>
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
                        <Link href="/WomenShirts">
                          <Dropdown.Item text="Shirts" />
                        </Link>
                        <Link href="/WomenTshirts">
                          <Dropdown.Item text="T-Shirts" />
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Bottomwear">
                      <Dropdown.Menu>
                        <Link href="/WomenJeans">
                          <Dropdown.Item text="Jeans" />
                        </Link>
                        <Link href="/WomenSkirts">
                          <Dropdown.Item text="Skirts" />
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown text="Footwear">
                      <Dropdown.Menu>
                        <Link href="/WomenShoes">
                          <Dropdown.Item text="Shoes" />
                        </Link>
                        <Link href="/WomenSandals">
                          <Dropdown.Item text="Sandals" />
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item>
              <Dropdown text="Kids">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link href="/GirlKid">
                      <Dropdown text="Girl" />
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/BoyKid">
                      <Dropdown text="Boy" />
                    </Link>
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
              <Link href="/LogIn">
                <Icon
                  style={{ marginRight: "80px", cursor: "pointer" }}
                  name="user"
                >
                  <span style={{ paddingLeft: "10px", whiteSpace: "nowrap" }}>
                    {userName}
                  </span>
                </Icon>
              </Link>
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
