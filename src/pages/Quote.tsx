import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ThankYouDialog } from "@/components/ThankYouDialog";
import { formDataToQueryString } from "@/lib/netlify";

const quoteFormSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(50),
  last_name: z.string().trim().min(1, "Last name is required").max(50),
  contact_number: z.string().trim().min(1, "Contact number is required").max(20),
  email: z.string().trim().email("Invalid email address").max(255),
  special_instructions: z.string().trim().max(1000).optional(),
  processing_services: z.array(z.string()).optional(),
  value_services: z.array(z.string()).optional(),
});

const processingOptions = ["Credit Card", "ACH / eCheck", "Cash"] as const;
const valueOptions = ["Encryption", "Invoice", "Level III Advantage", "Mobile Reader", "Vault Storage"] as const;

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const Quote = () => {
  const { toast } = useToast();
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      processing_services: [],
      value_services: [],
    },
  });

  const processingServices = watch("processing_services") || [];
  const valueServices = watch("value_services") || [];

  const handleProcessingChange = (service: string, checked: boolean) => {
    const updated = checked
      ? [...processingServices, service]
      : processingServices.filter((item) => item !== service);
    setValue("processing_services", updated, { shouldDirty: true, shouldTouch: true });
  };

  const handleValueChange = (service: string, checked: boolean) => {
    const updated = checked
      ? [...valueServices, service]
      : valueServices.filter((item) => item !== service);
    setValue("value_services", updated, { shouldDirty: true, shouldTouch: true });
  };

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      const formData = new FormData();
      formData.append("form-name", "quote");
      formData.append("bot-field", "");

      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(`${key}[]`, item));
        } else if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToQueryString(formData),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Sent",
          description: "Our team will reach out shortly.",
        });
        setShowThankYou(true);
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call 1-505-600-6042.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <StarfieldBackground />
      <Header />

      <main className="flex-1 relative z-10">
        <section className="relative overflow-hidden bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-white px-4 py-1.5 text-sm font-medium text-crimson shadow-sm mb-6">
              Request a Quote
            </span>
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-foreground mb-4">
              Get Your Customized MerchantHaus Quote
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share a few details and we’ll tailor pricing and solutions that fit your business.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form
              name="quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/"
              acceptCharset="UTF-8"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-8 shadow-sm"
            >
              <input type="hidden" name="form-name" value="quote" />
              <input type="hidden" name="bot-field" />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name*</Label>
                  <Input id="first_name" autoComplete="given-name" {...register("first_name")} />
                  {errors.first_name && (
                    <p className="text-sm text-destructive">{errors.first_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name*</Label>
                  <Input id="last_name" autoComplete="family-name" {...register("last_name")} />
                  {errors.last_name && (
                    <p className="text-sm text-destructive">{errors.last_name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact_number">Contact Number*</Label>
                  <Input
                    id="contact_number"
                    autoComplete="tel"
                    inputMode="tel"
                    {...register("contact_number")}
                  />
                  {errors.contact_number && (
                    <p className="text-sm text-destructive">{errors.contact_number.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input id="email" type="email" autoComplete="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special_instructions">Special Instructions</Label>
                <Textarea
                  id="special_instructions"
                  rows={5}
                  placeholder="Tell us about your processing needs, timelines, or any integrations you rely on."
                  {...register("special_instructions")}
                />
                {errors.special_instructions && (
                  <p className="text-sm text-destructive">{errors.special_instructions.message}</p>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground">Processing Services</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {processingOptions.map((service) => (
                      <div
                        key={service}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                          processingServices.includes(service)
                            ? "border-crimson bg-crimson/5"
                            : "border-border hover:border-crimson/50"
                        }`}
                      >
                        <Checkbox
                          id={`quote-processing-${service}`}
                          checked={processingServices.includes(service)}
                          onCheckedChange={(checked) =>
                            handleProcessingChange(service, checked === true)
                          }
                        />
                        <Label htmlFor={`quote-processing-${service}`} className="cursor-pointer flex-1">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground">Value-added Services</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {valueOptions.map((service) => (
                      <div
                        key={service}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                          valueServices.includes(service)
                            ? "border-crimson bg-crimson/5"
                            : "border-border hover:border-crimson/50"
                        }`}
                      >
                        <Checkbox
                          id={`quote-value-${service}`}
                          checked={valueServices.includes(service)}
                          onCheckedChange={(checked) =>
                            handleValueChange(service, checked === true)
                          }
                        />
                        <Label htmlFor={`quote-value-${service}`} className="cursor-pointer flex-1">
                          {service}
                          {service === "Encryption" && (
                            <span className="text-xs text-muted-foreground block">Encrypted Devices</span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Need details on how we protect your data? Visit our{" "}
                  <Link href="/security" className="text-crimson hover:underline">
                    Security &amp; Compliance
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-crimson hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {processingServices.map((service) => (
                <input
                  key={`quote-processing-hidden-${service}`}
                  type="hidden"
                  name="processing_services[]"
                  value={service}
                />
              ))}
              {valueServices.map((service) => (
                <input
                  key={`quote-value-hidden-${service}`}
                  type="hidden"
                  name="value_services[]"
                  value={service}
                />
              ))}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-crimson hover:bg-crimson/90"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>
            </form>
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
        title="Quote Request Received!"
        description="Thank you for reaching out to MerchantHaus."
        body="A member of our solutions team will review your request and contact you with pricing details."
      />
    </div>
  );
};

export default Quote;
