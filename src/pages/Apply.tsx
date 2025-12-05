import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  Building2,
  User,
  Shield,
  CreditCard,
  Wrench,
} from "lucide-react";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { ThankYouDialog } from "@/components/ThankYouDialog";
// Import the helper to format data for Netlify
import { formDataToQueryString } from "@/lib/netlify";

const positiveOptionalNumber = z.preprocess(
  (val) => {
    if (val === "" || val === null || val === undefined) return undefined;
    const parsed = typeof val === "number" ? val : Number(val);
    return Number.isNaN(parsed) ? undefined : parsed;
  },
  z.number({ invalid_type_error: "Please enter a number" }).positive("Must be a positive number").optional(),
);

// Schema validation
const applicationFormSchema = z
  .object({
    company_name: z.string().trim().min(1, "Company name is required").max(100),
    dbaName: z.string().trim().max(100).optional(),
    address: z.string().trim().min(1, "Address is required").max(200),
    address2: z.string().trim().max(100).optional(),
    city: z.string().trim().min(1, "City is required").max(100),
    state: z.string().trim().min(1, "State is required").max(50),
    zip: z.string().trim().min(1, "Zip code is required").max(20),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
    businessDescription: z
      .string()
      .trim()
      .min(1, "Please describe your business")
      .max(500, "Please keep this under 500 characters"),
    primaryUseCase: z.string().trim().min(1, "Select your primary use case"),
    industry: z.string().trim().min(1, "Select your industry"),
    currentlyProcessing: z.enum(["yes", "no"], {
      required_error: "Please tell us if you have a payment processor",
    }),
    currentProcessor: z.string().trim().max(100).optional(),
    first_name: z.string().trim().min(1, "First name is required").max(50),
    last_name: z.string().trim().min(1, "Last name is required").max(50),
    email: z.string().trim().email("Invalid email address").max(255),
    phone: z.string().trim().min(1, "Phone number is required").max(20),
    fax: z.string().trim().max(20).optional(),
    preferredContactMethod: z.string().trim().optional(),
    bestTimeToReach: z.string().trim().optional(),
    username: z
      .string()
      .trim()
      .min(1, "Username is required")
      .max(50)
      .regex(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),
    avgTicket: positiveOptionalNumber,
    maxTicket: positiveOptionalNumber,
    monthlyVolume: positiveOptionalNumber,
    transactionMix: z.string().trim().min(1, "Select your estimated transaction mix"),
    integrationMethod: z.string().trim().min(1, "Select an integration method"),
    posPlatform: z.array(z.string()).min(1, "Select at least one platform"),
    developerInvolved: z.enum(["yes", "no"]).optional(),
    integrationTimeline: z.string().trim().optional(),
    needsCardPresent: z.enum(["yes", "no"], {
      required_error: "Please tell us if you need in-person payments",
    }),
    preferredDeviceType: z.string().trim().optional(),
    numLocations: positiveOptionalNumber,
    numDevices: positiveOptionalNumber,
    highRiskProducts: z.enum(["yes", "no"], {
      required_error: "Please indicate if you sell regulated products",
    }),
    highRiskDescription: z.string().trim().max(500).optional(),
    cardOnFile: z.enum(["yes", "no"]).optional(),
    processing_services: z.array(z.string()).optional(),
    value_services: z.array(z.string()).optional(),
    agree_to_terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms and Conditions",
    }),
    agree_to_security_policy: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Security Policy",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.currentlyProcessing === "yes" && !data.currentProcessor?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["currentProcessor"],
        message: "Please tell us who you currently process with",
      });
    }
    if (data.needsCardPresent === "yes" && !data.preferredDeviceType?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["preferredDeviceType"],
        message: "Please select a device type",
      });
    }
    if (data.highRiskProducts === "yes" && !data.highRiskDescription?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["highRiskDescription"],
        message: "Please briefly describe the regulated products/services",
      });
    }
  });

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

