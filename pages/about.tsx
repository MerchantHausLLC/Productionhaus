import Head from 'next/head';
import About from '@/pages/AboutPage';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About MerchantHaus – Trusted Payment Experts</title>
        <meta
          name="description"
          content="Learn about MerchantHaus, our mission to modernize payment processing, and the team delivering secure, data-driven commerce experiences."
        />
        <link rel="canonical" href="https://merchanthaus.io/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About MerchantHaus" />
        <meta
          property="og:description"
          content="Discover the MerchantHaus story and how we partner with merchants to build resilient payment infrastructure."
        />
        <meta property="og:url" content="https://merchanthaus.io/about" />
      </Head>
      <About />
    </>
  );
}
