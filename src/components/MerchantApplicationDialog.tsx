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

const applicationFormSchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  address: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip code is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  fax: z.string().optional(),
  username: z.string().min(1, "Username is required").regex(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),
  processing_services: z.array(z.string()).optional(),
  value_services: z.array(z.string()).optional(),
  agree_to_terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions",
  }),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

interface MerchantApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MerchantApplicationDialog({
  open,
  onOpenChange,
}: MerchantApplicationDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    },
  });

  const processingServices = watch("processing_services") || [];
  const valueServices = watch("value_services") || [];

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
          formData.append(key, String(value));
        }
      });

      formData.append("agree_to_terms", data.agree_to_terms ? "yes" : "no");

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
            {/* Merchant Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Merchant Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company_name">Company Name*</Label>
                  <Input id="company_name" {...register("company_name")} />
                  {errors.company_name && (
                    <p className="text-sm text-destructive">{errors.company_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address*</Label>
                  <Input id="address" {...register("address")} />
                  {errors.address && (
                    <p className="text-sm text-destructive">{errors.address.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address2">Address 2</Label>
                  <Input id="address2" {...register("address2")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City*</Label>
                  <Input id="city" {...register("city")} />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State*</Label>
                  <Input id="state" {...register("state")} />
                  {errors.state && (
                    <p className="text-sm text-destructive">{errors.state.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip/Postal Code*</Label>
                  <Input id="zip" {...register("zip")} />
                  {errors.zip && (
                    <p className="text-sm text-destructive">{errors.zip.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" placeholder="https://example.com" {...register("website")} />
                  {errors.website && (
                    <p className="text-sm text-destructive">{errors.website.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Company Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Company Contact (Primary User)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name*</Label>
                  <Input id="first_name" {...register("first_name")} />
                  {errors.first_name && (
                    <p className="text-sm text-destructive">{errors.first_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name*</Label>
                  <Input id="last_name" {...register("last_name")} />
                  {errors.last_name && (
                    <p className="text-sm text-destructive">{errors.last_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input id="phone" type="tel" {...register("phone")} />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fax">Fax Number</Label>
                  <Input id="fax" type="tel" {...register("fax")} />
                </div>
              </div>
            </div>

            {/* Account Setup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Account Setup</h3>
              <div className="space-y-2">
                <Label htmlFor="username">Primary Username*</Label>
                <Input id="username" {...register("username")} />
                {errors.username && (
                  <p className="text-sm text-destructive">{errors.username.message}</p>
                )}
              </div>
            </div>

            {/* Processing Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Processing Services</h3>
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
              <h3 className="text-lg font-semibold font-ubuntu text-foreground">Value-added Services</h3>
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
                <Label htmlFor="agree_to_terms" className="cursor-pointer leading-relaxed text-sm">
                  I agree to the{" "}
                  <a 
                    href="/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Terms and Conditions
                  </a>
                  {" "}and understand that MerchantHaus will process my application according to these terms.
                </Label>
              </div>
              {errors.agree_to_terms && (
                <p className="text-sm text-destructive">{errors.agree_to_terms.message}</p>
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
