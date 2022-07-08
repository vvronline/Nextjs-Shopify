import React from 'react';

export default function Footer() {
  return (
    <div
      style={{
        boxShadow: ' 0 0 4px  grey',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'black',
      }}
    >
      <div style={{ margin: 40, color: 'white' }}>
        Contact <br />
        Email :
        <a href="mailto:askclassystore@gmail.com"> askclassystore@gmail.com</a>
        <br />
        Phone : <a href="callto:+91000000000">+91000000000</a>
        <div style={{ textAlign: 'right', marginTop: -40 }}>
          <a>Terms & conditions</a>
          <br />
          <a>Privacy Policy</a>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 20,
          color: 'white',
        }}
      >
        © 2022. Classy Store Powered by Shopify
      </div>
    </div>
  );
}
