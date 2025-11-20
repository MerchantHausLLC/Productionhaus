import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { ThankYouDialog } from "./ThankYouDialog";
import { formDataToQueryString } from "@/lib/netlify";
import { Label } from "./ui/label";
import { RequiredIndicator } from "./ui/required-indicator";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action || "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToQueryString(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });
      setShowThankYou(true);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-neutral-dark dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Get in Touch
          </h2>
          <p className="font-inter text-lg sm:text-xl text-silver-grey max-w-2xl mx-auto">
            Ready to transform your payment processing? Contact us today.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-crimson flex items-center text-sm font-semibold">
                Name
                <RequiredIndicator />
              </Label>
              <Input
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                aria-required="true"
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-silver-grey"
              />
            </div>
            <div>
              <Label className="text-crimson flex items-center text-sm font-semibold">
                Email
                <RequiredIndicator />
              </Label>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                aria-required="true"
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-silver-grey"
              />
            </div>
            <div>
              <Label className="text-crimson flex items-center text-sm font-semibold">
                Phone
                <RequiredIndicator />
              </Label>
              <Input
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Your Phone"
                required
                aria-required="true"
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-silver-grey"
              />
            </div>
            <div>
              <Label className="text-crimson flex items-center text-sm font-semibold">Company</Label>
              <Input
                name="company"
                autoComplete="organization"
                placeholder="Company Name"
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-silver-grey"
              />
            </div>
          </div>

          <div>
            <Label className="text-crimson flex items-center text-sm font-semibold">
              Message
              <RequiredIndicator />
            </Label>
            <Textarea
              name="message"
              placeholder="How can we help you?"
              required
              aria-required="true"
              rows={6}
              className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-silver-grey resize-none"
              aria-label="How can we help you?"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-cyber-teal hover:bg-cyber-teal/90 text-white font-inter font-semibold text-base sm:text-lg py-5 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

      <ThankYouDialog
        open={showThankYou}
        onOpenChange={(open) => {
          if (!open) {
            setShowThankYou(false);
          }
        }}
        title="Message Received!"
        description="Thanks for contacting MerchantHaus."
        body="A member of our team will reach out within one business day."
      />
    </section>
  );
};
