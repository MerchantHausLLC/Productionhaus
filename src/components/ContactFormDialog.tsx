import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { CheckCircle2, X } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { formDataToQueryString } from "@/lib/netlify";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
  agree_to_privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      agree_to_privacy: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Create form data for Netlify
      const formData = new FormData();
      formData.append("form-name", "contact-detailed");
      formData.append("bot-field", "");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("company", data.company || "");
      formData.append("message", data.message);
      formData.append("agree_to_privacy", data.agree_to_privacy ? "yes" : "no");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToQueryString(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      form.reset();

      // Auto-redirect after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onOpenChange(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-ubuntu text-3xl font-semibold text-neutral-dark">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="font-montserrat text-base text-silver-grey">
                Ready to transform your payment processing? Fill out the form below and we'll get back to you shortly.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form
                  name="contact-detailed"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/"
                  acceptCharset="UTF-8"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 mt-4"
                >
                  <input type="hidden" name="form-name" value="contact-detailed" />
                  <input type="hidden" name="bot-field" value="" />
                  <input
                    type="hidden"
                    name="agree_to_privacy"
                    value={form.watch("agree_to_privacy") ? "yes" : "no"}
                  />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-medium text-neutral-dark">
                        Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-montserrat text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-medium text-neutral-dark">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@company.com"
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-montserrat text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your phone number"
                          autoComplete="tel"
                          inputMode="tel"
                          {...field}
                          className="font-montserrat"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-medium text-neutral-dark">
                        Company
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company name"
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-montserrat text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-medium text-neutral-dark">
                        Message *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          rows={5}
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-montserrat text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agree_to_privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-montserrat text-sm text-neutral-dark cursor-pointer">
                          I agree to the{" "}
                          <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-teal hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Privacy Policy
                          </a>
                        </FormLabel>
                        <FormMessage className="font-montserrat text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-crimson hover:bg-crimson/90 text-white font-montserrat font-semibold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-12 text-center">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-silver-grey hover:text-neutral-dark transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center space-y-6 animate-fade-in">
              <div className="relative">
                <CheckCircle2 className="w-20 h-20 text-cyber-teal animate-scale-in" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-ubuntu text-3xl font-semibold text-neutral-dark">
                  Thank You!
                </h3>
                <p className="font-montserrat text-lg text-silver-grey max-w-md">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-montserrat text-sm text-silver-grey/80">
                  Redirecting to home page in a moment...
                </p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
