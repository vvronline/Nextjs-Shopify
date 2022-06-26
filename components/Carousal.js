import React from 'react';
import { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Button, Image } from 'semantic-ui-react';
import Link from 'next/link';

export default function Carousal() {
  return (
    <div>

      <Carousel autoPlay interval={2500} infiniteLoop autoFocus>
        <>
          <Image src="https://sslimages.shoppersstop.com/sys-master/root/ha4/h7f/27639412817950/web_men_summer-styles_main-carousel_20220526.jpg" />
        </>
        <>
          <Image src="https://sslimages.shoppersstop.com/sys-master/root/hdb/hc9/27368983822366/web_wom_indya_main-carousel_20220405.jpg" />
        </>
        <>
          <Image src="https://sslimages.shoppersstop.com/sys-master/root/h72/h89/27639412555806/web_men_world-of-white_main-carousel_20220526.jpg" />
        </>
        <>
          <Image src="https://sslimages.shoppersstop.com/sys-master/root/hbd/hf6/27649890811934/web_men_athleisure_main-carousel_20220530.jpg" />
        </>
        <>
          <Image src="https://sslimages.shoppersstop.com/sys-master/root/h37/h85/27487190155294/Top-Carousal-womens-page-revised-bnner-26aril22Zink-London-Web.jpg" />
        </>

      </Carousel>


    </div>
  );
}
