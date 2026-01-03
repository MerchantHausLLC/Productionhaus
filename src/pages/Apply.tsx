import React, { useState, useEffect, useRef, FormEvent } from "react";
import {
  Check,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  FileText,
  Briefcase,
  Scale,
  CreditCard,
  Save,
  Info,
  ShieldCheck,
  Lock,
  RefreshCw,
  Cloud,
  Loader2,
  LucideIcon,
} from "lucide-react";

// --- Types & Interfaces ---

interface MerchantFormState {
  id: string;

  // Business
  dbaName: string;
  products: string;
  natureOfBusiness: string;
  dbaContactFirst: string;
  dbaContactLast: string;
  dbaPhone: string;
  dbaEmail: string;
  dbaAddress: string;
  dbaAddress2: string;
  dbaCity: string;
  dbaState: string;
  dbaZip: string;

  // Legal
  legalEntityName: string;
  legalPhone: string;
  legalEmail: string;
  tin: string;
  ownershipType: string;
  formationDate: string;
  stateIncorporated: string;
  legalAddress: string;
  legalAddress2: string;
  legalCity: string;
  legalState: string;
  legalZip: string;

  // Processing
  hasExistingProcessor: string; // "yes" | "no" | ""
  isSwitchingProcessor: string; // "yes" | "no" | ""
  currentProcessorName: string;

  // Billing (if keeping MID)
  hasVarSheet: string; // "yes" | "no" | ""

  monthlyVolume: string;
  avgTicket: string;
  highTicket: string;
  swipedPct: string;
  keyedPct: string;
  motoPct: string;
  ecomPct: string;
  b2cPct: string;
  b2bPct: string;
  sicMcc: string;
  website: string;

  // Docs Readiness
  hasBankOrProcessingStatements: string;
  hasVoidedCheckOrBankLetter: string;
  hasGovernmentId: string;
  hasArticlesOfOrganization: string;
  hasTaxDocument: string;
  docsLocationOrLink: string;

  // Gateway-only review confirmation
  gatewayOnlyReviewConfirmed: string; // "yes" | ""

  // Notes
  notes: string;

  // Index signature to allow dynamic access
  [key: string]: string;
}

interface StepConfig {
  label: string;
  icon: LucideIcon;
}

interface RequiredFieldsMap {
  business: (keyof MerchantFormState)[];
  legal: (keyof MerchantFormState)[];
  processing: (keyof MerchantFormState)[];
}

interface StepProps {
  form: MerchantFormState;
  onChange: (field: keyof MerchantFormState, value: string) => void;
}

interface ReviewStepProps extends StepProps {
  allMissing: Record<string, string[]>;
  isChecklistRequired: boolean;
  isChecklistComplete: boolean;
  isGatewayOnly: boolean;
}

// --- Constants & Config ---

const FORM_NAME = "merchant-apply";

const STEPS: StepConfig[] = [
  { label: "Business Profile", icon: Briefcase },
  { label: "Legal Information", icon: Scale },
  { label: "Processing Info", icon: CreditCard },
  { label: "Application Readiness", icon: FileText },
];

const REQUIRED_FIELDS: RequiredFieldsMap = {
  business: [
    "dbaName",
    "products",
    "natureOfBusiness",
    "dbaContactFirst",
    "dbaContactLast",
    "dbaPhone",
    "dbaEmail",
    "dbaAddress",
    "dbaCity",
    "dbaState",
    "dbaZip",
  ],
  legal: [
    "legalEntityName",
    "legalPhone",
    "legalEmail",
    "tin",
    "ownershipType",
    "formationDate",
    "stateIncorporated",
    "legalAddress",
    "legalCity",
    "legalState",
    "legalZip",
  ],
  processing: [
    "hasExistingProcessor",
    "monthlyVolume",
    "avgTicket",
    "highTicket",
    "swipedPct",
    "keyedPct",
    "motoPct",
    "ecomPct",
    "b2cPct",
    "b2bPct",
  ],
};

const DOCS_CHECKLIST_FIELDS: (keyof MerchantFormState)[] = [
  "hasBankOrProcessingStatements",
  "hasVoidedCheckOrBankLetter",
  "hasGovernmentId",
  "hasArticlesOfOrganization",
  "hasTaxDocument",
];

const SAFE_PAYLOAD_FIELDS: (keyof MerchantFormState)[] = [
  "id",
  "dbaName",
  "products",
  "natureOfBusiness",
  "dbaContactFirst",
  "dbaContactLast",
  "dbaPhone",
  "dbaEmail",
  "dbaAddress",
  "dbaAddress2",
  "dbaCity",
  "dbaState",
  "dbaZip",
  "legalEntityName",
  "legalPhone",
  "legalEmail",
  "tin",
  "ownershipType",
  "formationDate",
  "stateIncorporated",
  "legalAddress",
  "legalAddress2",
  "legalCity",
  "legalState",
  "legalZip",
  "hasExistingProcessor",
  "isSwitchingProcessor",
  "currentProcessorName",
  "hasVarSheet",
  "monthlyVolume",
  "avgTicket",
  "highTicket",
  "swipedPct",
  "keyedPct",
  "motoPct",
  "ecomPct",
  "b2cPct",
  "b2bPct",
  "sicMcc",
  "website",
  "hasBankOrProcessingStatements",
  "hasVoidedCheckOrBankLetter",
  "hasGovernmentId",
  "hasArticlesOfOrganization",
  "hasTaxDocument",
  "docsLocationOrLink",
  "gatewayOnlyReviewConfirmed",
  "notes",
];

