import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export type MerchantApplicationFormProps = {
  mode?: "intake" | "full";
  excludeBankFields?: boolean;
  onSubmitted?: () => void;
};

export type MerchantApplicationFormValues = {
  company_name: string;
  address: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  website?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  fax?: string;
  username: string;
  hasCurrentProcessor: "yes" | "no" | "";
  currentProcessorName?: string;
  processing_services: string[];
  value_services: string[];
  agree_to_terms: boolean;
  agree_to_security_policy: boolean;
};

const processingOptions = ["Credit Card", "ACH / eCheck", "Cash"] as const;
const valueServiceOptions = [
  "Encryption",
  "Invoice",
  "Level III Advantage",
  "Mobile Reader",
  "Vault Storage",
] as const;

export const MerchantApplicationForm: React.FC<MerchantApplicationFormProps> = ({
  onSubmitted,
}) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MerchantApplicationFormValues>({
    defaultValues: {
      hasCurrentProcessor: "",
      processing_services: [],
      value_services: [],
      agree_to_terms: false,
      agree_to_security_policy: false,
    },
  });

  const hasCurrentProcessor = watch("hasCurrentProcessor");
  const processing_services = watch("processing_services") || [];
  const value_services = watch("value_services") || [];

  const toggleArrayField = (
    field: "processing_services" | "value_services",
    option: string,
    checked: boolean,
  ) => {
    const current = field === "processing_services" ? processing_services : value_services;
    const updated = checked
      ? [...current, option]
      : current.filter((item) => item !== option);
    setValue(field, updated, { shouldDirty: true, shouldTouch: true });
  };

  // Submit handler with error handling for form submission
  const onSubmit = async (values: MerchantApplicationFormValues) => {
    try {
      const payload: MerchantApplicationFormValues = {
        ...values,
        currentProcessorName:
          values.hasCurrentProcessor === "yes" ? values.currentProcessorName : undefined,
        processing_services: values.processing_services || [],
        value_services: values.value_services || [],
      };

      const response = await fetch("/.netlify/functions/submit-merchant-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "We'll review your application and get back to you soon.",
        });
        onSubmitted?.();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support at 1-505-600-6042.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-sm font-medium">Business Name*</label>
          <input
            {...register("company_name", { required: "Business name is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="e.g. Acme Corp"
          />
          {errors.company_name && (
            <p className="text-xs text-red-500">{errors.company_name.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Website</label>
          <input
            type="url"
            {...register("website")}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="https://"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Address*</label>
          <input
            {...register("address", { required: "Address is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Street address"
          />
          {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Address 2</label>
          <input
            {...register("address2")}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Suite, unit, etc."
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">City*</label>
          <input
            {...register("city", { required: "City is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">State / Province*</label>
          <input
            {...register("state", { required: "State is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.state && <p className="text-xs text-red-500">{errors.state.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Postal Code*</label>
          <input
            {...register("zip", { required: "Postal code is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.zip && <p className="text-xs text-red-500">{errors.zip.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Phone*</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Fax</label>
          <input
            type="tel"
            {...register("fax")}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Contact First Name*</label>
          <input
            {...register("first_name", { required: "First name is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.first_name && <p className="text-xs text-red-500">{errors.first_name.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Contact Last Name*</label>
          <input
            {...register("last_name", { required: "Last name is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.last_name && <p className="text-xs text-red-500">{errors.last_name.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Desired Username*</label>
          <input
            {...register("username", { required: "Username is required" })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.username && <p className="text-xs text-red-500">{errors.username.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Do you currently have a processor account?*</label>
        <select
          {...register("hasCurrentProcessor", { required: "Please select an option" })}
          className="w-full border rounded px-3 py-2 text-sm bg-white"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <p className="text-xs text-gray-500">e.g. Chase, TSYS, First Data, etc.</p>
        {errors.hasCurrentProcessor && (
          <p className="text-xs text-red-500">{errors.hasCurrentProcessor.message}</p>
        )}
      </div>

      {hasCurrentProcessor === "yes" && (
        <div className="space-y-1">
          <label className="block text-sm font-medium">Who is your current processor?</label>
          <input
            type="text"
            {...register("currentProcessorName", {
              required: "Please indicate your current processor",
            })}
            placeholder="e.g. Chase, TSYS, First Data"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          {errors.currentProcessorName && (
            <p className="text-xs text-red-500">{errors.currentProcessorName.message}</p>
          )}
        </div>
      )}

      <div className="space-y-3">
        <label className="block text-sm font-semibold">Processing Services</label>
        <div className="grid gap-2 sm:grid-cols-2">
          {processingOptions.map((service) => (
            <label
              key={service}
              className={`flex items-center space-x-3 p-3 rounded border cursor-pointer transition-colors ${
                processing_services.includes(service)
                  ? "border-black bg-gray-50"
                  : "border-gray-200 hover:border-black"
              }`}
            >
              <input
                type="checkbox"
                checked={processing_services.includes(service)}
                onChange={(event) =>
                  toggleArrayField("processing_services", service, event.target.checked)
                }
                className="h-4 w-4"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-semibold">Value-added Services</label>
        <div className="grid gap-2 sm:grid-cols-2">
          {valueServiceOptions.map((service) => (
            <label
              key={service}
              className={`flex items-center space-x-3 p-3 rounded border cursor-pointer transition-colors ${
                value_services.includes(service)
                  ? "border-black bg-gray-50"
                  : "border-gray-200 hover:border-black"
              }`}
            >
              <input
                type="checkbox"
                checked={value_services.includes(service)}
                onChange={(event) =>
                  toggleArrayField("value_services", service, event.target.checked)
                }
                className="h-4 w-4"
              />
              <span className="text-sm">
                {service}
                {service === "Encryption" && (
                  <span className="block text-xs text-gray-500">Encrypted Devices</span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3 border-t pt-4">
        <label className="flex items-start space-x-3 text-sm">
          <input
            type="checkbox"
            {...register("agree_to_terms", { required: "You must agree to the Terms and Conditions" })}
            className="mt-1 h-4 w-4"
          />
          <span>
            I agree to the
            <a
              href="/terms"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Terms and Conditions
            </a>
            .
          </span>
        </label>
        {errors.agree_to_terms && (
          <p className="text-xs text-red-500">{errors.agree_to_terms.message}</p>
        )}

        <label className="flex items-start space-x-3 text-sm">
          <input
            type="checkbox"
            {...register("agree_to_security_policy", {
              required: "You must agree to the Security Policy",
            })}
            className="mt-1 h-4 w-4"
          />
          <span>
            I agree to the
            <a
              href="/security"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              Security Policy
            </a>
            .
          </span>
        </label>
        {errors.agree_to_security_policy && (
          <p className="text-xs text-red-500">{errors.agree_to_security_policy.message}</p>
        )}
      </div>

      <p className="text-xs text-gray-500">
        <strong>Note:</strong> You will receive a DocuSign agreement and a secure request for your banking
        details within 24–48 hours.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center px-4 py-2 rounded-md bg-black text-white text-sm font-medium disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};
