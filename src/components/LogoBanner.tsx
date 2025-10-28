const LogoBanner = () => {
  const logos = [
    { file: 'clover.svg', name: 'Clover' },
    { file: 'freshbooks.webp', name: 'FreshBooks' },
    { file: 'gohighlevel.png', name: 'GoHighLevel' },
    { file: 'hubspot.webp', name: 'HubSpot' },
    { file: 'keap.webp', name: 'Keap' },
    { file: 'magento.webp', name: 'Magento' },
    { file: 'mastercard.webp', name: 'Mastercard' },
    { file: 'ncr.webp', name: 'NCR' },
    { file: 'nmi.webp', name: 'NMI' },
    { file: 'quickbooks.webp', name: 'QuickBooks' },
    { file: 'salesforce.webp', name: 'Salesforce' },
    { file: 'shopify.png', name: 'Shopify' },
    { file: 'squarespace.webp', name: 'Squarespace' },
    { file: 'visa.webp', name: 'Visa' },
    { file: 'wix.webp', name: 'Wix' },
    { file: 'zoho_crm.webp', name: 'Zoho CRM' },
  ];

  return (
    <section className="py-16 overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center">
          <p className="font-montserrat text-sm uppercase tracking-wider text-muted-foreground mb-3">
            Integrations & Partnerships
          </p>
          <h2 className="font-montserrat font-semibold text-2xl md:text-3xl text-foreground">
            Plug into the platforms your business already trusts
          </h2>
        </div>
      </div>
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100"
            >
              <img
                src={`/logos/${logo.file}`}
                alt={logo.name}
                className="h-12 w-auto object-contain transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
