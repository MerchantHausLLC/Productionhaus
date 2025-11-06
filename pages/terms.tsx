import Head from 'next/head';
import Terms from '@/pages/Terms';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions – MerchantHaus</title>
        <meta
          name="description"
          content="Review MerchantHaus terms and conditions covering services, responsibilities, and compliance commitments."
        />
        <link rel="canonical" href="https://merchanthaus.io/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms &amp; Conditions – MerchantHaus" />
        <meta
          property="og:description"
          content="Understand the policies that govern MerchantHaus products and services."
        />
        <meta property="og:url" content="https://merchanthaus.io/terms" />
      </Head>
      <Terms />
    </>
  );
}
