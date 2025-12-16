import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const FORM_URL = "https://merchanthaus-fr.nmipays.com/form/MerchantHaus-fr";

export default function ProcessorFormBanner() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 pb-8">
      <div
        className="max-w-5xl mx-auto group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01] shadow-lg"
        style={{
          background: "linear-gradient(135deg, hsl(var(--crimson)) 0%, #8B0000 100%)",
          boxShadow: "0 10px 35px rgba(220, 20, 60, 0.25)"
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative z-10 flex w-full flex-col gap-4 p-6 text-left text-white sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Need a processor?
            </div>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Click here to start</h3>
              <p className="max-w-2xl text-white/85">
                Open our quick application form without leaving the page. Submit your details in moments and we will
                take it from there.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-crimson font-semibold transition-all duration-300 group-hover:gap-4 shadow-md">
            Begin Form
            <ArrowRight className="h-5 w-5" />
          </div>
        </button>

        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden border border-border bg-card p-0 shadow-2xl">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-2xl font-ubuntu text-foreground">MerchantHaus Application</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Complete the form below to share your processing needs. The form opens in a secure window so you never
              have to leave this page.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 h-[65vh] w-full border-t border-border bg-background">
            <iframe
              src={FORM_URL}
              title="MerchantHaus Application Form"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
