import Head from 'next/head';
import Quote from '@/pages/Quote';

export default function QuotePage() {
  return (
    <>
      <Head>
        <title>Request a Quote – MerchantHaus</title>
        <meta
          name="description"
          content="Request a customized MerchantHaus quote for payment processing, POS, and integrated commerce solutions tailored to your business."
        />
        <link rel="canonical" href="https://merchanthaus.io/quote" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Request a Quote – MerchantHaus" />
        <meta
          property="og:description"
          content="Get pricing guidance for MerchantHaus payment platforms and services."
        />
        <meta property="og:url" content="https://merchanthaus.io/quote" />
      </Head>
      <Quote />
    </>
  );
}
