import Head from 'next/head';
import Services from '@/pages/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services – MerchantHaus Payment Solutions</title>
        <meta
          name="description"
          content="Explore MerchantHaus services including POS systems, e-commerce integrations, mobile payments, and analytics tailored for modern merchants."
        />
        <link rel="canonical" href="https://merchanthaus.io/services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services – MerchantHaus" />
        <meta
          property="og:description"
          content="Comprehensive payment technology services for retail, omnichannel, and digital-first businesses."
        />
        <meta property="og:url" content="https://merchanthaus.io/services" />
      </Head>
      <Services />
    </>
  );
}
