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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { formDataToQueryString } from "@/lib/netlify";
import { RequiredIndicator } from "./ui/required-indicator";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const formData = new FormData();
      formData.append("form-name", "contact-dialog");
      formData.append("bot-field", "");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToQueryString(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent",
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us at 1-505-600-6042.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    reset();
    setIsSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-ubuntu text-crimson">
            {isSubmitted ? "Message Received!" : "Contact Us"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isSubmitted
              ? "Thank you for reaching out. We'll contact you soon."
              : "Have a question? Send us a message and we'll respond promptly."}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <CheckCircle2 className="h-16 w-16 text-[hsl(var(--ring))]" />
            <p className="text-center text-foreground">
              Your message has been sent successfully. Our team will reach out to you within 24 hours.
            </p>
            <Button onClick={handleClose} className="mt-4 bg-cyber-teal hover:bg-cyber-teal/90">
              Close
            </Button>
          </div>
        ) : (
          <form
            name="contact-dialog"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact-dialog" />
            <input type="hidden" name="bot-field" value="" />
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-crimson">
                Name
                <RequiredIndicator />
              </Label>
              <Input
                id="name"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-[hsl(var(--destructive))]">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-crimson">
                Email
                <RequiredIndicator />
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
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
                Phone
                <RequiredIndicator />
              </Label>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
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
              <Label htmlFor="message" className="flex items-center gap-2 text-crimson">
                Message
                <RequiredIndicator />
              </Label>
              <Textarea
                id="message"
                rows={4}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-[hsl(var(--destructive))]">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-cyber-teal hover:bg-cyber-teal/90">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
