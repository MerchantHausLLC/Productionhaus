import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

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
        router.push("/");
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
                      <FormLabel className="font-montserrat font-medium text-neutral-dark">
                        Phone *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(555) 123-4567"
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-montserrat text-sm" />
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
                          placeholder="Company name"
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal"
                          autoComplete="organization"
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
                        How can we help?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your payment goals"
                          className="font-montserrat border-silver-grey/30 focus:border-cyber-teal"
                          rows={4}
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
                    <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border border-silver-grey/40 p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          className="border-silver-grey/50"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-montserrat text-sm text-neutral-dark">
                          I agree to the MerchantHaus
                          <Link
                            href="/privacy"
                            className="ml-1 text-cyber-teal underline hover:text-cyber-teal/80"
                          >
                            Privacy Policy
                          </Link>
                        </FormLabel>
                        <FormMessage className="font-montserrat text-xs" />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-crimson text-white hover:bg-crimson/90 font-montserrat"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <CheckCircle2 className="h-16 w-16 text-cyber-teal" />
            <h3 className="font-ubuntu text-2xl font-semibold text-neutral-dark">Thank you!</h3>
            <p className="font-montserrat text-center text-silver-grey max-w-sm">
              We have received your message and will be in touch shortly. You will be redirected to the homepage momentarily.
            </p>
            <Button
              onClick={handleClose}
              className="flex items-center gap-2 bg-cyber-teal text-white hover:bg-cyber-teal/90"
            >
              <X className="h-4 w-4" />
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
