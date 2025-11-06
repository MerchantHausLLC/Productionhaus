import Head from 'next/head';
import Privacy from '@/pages/Privacy';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy – MerchantHaus</title>
        <meta
          name="description"
          content="Learn how MerchantHaus collects, uses, and protects personal information across our payment solutions."
        />
        <link rel="canonical" href="https://merchanthaus.io/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy – MerchantHaus" />
        <meta
          property="og:description"
          content="Understand MerchantHaus privacy practices for merchants and customers."
        />
        <meta property="og:url" content="https://merchanthaus.io/privacy" />
      </Head>
      <Privacy />
    </>
  );
}
