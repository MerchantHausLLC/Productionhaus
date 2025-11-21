import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { formDataToQueryString } from "@/lib/netlify";
import { RequiredIndicator } from "./ui/required-indicator";

const applicationFormSchema = z.object({
  company_name: z.string().trim().min(1, "Company name is required").max(100),
  address: z.string().trim().min(1, "Address is required").max(200),
  address2: z.string().trim().max(100).optional(),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(50),
  zip: z.string().trim().min(1, "Zip code is required").max(20),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  first_name: z.string().trim().min(1, "First name is required").max(50),
  last_name: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  fax: z.string().trim().max(20).optional(),
  username: z
    .string()
    .trim()
    .min(1, "Username is required")
    .max(50)
    .regex(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),
  hasCurrentProcessor: z.enum(["yes", "no"], {
    required_error: "Please tell us if you have a current processor",
  }),
  currentProcessorName: z.string().trim().max(100).optional(),
  bankAccountHolderName: z.string().trim().min(1, "Account holder name is required").max(100),
  bankName: z.string().trim().min(1, "Bank name is required").max(100),
  bankAccountType: z.enum(["checking", "savings"], {
    required_error: "Bank account type is required",
  }),
  bankRoutingNumber: z
    .string()
    .trim()
    .regex(/^\d{4,11}$/i, "Routing number should be 4-11 digits"),
  bankAccountNumber: z
    .string()
    .trim()
    .regex(/^\d{6,20}$/i, "Account number should be 6-20 digits"),
  processing_services: z.array(z.string()).optional(),
  value_services: z.array(z.string()).optional(),
  agree_to_terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions",
  }),
  agree_to_security_policy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Security Policy",
  }),
}).superRefine((data, ctx) => {
  if (data.hasCurrentProcessor === "yes" && !data.currentProcessorName?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["currentProcessorName"],
      message: "Current processor name is required",
    });
  }
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(typeof reader.result === "string" ? reader.result : "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

interface MerchantApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MerchantApplicationDialog({
  open,
  onOpenChange,
}: MerchantApplicationDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bankVerificationDocument, setBankVerificationDocument] = useState<File | null>(null);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      processing_services: [],
      value_services: [],
      agree_to_terms: false,
      agree_to_security_policy: false,
    },
  });

  const processingServices = watch("processing_services") || [];
  const valueServices = watch("value_services") || [];
  const hasCurrentProcessor = watch("hasCurrentProcessor");

  const onSubmit = async (data: ApplicationFormValues) => {
    try {
      const formData = new FormData();
      formData.append("form-name", "merchant-apply-dialog");
      formData.append("bot-field", "");
      
      // Add hidden fields
      formData.append("country", "United States");
      formData.append("timezone", "(GMT-08:00) Pacific Time (US & Canada)");
      formData.append("language", "English");
      
      // Add all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item));
        } else if (value !== undefined && value !== null) {
          if (typeof value === "boolean") {
            formData.append(key, value ? "yes" : "no");
          } else {
            formData.append(key, String(value));
          }
        }
      });

      if (bankVerificationDocument) {
        const encodedDocument = await fileToBase64(bankVerificationDocument);
        formData.append("bankVerificationDocument_name", bankVerificationDocument.name);
        formData.append("bankVerificationDocument", encodedDocument);
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToQueryString(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Application Submitted",
          description: "We'll review your application and get back to you soon.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    reset();
    setIsSubmitted(false);
    setBankVerificationDocument(null);
    onOpenChange(false);
  };

  const toggleProcessingService = (service: string, checked: boolean) => {
    const updated = checked
      ? [...processingServices, service]
      : processingServices.filter((s) => s !== service);
    setValue("processing_services", updated, { shouldDirty: true, shouldTouch: true });
  };

  const toggleValueService = (service: string, checked: boolean) => {
    const updated = checked
      ? [...valueServices, service]
      : valueServices.filter((s) => s !== service);
    setValue("value_services", updated, { shouldDirty: true, shouldTouch: true });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-ubuntu text-foreground">
            {isSubmitted ? "Application Received!" : "Merchant Application"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isSubmitted
              ? "Thank you for applying. We'll review your information and contact you soon."
              : "Complete the form below to start processing payments with MerchantHaus."}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <p className="text-center text-foreground">
              Your application has been submitted successfully. Our team will review it and reach out to you within 1-2 business days.
            </p>
            <Button onClick={handleClose} className="mt-4">
              Close
            </Button>
          </div>
        ) : (
          <form
            name="merchant-apply-dialog"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="merchant-apply-dialog" />
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="agree_to_terms"
              value={watch("agree_to_terms") ? "yes" : "no"}
            />
            <input
              type="hidden"
              name="agree_to_security_policy"
              value={watch("agree_to_security_policy") ? "yes" : "no"}
            />
            {/* Hidden fields for banking details to ensure Netlify Forms captures them */}
            <input type="hidden" name="bankAccountHolderName" value={watch("bankAccountHolderName") || ""} />
            <input type="hidden" name="bankName" value={watch("bankName") || ""} />
            <input type="hidden" name="bankAccountType" value={watch("bankAccountType") || ""} />
            <input type="hidden" name="bankRoutingNumber" value={watch("bankRoutingNumber") || ""} />
            <input type="hidden" name="bankAccountNumber" value={watch("bankAccountNumber") || ""} />
            {/* Merchant Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-crimson">Merchant Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company_name" className="flex items-center gap-2 text-crimson">
                    Company Name
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="company_name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.company_name}
                    {...register("company_name")}
                  />
                  {errors.company_name && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.company_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2 text-crimson">
                    Address
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="address"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.address}
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.address.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address2">Address 2</Label>
                  <Input id="address2" {...register("address2")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2 text-crimson">
                    City
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="city"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.city}
                    {...register("city")}
                  />
                  {errors.city && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.city.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="flex items-center gap-2 text-crimson">
                    State
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="state"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.state}
                    {...register("state")}
                  />
                  {errors.state && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.state.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip" className="flex items-center gap-2 text-crimson">
                    Zip/Postal Code
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="zip"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.zip}
                    {...register("zip")}
                  />
                  {errors.zip && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.zip.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" placeholder="https://example.com" {...register("website")} />
                  {errors.website && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.website.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Current Processor */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Current Processor</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <Label className="block">Do you currently have your own payment processor?*</Label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={option.value}
                          {...register("hasCurrentProcessor")}
                          onChange={(e) => {
                            register("hasCurrentProcessor").onChange(e);
                            if (e.target.value === "no") {
                              setValue("currentProcessorName", "", { shouldDirty: true, shouldTouch: true });
                            }
                          }}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.hasCurrentProcessor && (
                    <p className="text-sm text-destructive">{errors.hasCurrentProcessor.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentProcessorName">Who is your current processor?</Label>
                  <Input
                    id="currentProcessorName"
                    placeholder="e.g., Stripe, Adyen"
                    disabled={hasCurrentProcessor !== "yes"}
                    {...register("currentProcessorName")}
                  />
                  {errors.currentProcessorName && (
                    <p className="text-sm text-destructive">{errors.currentProcessorName.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Company Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-crimson">Company Contact (Primary User)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name" className="flex items-center gap-2 text-crimson">
                    First Name
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="first_name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.first_name}
                    {...register("first_name")}
                  />
                  {errors.first_name && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.first_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="flex items-center gap-2 text-crimson">
                    Last Name
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="last_name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.last_name}
                    {...register("last_name")}
                  />
                  {errors.last_name && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.last_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-crimson">
                    Email Address
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-crimson">
                    Phone Number
                    <RequiredIndicator />
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-[hsl(var(--destructive))]">{errors.phone.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fax">Fax Number</Label>
                  <Input id="fax" type="tel" {...register("fax")} />
                </div>
              </div>
            </div>

            {/* Banking Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Banking Details</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="bankAccountHolderName">Account Holder Name*</Label>
                  <Input id="bankAccountHolderName" {...register("bankAccountHolderName")} />
                  {errors.bankAccountHolderName && (
                    <p className="text-sm text-destructive">{errors.bankAccountHolderName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name*</Label>
                  <Input id="bankName" autoComplete="organization" {...register("bankName")} />
                  {errors.bankName && <p className="text-sm text-destructive">{errors.bankName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankAccountType">Account Type*</Label>
                  <select
                    id="bankAccountType"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    {...register("bankAccountType")}
                  >
                    <option value="">Select account type</option>
                    <option value="checking">Checking / Current</option>
                    <option value="savings">Savings</option>
                  </select>
                  {errors.bankAccountType && (
                    <p className="text-sm text-destructive">{errors.bankAccountType.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankRoutingNumber">Branch Code / Routing Number*</Label>
                  <Input id="bankRoutingNumber" inputMode="numeric" {...register("bankRoutingNumber")} />
                  {errors.bankRoutingNumber && (
                    <p className="text-sm text-destructive">{errors.bankRoutingNumber.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankAccountNumber">Bank Account Number*</Label>
                  <Input id="bankAccountNumber" inputMode="numeric" {...register("bankAccountNumber")} />
                  {errors.bankAccountNumber && (
                    <p className="text-sm text-destructive">{errors.bankAccountNumber.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankVerificationDocument">
                  Voided cheque or bank letter (optional but recommended)
                </Label>
                <Input
                  id="bankVerificationDocument"
                  name="bankVerificationDocument"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    setBankVerificationDocument(file ?? null);
                  }}
                />
              </div>
            </div>

            {/* Account Setup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-crimson">Account Setup</h3>
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2 text-crimson">
                  Primary Username
                  <RequiredIndicator />
                </Label>
                <Input
                  id="username"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.username}
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm text-[hsl(var(--destructive))]">{errors.username.message}</p>
                )}
              </div>
            </div>

            {/* Processing Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-crimson">Processing Services</h3>
              <div className="space-y-2">
                {["Credit Card", "ACH / eCheck", "Cash"].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={`processing-${service}`}
                      checked={processingServices.includes(service)}
                      onCheckedChange={(checked) =>
                        toggleProcessingService(service, checked === true)
                      }
                    />
                    <Label htmlFor={`processing-${service}`} className="cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Value-added Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-crimson">Value-added Services</h3>
              <div className="space-y-2">
                {["Encryption", "Invoice", "Level III Advantage", "Mobile Reader", "Vault Storage"].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={`value-${service}`}
                      checked={valueServices.includes(service)}
                      onCheckedChange={(checked) =>
                        toggleValueService(service, checked === true)
                      }
                    />
                    <Label htmlFor={`value-${service}`} className="cursor-pointer">
                      {service}
                      {service === "Encryption" && " (Encrypted Devices)"}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms and Conditions Agreement */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agree_to_terms"
                  checked={watch("agree_to_terms")}
                  onCheckedChange={(checked) =>
                    setValue("agree_to_terms", checked === true, {
                      shouldDirty: true,
                      shouldTouch: true,
                      shouldValidate: true,
                    })
                  }
                />
                <Label htmlFor="agree_to_terms" className="cursor-pointer leading-relaxed text-sm text-crimson flex flex-wrap gap-2 items-center">
                  I agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson hover:underline font-semibold"
                  >
                    Terms and Conditions
                  </a>
                  {" "}and understand that MerchantHaus will process my application according to these terms.
                  <RequiredIndicator />
                </Label>
              </div>
              {errors.agree_to_terms && (
                <p className="text-sm text-[hsl(var(--destructive))]">{errors.agree_to_terms.message}</p>
              )}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agree_to_security_policy"
                  checked={watch("agree_to_security_policy")}
                  onCheckedChange={(checked) =>
                    setValue("agree_to_security_policy", checked === true, {
                      shouldDirty: true,
                      shouldTouch: true,
                      shouldValidate: true,
                    })
                  }
                />
                <Label htmlFor="agree_to_security_policy" className="cursor-pointer leading-relaxed text-sm">
                  I have read and agree to the{" "}
                  <a
                    href="/security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Security Policy
                  </a>
                  .
                </Label>
              </div>
              {errors.agree_to_security_policy && (
                <p className="text-sm text-destructive">{errors.agree_to_security_policy.message}</p>
              )}
            </div>

            {processingServices.map((service) => (
              <input
                key={`dialog-processing-${service}`}
                type="hidden"
                name="processing_services[]"
                value={service}
              />
            ))}
            {valueServices.map((service) => (
              <input
                key={`dialog-value-${service}`}
                type="hidden"
                name="value_services[]"
                value={service}
              />
            ))}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
