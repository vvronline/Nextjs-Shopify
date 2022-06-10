import Client from 'shopify-buy';
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'vvronline.myshopify.com',
  storefrontAccessToken: '1635700284d7b4d352007707069472f8',
});

export { client };
