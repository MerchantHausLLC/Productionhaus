import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { ThankYouDialog } from "./ThankYouDialog";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        toast({
          title: "Message sent!",
          description: "We'll get back to you shortly.",
        });
        setShowThankYou(true);
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Input 
                name="name" 
                placeholder="Your Name" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-silver-grey focus:border-cyber-teal"
              />
            </div>
            <div>
              <Input 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-silver-grey focus:border-cyber-teal"
              />
            </div>
            <div>
              <Input 
                name="phone" 
                type="tel" 
                placeholder="Your Phone" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-silver-grey focus:border-cyber-teal"
              />
            </div>
            <div>
              <Input 
                name="company" 
                placeholder="Company Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-silver-grey focus:border-cyber-teal"
              />
            </div>
          </div>

          <div>
            <Textarea 
              name="message" 
              placeholder="How can we help you?" 
              required 
              rows={6}
              className="bg-white/10 border-white/20 text-white placeholder:text-silver-grey focus:border-cyber-teal resize-none"
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
