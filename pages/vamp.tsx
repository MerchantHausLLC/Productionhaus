import Head from 'next/head';
import Vamp from '@/pages/Vamp';

export default function VampPage() {
  return (
    <>
      <Head>
        <title>VAMP Platform – MerchantHaus</title>
        <meta
          name="description"
          content="Experience MerchantHaus VAMP, the omnichannel payment platform engineered for velocity, automation, and modern protection."
        />
        <link rel="canonical" href="https://merchanthaus.io/vamp" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VAMP Platform – MerchantHaus" />
        <meta
          property="og:description"
          content="Discover how VAMP unifies payment acceptance, analytics, and security across every channel."
        />
        <meta property="og:url" content="https://merchanthaus.io/vamp" />
      </Head>
      <Vamp />
    </>
  );
}
