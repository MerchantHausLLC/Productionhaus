export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-ubuntu font-bold text-4xl md:text-5xl text-neutral-dark">
              Trusted Payment Solutions
            </h2>
            <div className="space-y-4 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                MerchantHaus delivers comprehensive payment processing solutions designed specifically for U.S. retailers and independent sales organizations (ISOs). With years of industry experience, we understand the unique challenges merchants face.
              </p>
              <p>
                Our platform combines cutting-edge technology with personalized service, ensuring secure transactions, competitive rates, and seamless integration with your existing systems. From mobile payments to advanced fraud detection, we provide the tools you need to grow your business with confidence.
              </p>
              <p>
                Partner with us to experience payment processing that's built for reliability, scalability, and success.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-crimson/10 to-cyber-teal/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl md:text-7xl font-ubuntu font-bold text-crimson">
                  10+
                </div>
                <div className="text-xl md:text-2xl font-inter font-semibold text-neutral-dark">
                  Years of Excellence
                </div>
                <div className="text-lg text-muted-foreground max-w-xs mx-auto">
                  Trusted by thousands of merchants nationwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
