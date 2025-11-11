import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Report Configuration
 *
 * This guide describes how to customise the fields included in your
 * downloaded transaction reports. By creating templates you can choose
 * which columns appear and set a default layout for all future exports【54240457345460†L53-L83】.
 */
const ReportConfiguration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            h1, h2, h3, h4, h5, h6, p, li, button, a, em, strong {
              font-family: 'Inter', sans-serif;
            }
          `}</style>
        </Head>
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Report Configuration
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tailor your exported transaction reports to include only the
              information you need. Create templates and set a default
              format for future downloads.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Report configuration lets you design custom column layouts for
                CSV exports. You can drag and drop fields from a list of
                available columns, save multiple formats and select one as
                your default【54240457345460†L53-L83】.
              </p>
            </section>

            {/* Creating Templates */}
            <section id="creating-templates" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Creating Templates
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To build a new format:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Open the report configuration page and click <em>Add Format</em>.
                </li>
                <li>
                  Name your format and drag fields from the available list to
                  the selected area. You can reorder columns by dragging them
                  up or down【54240457345460†L85-L106】.
                </li>
                <li>
                  Save the format. It will be available whenever you download
                  a transaction report.【54240457345460†L85-L106】
                </li>
              </ol>
            </section>

            {/* Using Templates */}
            <section id="using-templates" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Using Templates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When running transaction reports, choose your saved format
                from the <em>Download Format</em> drop‑down. If you set a
                default format, it will automatically be selected for all
                downloads. You can edit or delete formats at any time【54240457345460†L85-L106】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReportConfiguration;