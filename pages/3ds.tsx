import Head from 'next/head';
import ThreeDS from '@/pages/ThreeDS';

export default function ThreeDSPage() {
  return (
    <>
      <Head>
        <title>3DS Authentication – MerchantHaus Shield</title>
        <meta
          name="description"
          content="Strengthen customer authentication with MerchantHaus Shield 3DS services designed for fraud prevention and seamless checkout."
        />
        <link rel="canonical" href="https://merchanthaus.io/3ds" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3DS Authentication – MerchantHaus" />
        <meta
          property="og:description"
          content="Deliver secure, customer-friendly 3-D Secure authentication backed by MerchantHaus experts."
        />
        <meta property="og:url" content="https://merchanthaus.io/3ds" />
      </Head>
      <ThreeDS />
    </>
  );
}