const Apply = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      dbaName: "",
      businessDescription: "",
      primaryUseCase: "",
      industry: "",
      currentlyProcessing: undefined,
      currentProcessor: "",
      processing_services: [],
      value_services: [],
      avgTicket: undefined,
      maxTicket: undefined,
      monthlyVolume: undefined,
      transactionMix: "",
      integrationMethod: "",
      posPlatform: [],
      developerInvolved: undefined,
      integrationTimeline: "",
      needsCardPresent: undefined,
      preferredDeviceType: "",
      numLocations: undefined,
      numDevices: undefined,
      highRiskProducts: undefined,
      highRiskDescription: "",
      cardOnFile: undefined,
      preferredContactMethod: "",
      bestTimeToReach: "",
      agree_to_terms: false,
      agree_to_security_policy: false,
    },
  });

  const processingServices = watch("processing_services") || [];
  const valueServices = watch("value_services") || [];
  const posPlatforms = watch("posPlatform") || [];
  const currentlyProcessing = watch("currentlyProcessing");
  const needsCardPresent = watch("needsCardPresent");
  const highRiskProducts = watch("highRiskProducts");

  // NEW: Submit handler for Netlify Static Forms (Option A)
  const onSubmit = async (data: ApplicationFormValues) => {
    try {
      const formData = new FormData();
      
      // 1. Add standard Netlify fields
      formData.append("form-name", "merchant-apply");
      formData.append("bot-field", "");

      // 2. Append all data fields manually
      // We do this to capture data from steps that are currently hidden from the DOM
      Object.keys(data).forEach((key) => {
        const value = data[key as keyof ApplicationFormValues];
        
        if (Array.isArray(value)) {
          // For checkboxes (arrays), append each item individually
          value.forEach((item) => formData.append(key, item));
        } else if (value !== undefined && value !== null) {
           // Convert booleans and numbers to strings
          formData.append(key, value.toString());
        }
      });

      // 3. Submit to the root URL "/"
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToQueryString(formData),
      });

      if (response.ok) {
        toast({
          title: "Application Received",
          description: "We'll review your application and get back to you soon.",
        });
        if (data.currentlyProcessing === "no") {
          window.location.href = "/pricing-choice.html";
          return;
        }
        setIsSubmitted(true);
        setShowThankYou(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support at 1-505-600-6042.",
        variant: "destructive",
      });
    }
  };

  const toggleProcessingService = (service: string, checked: boolean) => {
    const current = processingServices;
    const updated = checked ? [...current, service] : current.filter((s) => s !== service);
    setValue("processing_services", updated, { shouldDirty: true, shouldTouch: true });
  };

  const toggleValueService = (service: string, checked: boolean) => {
    const current = valueServices;
    const updated = checked ? [...current, service] : current.filter((s) => s !== service);
    setValue("value_services", updated, { shouldDirty: true, shouldTouch: true });
  };

  const togglePosPlatform = (platform: string, checked: boolean) => {
    const current = posPlatforms;
    const updated = checked ? [...current, platform] : current.filter((s) => s !== platform);
    setValue("posPlatform", updated, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
  };

  const steps = [
    { number: 1, title: "Business Info", icon: Building2 },
    { number: 2, title: "Contact Details", icon: User },
    { number: 3, title: "Business Context", icon: Shield },
    { number: 4, title: "Integration & Hardware", icon: Wrench },
    { number: 5, title: "Services", icon: CreditCard },
  ];

  const stepFieldMap: Record<number, (keyof ApplicationFormValues)[]> = {
    1: [
      "company_name",
      "dbaName",
      "address",
      "city",
      "state",
      "zip",
      "website",
      "businessDescription",
      "primaryUseCase",
      "industry",
      "currentlyProcessing",
      "currentProcessor",
    ],
    2: ["first_name", "last_name", "email", "phone"],
    3: ["username", "transactionMix", "avgTicket", "maxTicket", "monthlyVolume", "highRiskProducts", "highRiskDescription", "cardOnFile"],
    4: ["integrationMethod", "posPlatform", "developerInvolved", "integrationTimeline", "needsCardPresent", "preferredDeviceType", "numLocations", "numDevices"],
  };

  const validateAndGoToStep = async (targetStep: number) => {
    const fieldsToValidate = stepFieldMap[currentStep];
    if (fieldsToValidate && fieldsToValidate.length > 0) {
      const isValid = await trigger(fieldsToValidate, { shouldFocus: true });
      if (!isValid) {
        return;
      }
    }
    setCurrentStep(targetStep);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <StarfieldBackground />
      <Header />
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-white px-4 py-1.5 text-sm font-medium text-crimson shadow-sm mb-6">
              Merchant Application
            </span>
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-foreground mb-4">
              Apply to MerchantHaus
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete your merchant application in minutes. Our underwriting team reviews submissions within one business day.
            </p>
          </div>
        </section>
        {/* Application Form Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!isSubmitted ? (
              <>
                {/* Progress Steps */}
                <div className="mb-12">
                  <div className="flex items-center justify-between">
                    {steps.map((step, index) => {
                      const StepIcon = step.icon;
                      return (
                        <div key={step.number} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                                currentStep >= step.number ? "bg-crimson text-white" : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <StepIcon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium mt-2 text-center hidden sm:block">
                              {step.title}
                            </span>
                          </div>
                          {index < steps.length - 1 && (
                            <div
                              className={`h-1 flex-1 mx-2 transition-all ${currentStep > step.number ? "bg-crimson" : "bg-muted"}`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* UPDATED FORM TAG:
                  - Added data-netlify attributes
                  - Added hidden inputs for bot-field and form-name
                */}
                <form
                  name="merchant-apply"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="merchant-apply" />
                  <input type="hidden" name="bot-field" />

                  {/* Step 1: Business Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <Building2 className="w-6 h-6 text-crimson" />
                        <h2 className="text-2xl font-ubuntu font-bold text-foreground">
                          Business Information
                        </h2>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="company_name">Company Name*</Label>
                          <Input
                            id="company_name"
                            autoComplete="organization"
                            aria-invalid={!!errors.company_name}
                            {...register("company_name")}
                          />
                          {errors.company_name && <p className="text-sm text-destructive">{errors.company_name.message}</p>}
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="dbaName">Doing Business As (DBA) Name</Label>
                          <Input
                            id="dbaName"
                            placeholder="Optional"
                            aria-invalid={!!errors.dbaName}
                            {...register("dbaName")}
                          />
                          {errors.dbaName && <p className="text-sm text-destructive">{errors.dbaName.message}</p>}
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Street Address*</Label>
                          <Input
                            id="address"
                            autoComplete="street-address"
                            aria-invalid={!!errors.address}
                            {...register("address")}
                          />
                          {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                          <Input
                            id="address2"
                            placeholder="Suite, Unit, Building, Floor"
                            autoComplete="address-line2"
                            aria-invalid={!!errors.address2}
                            {...register("address2")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City*</Label>
                          <Input
                            id="city"
                            autoComplete="address-level2"
                            aria-invalid={!!errors.city}
                            {...register("city")}
                          />
                          {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State*</Label>
                          <Input
                            id="state"
                            placeholder="CA"
                            autoComplete="address-level1"
                            aria-invalid={!!errors.state}
                            {...register("state")}
                          />
                          {errors.state && <p className="text-sm text-destructive">{errors.state.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">Zip/Postal Code*</Label>
                          <Input
                            id="zip"
                            autoComplete="postal-code"
                            inputMode="numeric"
                            aria-invalid={!!errors.zip}
                            {...register("zip")}
                          />
                          {errors.zip && <p className="text-sm text-destructive">{errors.zip.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website (Optional)</Label>
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://example.com"
                            autoComplete="url"
                            aria-invalid={!!errors.website}
                            {...register("website")}
                          />
                          {errors.website && <p className="text-sm text-destructive">{errors.website.message}</p>}
                        </div>
                      </div>
                      <div className="space-y-4 pt-2">
                        <h3 className="font-semibold text-foreground">Business / Use-Case Context</h3>
                        <div className="space-y-2">
                          <Label htmlFor="businessDescription">Briefly describe your business and what you sell*</Label>
                          <textarea
                            id="businessDescription"
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            aria-invalid={!!errors.businessDescription}
                            {...register("businessDescription")}
                          />
                          {errors.businessDescription && (
                            <p className="text-sm text-destructive">{errors.businessDescription.message}</p>
                          )}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="primaryUseCase">How will you use payments with Merchant Haus?*</Label>
                            <select
                              id="primaryUseCase"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                              aria-invalid={!!errors.primaryUseCase}
                              defaultValue=""
                              {...register("primaryUseCase")}
                            >
                              <option value="" disabled>
                                Select an option
                              </option>
                              <option>In-store retail</option>
                              <option>E-commerce / online checkout</option>
                              <option>Invoices / pay-by-link</option>
                              <option>SaaS or platform billing</option>
                              <option>Unattended / kiosk</option>
                              <option>Other</option>
                            </select>
                            {errors.primaryUseCase && (
                              <p className="text-sm text-destructive">{errors.primaryUseCase.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry / business category*</Label>
                            <select
                              id="industry"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                              aria-invalid={!!errors.industry}
                              defaultValue=""
                              {...register("industry")}
                            >
                              <option value="" disabled>
                                Select an industry
                              </option>
                              <option>Retail</option>
                              <option>Restaurant / Food & Beverage</option>
                              <option>Professional Services</option>
                              <option>Healthcare</option>
                              <option>Hospitality</option>
                              <option>Non-profit</option>
                              <option>Software / SaaS</option>
                              <option>Transportation / Logistics</option>
                              <option>Other</option>
                            </select>
                            {errors.industry && <p className="text-sm text-destructive">{errors.industry.message}</p>}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Do you currently have your own payment processor?*</Label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {[
                              { label: "Yes", value: "yes" },
                              { label: "No", value: "no" },
                            ].map((option) => (
                              <label
                                key={option.value}
                                htmlFor={`currentlyProcessing-${option.value}`}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  currentlyProcessing === option.value
                                    ? "border-crimson bg-crimson/5"
                                    : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  id={`currentlyProcessing-${option.value}`}
                                  value={option.value}
                                  className="sr-only"
                                  {...register("currentlyProcessing")}
                                />
                                <span className="text-sm font-medium text-foreground">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.currentlyProcessing && (
                            <p className="text-sm text-destructive">{errors.currentlyProcessing.message}</p>
                          )}
                        </div>
                        {currentlyProcessing === "yes" && (
                          <div className="space-y-2">
                            <Label htmlFor="currentProcessor">If yes, who is your current processor?</Label>
                            <Input
                              id="currentProcessor"
                              placeholder="e.g., Stripe, Worldpay"
                              aria-invalid={!!errors.currentProcessor}
                              {...register("currentProcessor")}
                            />
                            {errors.currentProcessor && (
                              <p className="text-sm text-destructive">{errors.currentProcessor.message}</p>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex justify-end pt-4">
                        <Button
                          type="button"
                          onClick={() => {
                            void validateAndGoToStep(2);
                          }}
                          className="bg-crimson hover:bg-crimson/90"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Step 2: Contact Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <User className="w-6 h-6 text-crimson" />
                        <h2 className="text-2xl font-ubuntu font-bold text-foreground">Primary Contact</h2>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first_name">First Name*</Label>
                          <Input
                            id="first_name"
                            autoComplete="given-name"
                            aria-invalid={!!errors.first_name}
                            {...register("first_name")}
                          />
                          {errors.first_name && <p className="text-sm text-destructive">{errors.first_name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last_name">Last Name*</Label>
                          <Input
                            id="last_name"
                            autoComplete="family-name"
                            aria-invalid={!!errors.last_name}
                            {...register("last_name")}
                          />
                          {errors.last_name && <p className="text-sm text-destructive">{errors.last_name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address*</Label>
                          <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            {...register("email")}
                          />
                          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number*</Label>
                          <Input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            inputMode="tel"
                            aria-invalid={!!errors.phone}
                            {...register("phone")}
                          />
                          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="fax">Fax Number (Optional)</Label>
                          <Input id="fax" type="tel" inputMode="tel" aria-invalid={!!errors.fax} {...register("fax")} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredContactMethod">Preferred contact method</Label>
                          <select
                            id="preferredContactMethod"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                            aria-invalid={!!errors.preferredContactMethod}
                            defaultValue=""
                            {...register("preferredContactMethod")}
                          >
                            <option value="">No preference</option>
                            <option>Email</option>
                            <option>Phone call</option>
                            <option>SMS/Text</option>
                          </select>
                          {errors.preferredContactMethod && (
                            <p className="text-sm text-destructive">{errors.preferredContactMethod.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bestTimeToReach">Best time to reach you</Label>
                          <Input
                            id="bestTimeToReach"
                            placeholder="Optional"
                            aria-invalid={!!errors.bestTimeToReach}
                            {...register("bestTimeToReach")}
                          />
                          {errors.bestTimeToReach && (
                            <p className="text-sm text-destructive">{errors.bestTimeToReach.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                          Back
                        </Button>
                        <Button type="button" onClick={() => { void validateAndGoToStep(3); }} className="bg-crimson hover:bg-crimson/90">
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Step 3: Account Setup & Processing Profile */}
                  {currentStep === 3 && (
                    <div className="space-y-8 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-6 h-6 text-crimson" />
                        <h2 className="text-2xl font-ubuntu font-bold text-foreground">Account Setup</h2>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Primary Username*</Label>
                        <Input
                          id="username"
                          placeholder="alphanumeric only"
                          autoComplete="username"
                          aria-invalid={!!errors.username}
                          {...register("username")}
                        />
                        {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
                        <p className="text-xs text-muted-foreground">This will be your login username. Letters and numbers only.</p>
                      </div>
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="font-semibold text-foreground">Processing Profile (Estimates Only)</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="avgTicket">Average ticket size (USD)</Label>
                            <Input
                              id="avgTicket"
                              type="number"
                              inputMode="decimal"
                              aria-invalid={!!errors.avgTicket}
                              {...register("avgTicket", { valueAsNumber: true })}
                            />
                            {errors.avgTicket && <p className="text-sm text-destructive">{errors.avgTicket.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="maxTicket">Largest typical ticket size (USD)</Label>
                            <Input
                              id="maxTicket"
                              type="number"
                              inputMode="decimal"
                              aria-invalid={!!errors.maxTicket}
                              {...register("maxTicket", { valueAsNumber: true })}
                            />
                            {errors.maxTicket && <p className="text-sm text-destructive">{errors.maxTicket.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="monthlyVolume">Estimated monthly card volume (USD)</Label>
                            <Input
                              id="monthlyVolume"
                              type="number"
                              inputMode="decimal"
                              aria-invalid={!!errors.monthlyVolume}
                              {...register("monthlyVolume", { valueAsNumber: true })}
                            />
                            {errors.monthlyVolume && <p className="text-sm text-destructive">{errors.monthlyVolume.message}</p>}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="transactionMix">Estimated split of card-present vs card-not-present*</Label>
                          <select
                            id="transactionMix"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                            aria-invalid={!!errors.transactionMix}
                            defaultValue=""
                            {...register("transactionMix")}
                          >
                            <option value="" disabled>
                              Select your transaction mix
                            </option>
                            <option>100% in-person (card-present)</option>
                            <option>Mostly in-person (75% CP / 25% CNP)</option>
                            <option>Mixed (50% CP / 50% CNP)</option>
                            <option>Mostly online (25% CP / 75% CNP)</option>
                            <option>100% online (card-not-present)</option>
                          </select>
                          {errors.transactionMix && <p className="text-sm text-destructive">{errors.transactionMix.message}</p>}
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="font-semibold text-foreground">Risk / Product Flags</h3>
                        <div className="space-y-2">
                          <Label>Do you sell any regulated or higher-risk products/services?*</Label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map((option) => (
                              <label
                                key={option.value}
                                htmlFor={`highRiskProducts-${option.value}`}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  highRiskProducts === option.value ? "border-crimson bg-crimson/5" : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  id={`highRiskProducts-${option.value}`}
                                  value={option.value}
                                  className="sr-only"
                                  {...register("highRiskProducts")}
                                />
                                <span className="text-sm font-medium text-foreground">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.highRiskProducts && <p className="text-sm text-destructive">{errors.highRiskProducts.message}</p>}
                        </div>
                        {highRiskProducts === "yes" && (
                          <div className="space-y-2">
                            <Label htmlFor="highRiskDescription">
                              Briefly describe any regulated or higher-risk products/services.
                            </Label>
                            <textarea
                              id="highRiskDescription"
                              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              aria-invalid={!!errors.highRiskDescription}
                              {...register("highRiskDescription")}
                            />
                            {errors.highRiskDescription && (
                              <p className="text-sm text-destructive">{errors.highRiskDescription.message}</p>
                            )}
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label>Will you store cards on file for subscriptions or repeat billing?</Label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map((option) => (
                              <label
                                key={option.value}
                                htmlFor={`cardOnFile-${option.value}`}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  watch("cardOnFile") === option.value ? "border-crimson bg-crimson/5" : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  id={`cardOnFile-${option.value}`}
                                  value={option.value}
                                  className="sr-only"
                                  {...register("cardOnFile")}
                                />
                                <span className="text-sm font-medium text-foreground">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.cardOnFile && <p className="text-sm text-destructive">{errors.cardOnFile.message}</p>}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            void validateAndGoToStep(4);
                          }}
                          className="bg-crimson hover:bg-crimson/90"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Step 4: Integration & Hardware */}
                  {currentStep === 4 && (
                    <div className="space-y-8 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <Wrench className="w-6 h-6 text-crimson" />
                        <h2 className="text-2xl font-ubuntu font-bold text-foreground">Integration & Technical Setup</h2>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="integrationMethod">How do you plan to integrate payments?*</Label>
                          <select
                            id="integrationMethod"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                            aria-invalid={!!errors.integrationMethod}
                            defaultValue=""
                            {...register("integrationMethod")}
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            <option>Hosted Payment Page / pay-by-link</option>
                            <option>Collect.js or API integration</option>
                            <option>Customer Present Cloud API (card-present)</option>
                            <option>Virtual Terminal only</option>
                            <option>Mobile app SDK</option>
                            <option>Unattended / kiosk</option>
                            <option>Not sure yet</option>
                          </select>
                          {errors.integrationMethod && <p className="text-sm text-destructive">{errors.integrationMethod.message}</p>}
                        </div>
                        <div className="space-y-3">
                          <Label>What platform will you run your POS/app on?*</Label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {["iOS", "Android", "Web (browser)", "Windows", "Linux", "Other"].map((platform) => (
                              <div
                                key={platform}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  posPlatforms.includes(platform) ? "border-crimson bg-crimson/5" : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <Checkbox
                                  id={`pos-${platform}`}
                                  checked={posPlatforms.includes(platform)}
                                  onCheckedChange={(checked) => togglePosPlatform(platform, checked === true)}
                                />
                                <Label htmlFor={`pos-${platform}`} className="cursor-pointer flex-1">
                                  {platform}
                                </Label>
                              </div>
                            ))}
                          </div>
                          {errors.posPlatform && <p className="text-sm text-destructive">{errors.posPlatform.message}</p>}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label>Do you have a developer or technical team?</Label>
                            <div className="grid gap-3 sm:grid-cols-2">
                              {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map((option) => (
                                <label
                                  key={option.value}
                                  htmlFor={`developerInvolved-${option.value}`}
                                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                    watch("developerInvolved") === option.value
                                      ? "border-crimson bg-crimson/5"
                                      : "border-border hover:border-crimson/50"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    id={`developerInvolved-${option.value}`}
                                    value={option.value}
                                    className="sr-only"
                                    {...register("developerInvolved")}
                                  />
                                  <span className="text-sm font-medium text-foreground">{option.label}</span>
                                </label>
                              ))}
                            </div>
                            {errors.developerInvolved && <p className="text-sm text-destructive">{errors.developerInvolved.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="integrationTimeline">Desired go-live timeline</Label>
                            <select
                              id="integrationTimeline"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                              aria-invalid={!!errors.integrationTimeline}
                              defaultValue=""
                              {...register("integrationTimeline")}
                            >
                              <option value="">Select a timeline</option>
                              <option>ASAP</option>
                              <option>Within 2–4 weeks</option>
                              <option>Within 1–3 months</option>
                              <option>3+ months</option>
                            </select>
                            {errors.integrationTimeline && <p className="text-sm text-destructive">{errors.integrationTimeline.message}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="font-semibold text-foreground">Hardware / Device Needs</h3>
                        <div className="space-y-2">
                          <Label>Do you need to accept in-person (card-present) payments?*</Label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }].map((option) => (
                              <label
                                key={option.value}
                                htmlFor={`needsCardPresent-${option.value}`}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  needsCardPresent === option.value ? "border-crimson bg-crimson/5" : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <input
                                  type="radio"
                                  id={`needsCardPresent-${option.value}`}
                                  value={option.value}
                                  className="sr-only"
                                  {...register("needsCardPresent")}
                                />
                                <span className="text-sm font-medium text-foreground">{option.label}</span>
                              </label>
                            ))}
                          </div>
                          {errors.needsCardPresent && <p className="text-sm text-destructive">{errors.needsCardPresent.message}</p>}
                        </div>
                        {needsCardPresent === "yes" && (
                          <div className="space-y-2">
                            <Label htmlFor="preferredDeviceType">Which in-person device type best fits your setup?</Label>
                            <select
                              id="preferredDeviceType"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 aria-[invalid=true]:border-[hsl(var(--destructive))] aria-[invalid=true]:bg-[hsl(var(--attention))]/10 aria-[invalid=true]:focus-visible:ring-[hsl(var(--destructive))]"
                              aria-invalid={!!errors.preferredDeviceType}
                              defaultValue=""
                              {...register("preferredDeviceType")}
                            >
                              <option value="" disabled>
                                Select a device type
                              </option>
                              <option>Countertop terminal</option>
                              <option>Mobile reader</option>
                              <option>Unattended / kiosk</option>
                              <option>Not sure</option>
                            </select>
                            {errors.preferredDeviceType && <p className="text-sm text-destructive">{errors.preferredDeviceType.message}</p>}
                          </div>
                        )}
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="numLocations">How many locations will be accepting payments?</Label>
                            <Input
                              id="numLocations"
                              type="number"
                              inputMode="numeric"
                              aria-invalid={!!errors.numLocations}
                              {...register("numLocations", { valueAsNumber: true })}
                            />
                            {errors.numLocations && <p className="text-sm text-destructive">{errors.numLocations.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="numDevices">How many devices do you expect to need?</Label>
                            <Input
                              id="numDevices"
                              type="number"
                              inputMode="numeric"
                              aria-invalid={!!errors.numDevices}
                              {...register("numDevices", { valueAsNumber: true })}
                            />
                            {errors.numDevices && <p className="text-sm text-destructive">{errors.numDevices.message}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(3)}>
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            void validateAndGoToStep(5);
                          }}
                          className="bg-crimson hover:bg-crimson/90"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Step 5: Services & Agreements */}
                  {currentStep === 5 && (
                    <div className="space-y-6 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <CreditCard className="w-6 h-6 text-crimson" />
                        <h2 className="text-2xl font-ubuntu font-bold text-foreground">Select Services</h2>
                      </div>
                      <div className="space-y-6">
                        {/* Processing Services */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground">Processing Services</h3>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {["Credit Card", "ACH / eCheck", "Cash"].map((service) => (
                              <div
                                key={service}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  processingServices.includes(service) ? "border-crimson bg-crimson/5" : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <Checkbox
                                  id={`processing-${service}`}
                                  checked={processingServices.includes(service)}
                                  onCheckedChange={(checked) => toggleProcessingService(service, checked === true)}
                                />
                                <Label htmlFor={`processing-${service}`} className="cursor-pointer flex-1">
                                  {service}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Value-added Services */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground">Value-added Services</h3>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {["Encryption", "Invoice", "Level III Advantage", "Mobile Reader", "Vault Storage"].map((service) => (
                              <div
                                key={service}
                                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                                  valueServices.includes(service) ? "border-crimson bg-crimson/5" : "border-border hover:border-crimson/50"
                                }`}
                              >
                                <Checkbox
                                  id={`value-${service}`}
                                  checked={valueServices.includes(service)}
                                  onCheckedChange={(checked) => toggleValueService(service, checked === true)}
                                />
                                <Label htmlFor={`value-${service}`} className="cursor-pointer flex-1">
                                  {service}
                                  {service === "Encryption" && <span className="text-xs text-muted-foreground block">Encrypted Devices</span>}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Terms Agreement */}
                        <div className="pt-6 border-t space-y-4">
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                            <Checkbox
                              id="agree_to_terms"
                              checked={watch("agree_to_terms")}
                              onCheckedChange={(checked) => setValue("agree_to_terms", checked === true, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
                            />
                            <Label htmlFor="agree_to_terms" className="cursor-pointer leading-relaxed">
                              I agree to the {" "}
                              <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-crimson hover:underline font-semibold">
                                Terms and Conditions
                              </a>{" "}
                              and understand that MerchantHaus will process my application according to these terms.
                            </Label>
                          </div>
                          {errors.agree_to_terms && <p className="text-sm text-destructive">{errors.agree_to_terms.message}</p>}
                          <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                            <Checkbox
                              id="agree_to_security_policy"
                              checked={watch("agree_to_security_policy")}
                              onCheckedChange={(checked) => setValue("agree_to_security_policy", checked === true, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
                            />
                            <Label htmlFor="agree_to_security_policy" className="cursor-pointer leading-relaxed">
                              I agree to the {" "}
                              <a href="/security" target="_blank" rel="noopener noreferrer" className="text-crimson hover:underline font-semibold">
                                Security Policy
                              </a>
                              .
                            </Label>
                          </div>
                          {errors.agree_to_security_policy && <p className="text-sm text-destructive">{errors.agree_to_security_policy.message}</p>}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <Button type="button" variant="outline" onClick={() => setCurrentStep(4)}>
                          Back
                        </Button>
                        <Button type="submit" disabled={isSubmitting} className="bg-crimson hover:bg-crimson/90 px-8">
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-12 shadow-sm text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground">Application Received!</h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Thank you for applying to MerchantHaus. Our underwriting team will review your application and contact you within one business day.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <a href="/">Return to Home</a>
                  </Button>
                  <Button asChild className="bg-crimson hover:bg-crimson/90">
                    <a href="tel:15056006042">Call 1-505-600-6042</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-ubuntu font-bold text-foreground text-center mb-8">What Happens Next?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-crimson">1</span>
                </div>
                <h3 className="font-semibold text-foreground">Review</h3>
                <p className="text-sm text-muted-foreground">Our underwriting team reviews your submission for alignment and compliance</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-crimson">2</span>
                </div>
                <h3 className="font-semibold text-foreground">Contact</h3>
                <p className="text-sm text-muted-foreground">A specialist reaches out to confirm documents and answer questions</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-crimson">3</span>
                </div>
                <h3 className="font-semibold text-foreground">Activate</h3>
                <p className="text-sm text-muted-foreground">Once approved, receive credentials and start processing payments</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ThankYouDialog
        open={showThankYou}
        onOpenChange={(open) => {
          if (!open) {
            setShowThankYou(false);
          }
        }}
        title="Application Received!"
        description="Thank you for applying to MerchantHaus."
        body="Our underwriting team will review your application and contact you within one business day."
      />
    </div>
  );
};

export default Apply;
