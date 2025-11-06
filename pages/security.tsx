import Head from 'next/head';
import Security from '@/pages/Security';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security – MerchantHaus Shield</title>
        <meta
          name="description"
          content="Protect transactions with MerchantHaus Shield security services, blending threat monitoring, compliance, and authentication."
        />
        <link rel="canonical" href="https://merchanthaus.io/security" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Security – MerchantHaus" />
        <meta
          property="og:description"
          content="Safeguard your payment ecosystem with MerchantHaus Shield technology and expertise."
        />
        <meta property="og:url" content="https://merchanthaus.io/security" />
      </Head>
      <Security />
    </>
  );
}
