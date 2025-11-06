import Head from 'next/head';
import NotFound from '@/pages/NotFound';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found – MerchantHaus</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="The page you were looking for could not be found on MerchantHaus." />
      </Head>
      <NotFound />
    </>
  );
}
