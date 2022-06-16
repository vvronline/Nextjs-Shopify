import React from 'react'
import { Card, Image, Header, Button, Icon } from 'semantic-ui-react';
import { client } from '../utils/shopify';
import Link from 'next/link';


export default function Collection({ products }, { key }) {
    // console.log("prod", products)
    const name = products[1].title
    const collection = products[1].products.map(item => { return item })
    console.log("collection", collection)



    return (

        <>
            <h2> {name} Collections</h2>
            <Card.Group itemsPerRow={4}>

                {collection.map(e => {

                    const newId = e.id.slice(-13)
                    console.log("newid", e)

                    return (
                        <>
                            <></>
                            <Link href={`/product/${newId}`}>
                                <Card>
                                    <Image src={e.images[0].src} alt={e.title} />
                                    <Card.Content itemsPerRow={4}>
                                        <Header floated="left">{e.title}</Header>
                                        <Button animated="fade" floated="right">
                                            <Button.Content visible>Buy Now</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="rupee" />
                                                {e.variants[0].price}
                                            </Button.Content>
                                        </Button>

                                    </Card.Content>

                                </Card>
                            </Link>

                        </>
                    )
                })}
            </Card.Group>
        </>

    )

}


export async function getServerSideProps() {
    // Fetch data from external API
    const products = await client.collection.fetchAllWithProducts()

    // Pass data to the page via props

    return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
