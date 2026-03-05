import { Helmet } from "react-helmet-async";

type PageSEOProps = {
  title: string;
  description: string;
  path: string;
};

const SITE_URL = "https://merchanthaus.io";
const SITE_NAME = "MerchantHaus";
const DEFAULT_IMAGE = `${SITE_URL}/favicons/icon_pack_updated/shield_512x512.png`;

export const PageSEO = ({ title, description, path }: PageSEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={DEFAULT_IMAGE} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};
