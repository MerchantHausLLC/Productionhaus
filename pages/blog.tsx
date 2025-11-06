import Head from 'next/head';
import Blog from '@/pages/Blog';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>MerchantHaus Blog – Insights on Payments & Commerce</title>
        <meta
          name="description"
          content="Read the latest MerchantHaus articles covering payment innovation, fraud prevention, and growth strategies for merchants."
        />
        <link rel="canonical" href="https://merchanthaus.io/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MerchantHaus Blog" />
        <meta
          property="og:description"
          content="Stay informed with MerchantHaus insights on digital payments, security, and customer experience."
        />
        <meta property="og:url" content="https://merchanthaus.io/blog" />
      </Head>
      <Blog />
    </>
  );
}
