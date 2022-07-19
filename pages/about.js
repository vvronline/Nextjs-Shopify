import React, { useEffect } from "react";
import Link from "next/link";
import AboutUs from "../components/AboutUs"

import { client } from "../utils/shopify";
import { Card, Image, Header, Icon, Button } from "semantic-ui-react";
export default function About() {
  return (
    <>
      <AboutUs />
    </>
  );
}