const initialState: MerchantFormState = {
  id: "",

  // business
  dbaName: "",
  products: "",
  natureOfBusiness: "",
  dbaContactFirst: "",
  dbaContactLast: "",
  dbaPhone: "",
  dbaEmail: "",
  dbaAddress: "",
  dbaAddress2: "",
  dbaCity: "",
  dbaState: "",
  dbaZip: "",

  // legal
  legalEntityName: "",
  legalPhone: "",
  legalEmail: "",
  tin: "",
  ownershipType: "",
  formationDate: "",
  stateIncorporated: "",
  legalAddress: "",
  legalAddress2: "",
  legalCity: "",
  legalState: "",
  legalZip: "",

  // processing
  hasExistingProcessor: "",
  isSwitchingProcessor: "",
  currentProcessorName: "",

  // billing info
  hasVarSheet: "",

  monthlyVolume: "",
  avgTicket: "",
  highTicket: "",
  swipedPct: "",
  keyedPct: "",
  motoPct: "",
  ecomPct: "",
  b2cPct: "",
  b2bPct: "",
  sicMcc: "",
  website: "",

  // document readiness checklist
  hasBankOrProcessingStatements: "",
  hasVoidedCheckOrBankLetter: "",
  hasGovernmentId: "",
  hasArticlesOfOrganization: "",
  hasTaxDocument: "",
  docsLocationOrLink: "",

  // gateway-only review confirmation
  gatewayOnlyReviewConfirmed: "",

  // notes
  notes: "",
};

const buildSafePayload = (formData: MerchantFormState): Record<string, string> =>
  SAFE_PAYLOAD_FIELDS.reduce((acc, key) => {
    acc[key] = formData[key] ?? "";
    return acc;
  }, {} as Record<string, string>);

// Helper for Netlify Form Encoding
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// --- Main Component ---

