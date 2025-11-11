import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Direct Connect & Gateway Emulator
 *
 * This page covers two specialised integration options: Direct
 * Connect for terminal manufacturers and the Gateway Emulator for
 * merchants migrating from another gateway. Direct Connect lets you
 * pre‑equip devices to work with the platform but requires EMV
 * certification for each processor【4979302280188†L128-L136】. The Gateway
 * Emulator allows merchants to emulate another gateway’s API while
 * sending transactions to the platform【973495872450596†L160-L169】.
 */
const DirectConnect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Direct Connect & Gateway Emulator";
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1 docs-typography">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Direct Connect &amp; Gateway Emulator
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This section describes two advanced integration paths: Direct
              Connect for device manufacturers and the Gateway Emulator
              for merchants migrating from other gateways.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Direct Connect allows terminal device makers to pre‑equip
                their hardware to communicate with our platform. The
                integration examples and documentation provided by the
                gateway help you embed the necessary protocols into your
                device firmware【4979302280188†L128-L136】.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Gateway Emulator is designed for merchants who
                already use another gateway (such as Authorize.Net)
                and want to switch to our platform without rewriting
                their software. It allows you to post transactions to a
                proxy URL that forwards the data to the platform while
                emulating the original gateway’s response format【973495872450596†L160-L169】.
              </p>
            </section>

            {/* Gateway Emulator */}
            <section id="gateway-emulator" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Gateway Emulator</h2>
              <p className="text-muted-foreground leading-relaxed">
                According to independent guidance, the Gateway Emulator
                works by changing your existing shopping cart’s
                transaction post URL to the emulator endpoint【973495872450596†L160-L169】.
                Your cart must support Authorize.Net AIM or SIM in order
                to make this switch. Once configured, transactions are
                forwarded to our gateway while your current software
                continues to operate as if it were communicating with
                Authorize.Net. This allows merchants to keep pre‑written
                software in place while leveraging the features of our
                platform【973495872450596†L160-L169】.
              </p>
            </section>

            {/* Considerations */}
            <section id="considerations" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Direct Connect integrations require an EMV Level 3
                processor certification for each device and processor
                combination you support【4979302280188†L128-L136】. This is
                usually negotiated via a commercial agreement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For the Gateway Emulator, verify that your shopping
                cart supports Authorize.Net’s AIM or SIM method and
                thoroughly test transactions after updating the post
                URL. Note that certain advanced features of your
                previous gateway may not be available when using the
                emulator.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DirectConnect;