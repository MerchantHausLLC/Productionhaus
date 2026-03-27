import React, { useState } from "react";
import { MerchantApplicationForm } from "./MerchantApplicationForm";

export const ApplyNowSlideout: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-md border border-border bg-background hover:bg-muted text-sm font-medium"
      >
        Apply Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />

          {/* Slideout panel (right) */}
          <div className="w-full max-w-lg h-full bg-background shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Merchant Application</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <MerchantApplicationForm mode="intake" excludeBankFields onSubmitted={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};
