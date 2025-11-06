import Head from 'next/head';
import Script from 'next/script';
import Home from '@/pages/Index';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>MerchantHaus – Modern Payment Infrastructure</title>
        <meta
          name="description"
          content="MerchantHaus delivers agile payment solutions, from in-store POS to e-commerce and mobile experiences, built to scale revenue and security."
        />
        <link rel="canonical" href="https://merchanthaus.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MerchantHaus – Modern Payment Infrastructure" />
        <meta
          property="og:description"
          content="Modernize payments with MerchantHaus platforms covering retail, digital, and hybrid commerce channels."
        />
        <meta property="og:url" content="https://merchanthaus.io/" />
      </Head>
      <Script id="merchant-haus-org" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'MerchantHaus',
          url: 'https://merchanthaus.io/',
          logo: 'https://merchanthaus.io/redshield.webp',
          sameAs: ['https://www.linkedin.com/company/merchanthaus/'],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              telephone: '+1-505-600-6042',
              email: 'support@merchanthaus.io'
            }
          ]
        })}
      </Script>
      <Home />
    </>
  );
}
