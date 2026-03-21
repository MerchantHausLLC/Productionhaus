import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { ThankYouDialog } from "./ThankYouDialog";
import { Label } from "./ui/label";
import { RequiredIndicator } from "./ui/required-indicator";
import { supabase } from "@/supabase"; //

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

    const submission = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: (formData.get("company") as string) || null,
      message: formData.get("message") as string,
    };

    try {
      // Supabase Insert
      const { error } = await supabase
        .from("contact_submissions")
        .insert([submission]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });
      setShowThankYou(true);
      form.reset();
    } catch (error) {
      console.error("Supabase Error:", error);
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
    <section id="contact" className="py-24 px-4 sm:px-6 bg-foreground dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Get in Touch
          </h2>
          <p className="font-inter text-base sm:text-lg text-white/50 max-w-2xl mx-auto font-light">
            Ready to transform your payment processing? Contact us today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label className="text-white/70 flex items-center text-sm font-inter font-medium tracking-wide uppercase">
                Name
                <RequiredIndicator />
              </Label>
              <Input
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className="mt-2 bg-white/5 border-white/15 text-white placeholder:text-white/30 rounded-none"
              />
            </div>
            <div>
              <Label className="text-white/70 flex items-center text-sm font-inter font-medium tracking-wide uppercase">
                Email
                <RequiredIndicator />
              </Label>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className="mt-2 bg-white/5 border-white/15 text-white placeholder:text-white/30 rounded-none"
              />
            </div>
            <div>
              <Label className="text-white/70 flex items-center text-sm font-inter font-medium tracking-wide uppercase">
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
                className="mt-2 bg-white/5 border-white/15 text-white placeholder:text-white/30 rounded-none"
              />
            </div>
            <div>
              <Label className="text-white/70 flex items-center text-sm font-inter font-medium tracking-wide uppercase">Company</Label>
              <Input
                name="company"
                autoComplete="organization"
                placeholder="Company Name"
                className="mt-2 bg-white/5 border-white/15 text-white placeholder:text-white/30 rounded-none"
              />
            </div>
          </div>

          <div>
            <Label className="text-white/70 flex items-center text-sm font-inter font-medium tracking-wide uppercase">
              Message
              <RequiredIndicator />
            </Label>
            <Textarea
              name="message"
              placeholder="How can we help you?"
              required
              rows={6}
              className="mt-2 bg-white/5 border-white/15 text-white placeholder:text-white/30 resize-none rounded-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white hover:bg-white/90 text-black font-inter font-medium text-sm sm:text-base py-5 sm:py-6 rounded-none tracking-wide transition-all uppercase"
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
