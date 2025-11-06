import Head from 'next/head';
import Apply from '@/pages/Apply';

export default function ApplyPage() {
  return (
    <>
      <Head>
        <title>Apply – Partner with MerchantHaus</title>
        <meta
          name="description"
          content="Start your MerchantHaus partnership. Apply to access flexible payment processing, onboarding support, and tailored merchant programs."
        />
        <link rel="canonical" href="https://merchanthaus.io/apply" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apply – MerchantHaus" />
        <meta
          property="og:description"
          content="Submit your application to join MerchantHaus and unlock scalable payment experiences."
        />
        <meta property="og:url" content="https://merchanthaus.io/apply" />
      </Head>
      <Apply />
    </>
  );
}
