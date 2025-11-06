import Head from 'next/head';
import ComingSoon from '@/pages/ComingSoon';

export default function DeveloperGuidesPage() {
  return (
    <>
      <Head>
        <title>Developer Guides – MerchantHaus</title>
        <meta
          name="description"
          content="MerchantHaus developer resources are coming soon. Get notified when integration guides, API references, and tooling are released."
        />
        <link rel="canonical" href="https://merchanthaus.io/developer-guides" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Developer Guides – MerchantHaus" />
        <meta
          property="og:description"
          content="Sign up to learn when MerchantHaus publishes developer guides and API documentation."
        />
        <meta property="og:url" content="https://merchanthaus.io/developer-guides" />
      </Head>
      <ComingSoon />
    </>
  );
}
