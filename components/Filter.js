import React from 'react';
import Link from 'next/dist/client/link';

export default function Filter() {
  return (
    <div>
      <h3>Filter Products</h3>
      <h4>
        <Link href="/CollectionMen">Men</Link>
      </h4>
      <h4>
        <Link href="/CollectionWomen">Women</Link>
      </h4>
    </div>
  );
}