export default function Apply() {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<MerchantFormState>(initialState);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  // Autosave State
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const isFirstRender = useRef(true);
  const [showChecklistWarning, setShowChecklistWarning] = useState(false);

  const isChecklistRequired =
    form.hasExistingProcessor === "no" ||
    (form.hasExistingProcessor === "yes" && form.isSwitchingProcessor === "yes");

  // Gateway-only: has existing processor AND keeping it (not switching)
  const isGatewayOnly =
    form.hasExistingProcessor === "yes" && form.isSwitchingProcessor === "no";

  const isChecklistComplete =
    !isChecklistRequired || DOCS_CHECKLIST_FIELDS.every((field) => form[field]);

  // Gateway-only clients must confirm review before submission
  const isGatewayOnlyConfirmed =
    !isGatewayOnly || form.gatewayOnlyReviewConfirmed === "yes";

  // 1. Initialize Session ID
  useEffect(() => {
    if (!form.id) {
      const mockId = "draft_" + Math.random().toString(36).substr(2, 9);
      setForm((prev) => ({ ...prev, id: mockId }));
    }
  }, [form.id]);

  // 2. Autosave Logic (Supabase)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      const safePayload = buildSafePayload(form);
      saveToSupabase(safePayload);
    }, 1000);

    return () => clearTimeout(timer);
  }, [form]);

  useEffect(() => {
    if (isChecklistComplete) {
      setShowChecklistWarning(false);
    }
  }, [isChecklistComplete]);

  // 3. Supabase Save Handler
  const saveToSupabase = async (formData: Record<string, string>) => {
    setSaveStatus("saving");
    try {
      /* --- SUPABASE IMPLEMENTATION ---
         const { data, error } = await supabase
           .from('merchant_onboarding_intake')
           .upsert(formData, { onConflict: 'id' });
         if (error) throw error;
      */

      // Fake network delay for preview
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSaveStatus("saved");
    } catch (err) {
      console.error("Autosave failed:", err);
      setSaveStatus("error");
    }
  };

  const handleChange = (field: keyof MerchantFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const getMissingFieldsForSection = (sectionKey: keyof RequiredFieldsMap) => {
    const required = REQUIRED_FIELDS[sectionKey] || [];
    return required.filter((field) => !String(form[field] ?? "").trim()) as string[];
  };

  const allMissing = {
    business: getMissingFieldsForSection("business"),
    legal: getMissingFieldsForSection("legal"),
    processing: getMissingFieldsForSection("processing"),
  };

  const totalRequiredFields =
    REQUIRED_FIELDS.business.length +
    REQUIRED_FIELDS.legal.length +
    REQUIRED_FIELDS.processing.length;

  const completedRequiredFields =
    REQUIRED_FIELDS.business.length -
    allMissing.business.length +
    (REQUIRED_FIELDS.legal.length - allMissing.legal.length) +
    (REQUIRED_FIELDS.processing.length - allMissing.processing.length);

  const progress = Math.round(
    (completedRequiredFields / totalRequiredFields) * 100,
  );

  const nextDisabled = () => {
    return false; // Validation disabled
  };

  const finalizeSubmit = async () => {
    setSubmissionStatus("submitting");

    const safePayload = buildSafePayload(form);

    // 1. Ensure final state is saved to Supabase
    await saveToSupabase(safePayload);

    // 2. Submit to Netlify Forms
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...safePayload }),
      });

      console.log("Netlify Form Submitted Successfully");
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Netlify Submission Failed:", error);
      alert("Submission failed. Please check your connection.");
      setSubmissionStatus("idle");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    if (e) e.preventDefault();

    // Block submission if document checklist is required but not complete
    if (isChecklistRequired && !isChecklistComplete) {
      setStep(3);
      setShowChecklistWarning(true);
      return;
    }

    // Block submission if gateway-only client hasn't confirmed review
    if (isGatewayOnly && !isGatewayOnlyConfirmed) {
      setStep(3);
      setShowChecklistWarning(true);
      return;
    }

    finalizeSubmit();
  };

  // Auto-redirect to homepage after 10 seconds on success
  useEffect(() => {
    if (submissionStatus === "success") {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  if (submissionStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <Check size={32} strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Application Received!</h2>
          <p className="text-slate-600">
            Thank you for submitting your application. A member of our sales team will contact you within 24 hours to request any supporting documentation.
          </p>
          <p className="text-slate-600 text-sm">
            Alternatively, you can send documents directly to{" "}
            <a href="mailto:sales@merchanthaus.io" className="text-emerald-600 font-medium hover:underline">
              sales@merchanthaus.io
            </a>
          </p>
          <p className="text-xs text-slate-400 mt-2">
            You will be redirected to the homepage in 10 seconds.
          </p>
          <div className="pt-4">
            <button
              onClick={() => window.location.href = "/"}
              className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 md:pb-10">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <FileText className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">Merchant Preboarding</h1>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-xs text-slate-500 hidden sm:block">Intake Wizard v2.4</p>
                {/* Save Status Indicator */}
                {saveStatus === "saving" && (
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-400 animate-pulse">
                    <Loader2 size={10} className="animate-spin" /> Saving...
                  </span>
                )}
                {saveStatus === "saved" && (
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-emerald-600">
                    <Cloud size={10} /> Saved
                  </span>
                )}
                {saveStatus === "error" && (
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-rose-500">
                    <AlertCircle size={10} /> Save Failed
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end min-w-[140px]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-slate-700">{progress}% Complete</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Step Indicators (Desktop) */}
        <div className="mb-8 hidden md:block">
          <ol className="flex items-center w-full">
            {STEPS.map((s, index) => {
              const isActive = index === step;
              const isCompleted = index < step;
              const Icon = s.icon;

              return (
                <li
                  key={s.label}
                  className={`flex items-center ${index !== STEPS.length - 1 ? "w-full" : ""}`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 border-2 transition-colors ${
                      isActive
                        ? "border-emerald-600 bg-emerald-50 text-emerald-600"
                        : isCompleted
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-slate-300 bg-white text-slate-400"
                    }`}
                  >
                    {isCompleted ? <Check size={20} /> : <Icon size={18} />}
                  </div>

                  <span
                    className={`ml-3 text-sm font-medium hidden lg:block ${
                      isActive ? "text-emerald-700" : "text-slate-500"
                    }`}
                  >
                    {s.label}
                  </span>

                  {index !== STEPS.length - 1 && (
                    <div className={`w-full h-0.5 mx-4 ${isCompleted ? "bg-emerald-600" : "bg-slate-200"}`} />
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile Step Indicator */}
        <div className="md:hidden mb-6 flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
          <span className="text-sm font-semibold text-slate-700">
            Step {step + 1}: {STEPS[step].label}
          </span>
          <span className="text-xs text-slate-500">
            {step + 1} of {STEPS.length}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
          {/* Main Form Area */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* NETLIFY FORM WRAPPER */}
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden input for Netlify Form Name */}
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input type="hidden" name="bot-field" />

              {/* Hidden inputs for all form fields - Netlify Forms requires these to detect fields at build time */}
              {/* Session ID */}
              <input type="hidden" name="id" value={form.id} />

              {/* Business Profile Fields */}
              <input type="hidden" name="dbaName" value={form.dbaName} />
              <input type="hidden" name="products" value={form.products} />
              <input type="hidden" name="natureOfBusiness" value={form.natureOfBusiness} />
              <input type="hidden" name="dbaContactFirst" value={form.dbaContactFirst} />
              <input type="hidden" name="dbaContactLast" value={form.dbaContactLast} />
              <input type="hidden" name="dbaPhone" value={form.dbaPhone} />
              <input type="hidden" name="dbaEmail" value={form.dbaEmail} />
              <input type="hidden" name="dbaAddress" value={form.dbaAddress} />
              <input type="hidden" name="dbaAddress2" value={form.dbaAddress2} />
              <input type="hidden" name="dbaCity" value={form.dbaCity} />
              <input type="hidden" name="dbaState" value={form.dbaState} />
              <input type="hidden" name="dbaZip" value={form.dbaZip} />

              {/* Legal Information Fields */}
              <input type="hidden" name="legalEntityName" value={form.legalEntityName} />
              <input type="hidden" name="legalPhone" value={form.legalPhone} />
              <input type="hidden" name="legalEmail" value={form.legalEmail} />
              <input type="hidden" name="tin" value={form.tin} />
              <input type="hidden" name="ownershipType" value={form.ownershipType} />
              <input type="hidden" name="formationDate" value={form.formationDate} />
              <input type="hidden" name="stateIncorporated" value={form.stateIncorporated} />
              <input type="hidden" name="legalAddress" value={form.legalAddress} />
              <input type="hidden" name="legalAddress2" value={form.legalAddress2} />
              <input type="hidden" name="legalCity" value={form.legalCity} />
              <input type="hidden" name="legalState" value={form.legalState} />
              <input type="hidden" name="legalZip" value={form.legalZip} />

              {/* Processing Information Fields */}
              <input type="hidden" name="hasExistingProcessor" value={form.hasExistingProcessor} />
              <input type="hidden" name="isSwitchingProcessor" value={form.isSwitchingProcessor} />
              <input type="hidden" name="currentProcessorName" value={form.currentProcessorName} />
              <input type="hidden" name="hasVarSheet" value={form.hasVarSheet} />
              <input type="hidden" name="monthlyVolume" value={form.monthlyVolume} />
              <input type="hidden" name="avgTicket" value={form.avgTicket} />
              <input type="hidden" name="highTicket" value={form.highTicket} />
              <input type="hidden" name="swipedPct" value={form.swipedPct} />
              <input type="hidden" name="keyedPct" value={form.keyedPct} />
              <input type="hidden" name="motoPct" value={form.motoPct} />
              <input type="hidden" name="ecomPct" value={form.ecomPct} />
              <input type="hidden" name="b2cPct" value={form.b2cPct} />
              <input type="hidden" name="b2bPct" value={form.b2bPct} />
              <input type="hidden" name="sicMcc" value={form.sicMcc} />
              <input type="hidden" name="website" value={form.website} />

              {/* Document Readiness Fields */}
              <input type="hidden" name="hasBankOrProcessingStatements" value={form.hasBankOrProcessingStatements} />
              <input type="hidden" name="hasVoidedCheckOrBankLetter" value={form.hasVoidedCheckOrBankLetter} />
              <input type="hidden" name="hasGovernmentId" value={form.hasGovernmentId} />
              <input type="hidden" name="hasArticlesOfOrganization" value={form.hasArticlesOfOrganization} />
              <input type="hidden" name="hasTaxDocument" value={form.hasTaxDocument} />
              <input type="hidden" name="docsLocationOrLink" value={form.docsLocationOrLink} />

              {/* Notes Field */}
              <input type="hidden" name="notes" value={form.notes} />

              {/* Gateway-only Review Confirmation Field */}
              <input type="hidden" name="gatewayOnlyReviewConfirmed" value={form.gatewayOnlyReviewConfirmed} />

              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{STEPS[step].label}</h2>
                  <p className="text-sm text-slate-500">
                    Please complete all required fields marked with <span className="text-rose-500">*</span>
                  </p>
                </div>

                {step === 0 && <BusinessProfileStep form={form} onChange={handleChange} />}
                {step === 1 && <LegalInfoStep form={form} onChange={handleChange} />}
                {step === 2 && <ProcessingStep form={form} onChange={handleChange} />}
                {step === 3 && (
                  <ReviewStep
                    form={form}
                    allMissing={allMissing}
                    onChange={handleChange}
                    isChecklistRequired={isChecklistRequired}
                    isChecklistComplete={isChecklistComplete}
                    isGatewayOnly={isGatewayOnly}
                  />
                )}
              </div>

              {/* Navigation Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                  disabled={step === 0}
                >
                  <ChevronLeft size={16} /> Back
                </button>

                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none transition-all"
                    onClick={() => setStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                    disabled={nextDisabled()}
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none transition-all"
                    disabled={(isChecklistRequired && !isChecklistComplete) || (isGatewayOnly && !isGatewayOnlyConfirmed)}
                  >
                    Complete Preboarding <Save size={16} />
                  </button>
                )}

                {step === STEPS.length - 1 &&
                  showChecklistWarning &&
                  ((isChecklistRequired && !isChecklistComplete) ||
                   (isGatewayOnly && !isGatewayOnlyConfirmed)) && (
                  <div className="flex items-center gap-2 text-xs text-amber-700 font-medium mt-3" role="alert">
                    <AlertCircle size={14} />
                    <span>
                      {isChecklistRequired && !isChecklistComplete
                        ? "Complete the application readiness checklist before submitting."
                        : "Please confirm you have reviewed the application details before submitting."}
                    </span>
                  </div>
                )}
              </div>
            </form>
          </section>

          {/* Right Sidebar - Status Snapshot */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Info size={16} className="text-emerald-600" />
                Status Snapshot
              </h3>

              <div className="space-y-4">
                <SectionStatus
                  label="Business Profile"
                  done={allMissing.business.length === 0}
                  count={REQUIRED_FIELDS.business.length - allMissing.business.length}
                  total={REQUIRED_FIELDS.business.length}
                />
                <SectionStatus
                  label="Legal Info"
                  done={allMissing.legal.length === 0}
                  count={REQUIRED_FIELDS.legal.length - allMissing.legal.length}
                  total={REQUIRED_FIELDS.legal.length}
                />
                <SectionStatus
                  label="Processing"
                  done={allMissing.processing.length === 0}
                  count={REQUIRED_FIELDS.processing.length - allMissing.processing.length}
                  total={REQUIRED_FIELDS.processing.length}
                />
              </div>

              {progress < 100 && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Missing Items</h4>
                  <div className="space-y-3">
                    {Object.entries(allMissing).map(([section, fields]) =>
                      fields.length ? (
                        <div key={section} className="text-xs">
                          <span className="font-semibold text-slate-700 capitalize">{section}:</span>
                          <span className="text-rose-500 ml-1">
                            {fields.length} field{fields.length > 1 ? "s" : ""} remaining
                          </span>
                        </div>
                      ) : null,
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-5">
              <h3 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">Tip</h3>
              <p className="text-xs text-indigo-800 leading-relaxed">
                If your business does not currently have a processor, we will ask for additional documentation readiness checks after you click
                "Complete".
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

// --- Subcomponents ---

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
  className?: string;
}

function Field({ label, required, children, hint, className = "" }: FieldProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/* Input component - white background with black text for readability
   Shows green border when field has a value to provide visual acknowledgment */
function Input(props: InputProps) {
  const hasValue = props.value !== undefined && props.value !== null && String(props.value).trim() !== "";
  return (
    <input
      {...props}
      className={`w-full rounded-lg border bg-white text-slate-900 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all ${
        hasValue ? "border-emerald-400" : "border-slate-300"
      } ${props.className || ""}`}
    />
  );
}

function NumberInput(props: InputProps) {
  return <Input type="number" step="any" min="0" {...props} />;
}

interface SectionStatusProps {
  label: string;
  done: boolean;
  count: number;
  total: number;
}

function SectionStatus({ label, done, count, total }: SectionStatusProps) {
  const pct = Math.round((count / total) * 100);
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-xs font-semibold ${done ? "text-emerald-700" : "text-slate-700"}`}>
          {label}
        </span>
        <span className="text-xs text-slate-500 font-medium">
          {count}/{total}
        </span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${done ? "bg-emerald-500" : "bg-emerald-300"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function BusinessProfileStep({ form, onChange }: StepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="DBA Name" required className="md:col-span-2">
          <Input
            value={form.dbaName}
            onChange={(e) => onChange("dbaName", e.target.value)}
            placeholder="Doing Business As..."
          />
        </Field>
        <Field label="Products / Services" required>
          <Input
            value={form.products}
            onChange={(e) => onChange("products", e.target.value)}
            placeholder="e.g. Shoes, Consulting"
          />
        </Field>
        <Field label="Nature of Business" required>
          <Input
            value={form.natureOfBusiness}
            onChange={(e) => onChange("natureOfBusiness", e.target.value)}
            placeholder="e.g. Retail, eCommerce"
          />
        </Field>
      </div>

      <hr className="border-slate-100" />
      <h3 className="text-sm font-semibold text-slate-900">Contact Information</h3>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="First Name" required>
          <Input
            value={form.dbaContactFirst}
            onChange={(e) => onChange("dbaContactFirst", e.target.value)}
          />
        </Field>
        <Field label="Last Name" required>
          <Input
            value={form.dbaContactLast}
            onChange={(e) => onChange("dbaContactLast", e.target.value)}
          />
        </Field>
        <Field label="Phone Number" required>
          <Input
            value={form.dbaPhone}
            onChange={(e) => onChange("dbaPhone", e.target.value)}
            placeholder="+1 (555) 000-0000"
          />
        </Field>
        <Field label="Email Address" required>
          <Input
            type="email"
            value={form.dbaEmail}
            onChange={(e) => onChange("dbaEmail", e.target.value)}
            placeholder="name@business.com"
          />
        </Field>
      </div>

      <hr className="border-slate-100" />
      <h3 className="text-sm font-semibold text-slate-900">Location</h3>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Address Line 1" required>
          <Input
            value={form.dbaAddress}
            onChange={(e) => onChange("dbaAddress", e.target.value)}
          />
        </Field>
        <Field label="Address Line 2">
          <Input
            value={form.dbaAddress2}
            onChange={(e) => onChange("dbaAddress2", e.target.value)}
          />
        </Field>
        <Field label="City" required>
          <Input value={form.dbaCity} onChange={(e) => onChange("dbaCity", e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="State" required>
            <Input value={form.dbaState} onChange={(e) => onChange("dbaState", e.target.value)} />
          </Field>
          <Field label="ZIP Code" required>
            <Input value={form.dbaZip} onChange={(e) => onChange("dbaZip", e.target.value)} />
          </Field>
        </div>
      </div>
    </div>
  );
}

function LegalInfoStep({ form, onChange }: StepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Legal Entity Name" required className="md:col-span-2">
          <Input
            value={form.legalEntityName}
            onChange={(e) => onChange("legalEntityName", e.target.value)}
            placeholder="Official Registered Name"
          />
        </Field>
        <Field label="Business Phone" required>
          <Input value={form.legalPhone} onChange={(e) => onChange("legalPhone", e.target.value)} />
        </Field>
        <Field label="Business Email" required>
          <Input
            type="email"
            value={form.legalEmail}
            onChange={(e) => onChange("legalEmail", e.target.value)}
          />
        </Field>
        <Field label="Tax ID (TIN/EIN)" required>
          <Input value={form.tin} onChange={(e) => onChange("tin", e.target.value)} placeholder="XX-XXXXXXX" />
        </Field>
        <Field label="Ownership Type" required>
          <Input
            value={form.ownershipType}
            onChange={(e) => onChange("ownershipType", e.target.value)}
            placeholder="e.g. LLC, Sole Prop, Corp"
          />
        </Field>
        <Field label="Formation Date" required>
          <Input type="date" value={form.formationDate} onChange={(e) => onChange("formationDate", e.target.value)} />
        </Field>
        <Field label="State Incorporated" required>
          <Input value={form.stateIncorporated} onChange={(e) => onChange("stateIncorporated", e.target.value)} />
        </Field>
      </div>

      <hr className="border-slate-100" />
      <h3 className="text-sm font-semibold text-slate-900">Legal Address</h3>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Address Line 1" required>
          <Input value={form.legalAddress} onChange={(e) => onChange("legalAddress", e.target.value)} />
        </Field>
        <Field label="Address Line 2">
          <Input value={form.legalAddress2} onChange={(e) => onChange("legalAddress2", e.target.value)} />
        </Field>
        <Field label="City" required>
          <Input value={form.legalCity} onChange={(e) => onChange("legalCity", e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="State" required>
            <Input value={form.legalState} onChange={(e) => onChange("legalState", e.target.value)} />
          </Field>
          <Field label="ZIP Code" required>
            <Input value={form.legalZip} onChange={(e) => onChange("legalZip", e.target.value)} />
          </Field>
        </div>
      </div>
    </div>
  );
}

function ProcessingStep({ form, onChange }: StepProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
        <div className="space-y-6">
          {/* Question 1: Have Processor? */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-900 block">
              Do you have a payment processor? (Merchant ID) <span className="text-rose-500">*</span>
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  onChange("hasExistingProcessor", "yes");
                  onChange("isSwitchingProcessor", ""); // reset sub-question
                }}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                  form.hasExistingProcessor === "yes"
                    ? "border-emerald-500 bg-white text-emerald-700 ring-2 ring-emerald-200 ring-offset-1"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => {
                  onChange("hasExistingProcessor", "no");
                  onChange("isSwitchingProcessor", "");
                }}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                  form.hasExistingProcessor === "no"
                    ? "border-amber-500 bg-white text-amber-700 ring-2 ring-amber-200 ring-offset-1"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Sub-Question: Switching? (Only if Yes to MID) */}
          {form.hasExistingProcessor === "yes" && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
              <label className="text-sm font-bold text-slate-900 block">
                Are you switching your payment processing to us? <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => onChange("isSwitchingProcessor", "yes")}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                    form.isSwitchingProcessor === "yes"
                      ? "border-emerald-500 bg-white text-emerald-700 ring-2 ring-emerald-200 ring-offset-1"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                  }`}
                >
                  Yes, switching
                </button>
                <button
                  type="button"
                  onClick={() => onChange("isSwitchingProcessor", "no")}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                    form.isSwitchingProcessor === "no"
                      ? "border-blue-500 bg-white text-blue-700 ring-2 ring-blue-200 ring-offset-1"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                  }`}
                >
                  No, keeping existing
                </button>
              </div>
            </div>
          )}

          {/* 1. Switching Logic */}
          {form.hasExistingProcessor === "yes" && form.isSwitchingProcessor === "yes" && (
            <div className="mt-4 pt-4 border-t border-slate-200 animate-in fade-in">
              <Field label="Current Processor Name">
                <Input
                  value={form.currentProcessorName}
                  onChange={(e) => onChange("currentProcessorName", e.target.value)}
                  placeholder="e.g. Stripe, Square, Chase"
                />
              </Field>
            </div>
          )}

          {/* 2. Keeping MID Logic */}
          {form.hasExistingProcessor === "yes" && form.isSwitchingProcessor === "no" && (
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-5 animate-in fade-in">
              <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
                <Info size={18} className="shrink-0 mt-0.5 text-blue-700" />
                <div className="space-y-1">
                  <p className="font-semibold text-blue-800">Gateway Configuration Required</p>
                  <p>
                    Since you are keeping your current processor, we need to bridge the gateway manually.
                    Please email a <span className="font-semibold">Voided Check</span> or <span className="font-semibold">Bank Confirmation Letter</span> to:
                  </p>
                  <p className="text-xs text-blue-800">
                    Do not enter routing or account numbers in this form. We only accept the documents above for banking verification.
                  </p>
                  <div className="font-mono bg-blue-100/50 p-2 rounded text-blue-800 select-all inline-block mt-1">
                    sales@merchanthaus.io
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">Confirm Availability</h4>

                <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg bg-white">
                  <input
                    type="checkbox"
                    id="chkVoided"
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    checked={form.hasVoidedCheckOrBankLetter === "yes"}
                    onChange={(e) => onChange("hasVoidedCheckOrBankLetter", e.target.checked ? "yes" : "")}
                  />
                  <label htmlFor="chkVoided" className="text-sm text-slate-700 cursor-pointer select-none">
                    I will send the <span className="font-semibold">Voided Check</span> or <span className="font-semibold">Bank Letter</span> to the email above.
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg bg-white">
                  <input
                    type="checkbox"
                    id="chkVar"
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    checked={form.hasVarSheet === "yes"}
                    onChange={(e) => onChange("hasVarSheet", e.target.checked ? "yes" : "")}
                  />
                  <label htmlFor="chkVar" className="text-sm text-slate-700 cursor-pointer select-none">
                    I confirm I have the <span className="font-semibold">VAR Sheet</span> (Value Added Reseller sheet) from the current processor.
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* 3. New Setup Logic */}
          {form.hasExistingProcessor === "no" && (
            <div className="mt-3 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 animate-in fade-in">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <p>
                Heads up: After you submit this form, we'll ask a few quick questions about document readiness (bank statements, voided checks, etc.) to ensure a smooth boarding process.
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Volume & Ticket Size</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Field label="Monthly Volume ($)" required>
            <NumberInput value={form.monthlyVolume} onChange={(e) => onChange("monthlyVolume", e.target.value)} />
          </Field>
          <Field label="Average Ticket ($)" required>
            <NumberInput value={form.avgTicket} onChange={(e) => onChange("avgTicket", e.target.value)} />
          </Field>
          <Field label="High Ticket ($)" required>
            <NumberInput value={form.highTicket} onChange={(e) => onChange("highTicket", e.target.value)} />
          </Field>
        </div>
      </div>

      {/* Transaction Breakdown - shows percentage split across different transaction types */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">
          Transaction Breakdown (%) <span className="text-slate-500 font-normal ml-1">(Percentage of transactions you see or anticipate)</span>
        </h3>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          <Field label="Swiped" required hint="Card physically swiped at terminal">
            <NumberInput value={form.swipedPct} onChange={(e) => onChange("swipedPct", e.target.value)} />
          </Field>
          <Field label="Keyed" required hint="Card number manually entered">
            <NumberInput value={form.keyedPct} onChange={(e) => onChange("keyedPct", e.target.value)} />
          </Field>
          <Field label="MOTO" required hint="Mail Order / Telephone Order transactions">
            <NumberInput value={form.motoPct} onChange={(e) => onChange("motoPct", e.target.value)} />
          </Field>
          <Field label="eCom" required hint="eCommerce / online transactions">
            <NumberInput value={form.ecomPct} onChange={(e) => onChange("ecomPct", e.target.value)} />
          </Field>
          <Field label="B2C" required hint="Business-to-Consumer sales">
            <NumberInput value={form.b2cPct} onChange={(e) => onChange("b2cPct", e.target.value)} />
          </Field>
          <Field label="B2B" required hint="Business-to-Business sales">
            <NumberInput value={form.b2bPct} onChange={(e) => onChange("b2bPct", e.target.value)} />
          </Field>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Website URL">
          <Input
            value={form.website}
            onChange={(e) => onChange("website", e.target.value)}
            placeholder="https://example.com"
          />
        </Field>
        <Field label="SIC / MCC (if known)" hint="Standard Industry / Merchant Category Code">
          <Input
            value={form.sicMcc}
            onChange={(e) => onChange("sicMcc", e.target.value)}
            placeholder="e.g. 5411"
          />
        </Field>
      </div>
    </div>
  );
}

function ReviewStep({
  form,
  allMissing,
  onChange,
  isChecklistRequired,
  isChecklistComplete,
  isGatewayOnly,
}: ReviewStepProps) {
  // Show full checklist if New Setup OR Switching Processor
  const showFullChecklist =
    form.hasExistingProcessor === "no" ||
    (form.hasExistingProcessor === "yes" && form.isSwitchingProcessor === "yes");

  // Gateway-only clients need to confirm they've reviewed before submitting
  const isGatewayOnlyConfirmed = form.gatewayOnlyReviewConfirmed === "yes";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Anti-Fraud Value Prop */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <ShieldCheck size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-indigo-900">Security & Value Added Services</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              We are an anti-fraud first company.
              <span className="font-semibold"> Customer Vault</span>,
              <span className="font-semibold"> Network Tokens</span>, and
              <span className="font-semibold"> Account Updater</span> are provided by default as a value-added service to ensure your transactions are secure and seamless.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-700">
                <Lock size={12} /> Vault
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-700">
                <RefreshCw size={12} /> Updater
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-700">
                <ShieldCheck size={12} /> Tokens
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 border border-slate-200">
        <p>
          Please review the details below. Once you submit, this data will be queued for formal onboarding.
        </p>
      </div>

      {/* Gateway-Only Review Confirmation - requires explicit acknowledgment before submission */}
      {isGatewayOnly && (
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 animate-in fade-in">
          <h4 className="flex items-center gap-2 mb-4 text-sm font-bold text-blue-900 uppercase tracking-wide">
            <Info size={16} className="text-blue-500" />
            Review & Confirm
          </h4>
          <p className="text-sm text-blue-800 mb-4">
            You are setting up a <span className="font-semibold">Gateway-Only</span> configuration (keeping your existing processor).
            Please review all the information above and confirm you are ready to submit.
          </p>
          <div
            className={`flex items-center gap-2 text-xs font-semibold mb-3 ${
              isGatewayOnlyConfirmed ? "text-emerald-700" : "text-blue-700"
            }`}
            role="status"
          >
            {isGatewayOnlyConfirmed ? <Check size={14} /> : <AlertCircle size={14} />}
            <span>
              {isGatewayOnlyConfirmed
                ? "Review confirmed. You may now submit."
                : "Please confirm your review to enable submission."}
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-blue-200 rounded-xl bg-white">
            <input
              type="checkbox"
              id="gatewayOnlyConfirm"
              className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              checked={isGatewayOnlyConfirmed}
              onChange={(e) => onChange("gatewayOnlyReviewConfirmed", e.target.checked ? "yes" : "")}
            />
            <label htmlFor="gatewayOnlyConfirm" className="text-sm text-slate-700 cursor-pointer select-none">
              I have reviewed all the application details and confirm they are correct. <span className="text-rose-500">*</span>
            </label>
          </div>
        </div>
      )}

      {/* Required Docs Confirmation for NEW SETUPS & SWITCHING */}
      {showFullChecklist && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 animate-in fade-in">
          <h4 className="flex items-center gap-2 mb-4 text-sm font-bold text-amber-900 uppercase tracking-wide">
            <FileText size={16} className="text-amber-500" />
            Application Readiness Checklist
          </h4>
          <p className="text-sm text-amber-800 mb-4">
            Please confirm you have access to the following documents before proceeding.
            (Uploads will be requested in the formal application). Do not enter routing or account numbers in this form.
          </p>
          <div
            className={`flex items-center gap-2 text-xs font-semibold mb-3 ${
              isChecklistComplete ? "text-emerald-700" : "text-amber-700"
            }`}
            role="status"
          >
            {isChecklistComplete ? <Check size={14} /> : <AlertCircle size={14} />}
            <span>
              {isChecklistComplete
                ? "Application readiness checklist completed."
                : "Please answer each checklist item to enable submission."}
            </span>
          </div>
          <div className="space-y-3">
            <ChecklistRow
              label="Bank or processing statements"
              value={form.hasBankOrProcessingStatements}
              onChange={(v) => onChange("hasBankOrProcessingStatements", v)}
            />
            <ChecklistRow
              label="Voided check or bank letter"
              value={form.hasVoidedCheckOrBankLetter}
              onChange={(v) => onChange("hasVoidedCheckOrBankLetter", v)}
            />
            <ChecklistRow
              label="Government ID (Driver's License/Passport)"
              value={form.hasGovernmentId}
              onChange={(v) => onChange("hasGovernmentId", v)}
            />
            <ChecklistRow
              label="Articles of Organization"
              value={form.hasArticlesOfOrganization}
              onChange={(v) => onChange("hasArticlesOfOrganization", v)}
            />
            <ChecklistRow
              label="Tax Document (Confirm EIN)"
              value={form.hasTaxDocument}
              onChange={(v) => onChange("hasTaxDocument", v)}
            />
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <SummaryCard title="Business Profile" icon={Briefcase}>
          <SummaryItem label="DBA Name" value={form.dbaName} />
          <SummaryItem label="Products" value={form.products} />
          <SummaryItem label="Industry" value={form.natureOfBusiness} />
          <SummaryItem label="Contact" value={`${form.dbaContactFirst} ${form.dbaContactLast}`} />
          <SummaryItem label="Phone" value={form.dbaPhone} />
          <SummaryItem label="Email" value={form.dbaEmail} />
        </SummaryCard>

        <SummaryCard title="Legal Information" icon={Scale}>
          <SummaryItem label="Legal Entity" value={form.legalEntityName} />
          <SummaryItem label="Tax ID (TIN)" value={form.tin} />
          <SummaryItem label="Ownership" value={form.ownershipType} />
          <SummaryItem label="Founded" value={form.formationDate} />
          <SummaryItem label="State Inc." value={form.stateIncorporated} />
        </SummaryCard>

        <SummaryCard title="Processing Details" icon={CreditCard}>
          <SummaryItem
            label="Processor"
            value={
              form.hasExistingProcessor === "yes"
                ? form.isSwitchingProcessor === "yes"
                  ? "Switching from " + (form.currentProcessorName || "Current")
                  : "Keeping Existing MID"
                : "New Setup"
            }
          />

          {form.hasExistingProcessor === "yes" && form.isSwitchingProcessor === "no" && (
            <div className="py-2 my-2 border-y border-slate-100 bg-slate-50 rounded px-2">
              <SummaryItem label="Banking" value="Email Instr. Sent" />
              <SummaryItem label="VAR Sheet" value={form.hasVarSheet} />
            </div>
          )}

          <SummaryItem label="Monthly Vol" value={`$${form.monthlyVolume}`} />
          <SummaryItem label="Avg Ticket" value={`$${form.avgTicket}`} />
          <div className="grid grid-cols-2 gap-y-1 mt-2 pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-500">Swiped: {form.swipedPct}%</span>
            <span className="text-xs text-slate-500">Keyed: {form.keyedPct}%</span>
            <span className="text-xs text-slate-500">eCom: {form.ecomPct}%</span>
            <span className="text-xs text-slate-500">B2B: {form.b2bPct}%</span>
          </div>
        </SummaryCard>

        <SummaryCard title="Notes & Docs" icon={FileText}>
          {/* Summary of docs logic */}
          {showFullChecklist ? (
            <div className="space-y-1">
              <SummaryItem label="Statements" value={form.hasBankOrProcessingStatements || "—"} />
              <SummaryItem label="Voided Check" value={form.hasVoidedCheckOrBankLetter || "—"} />
              <SummaryItem label="Government ID" value={form.hasGovernmentId || "—"} />
              <SummaryItem label="Articles of Org." value={form.hasArticlesOfOrganization || "—"} />
              <SummaryItem label="Tax Doc (EIN)" value={form.hasTaxDocument || "—"} />
            </div>
          ) : form.isSwitchingProcessor === "no" ? (
            <div className="space-y-1">
              <SummaryItem label="Voided Check" value={form.hasVoidedCheckOrBankLetter || "—"} />
              <SummaryItem label="VAR Sheet" value={form.hasVarSheet || "—"} />
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic mb-2">Standard docs verification pending.</p>
          )}
          <SummaryItem label="Docs Link" value={form.docsLocationOrLink} />
          <div className="mt-2 pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-400 block mb-1">Internal Notes</span>
            <p className="text-sm text-slate-700 whitespace-pre-wrap">{form.notes || "—"}</p>
          </div>
        </SummaryCard>
      </div>
    </div>
  );
}

interface SummaryCardProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

function SummaryCard({ title, icon: Icon, children }: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="flex items-center gap-2 mb-4 text-sm font-bold text-slate-900 uppercase tracking-wide">
        {Icon && <Icon size={16} className="text-slate-400" />}
        {title}
      </h4>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface SummaryItemProps {
  label: string;
  value?: string | number;
}

function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <div className="flex justify-between items-start text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-900 text-right max-w-[60%] break-words">{value || "—"}</span>
    </div>
  );
}

interface ChecklistRowProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

function ChecklistRow({ label, value, onChange }: ChecklistRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
      <span className="font-medium text-slate-900 flex items-center gap-2">
        <FileText size={16} className="text-slate-400" />
        {label} <span className="text-rose-500">*</span>
      </span>
      <div className="flex gap-2 shrink-0">
        <button
          type="button"
          onClick={() => onChange("yes")}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all ${
            value === "yes"
              ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm"
              : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
          }`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => onChange("no")}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all ${
            value === "no"
              ? "bg-rose-50 border-rose-500 text-rose-700 shadow-sm"
              : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}
