import React, { useState } from "react";
import { MerchantApplicationForm } from "./MerchantApplicationForm";

export const ApplyNowSlideout: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium"
      >
        Apply Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />

          {/* Slideout panel (right) */}
          <div className="w-full max-w-lg h-full bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Merchant Application</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
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
