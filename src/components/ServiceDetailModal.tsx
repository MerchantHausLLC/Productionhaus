import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { ContactFormDialog } from "./ContactFormDialog";

interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  position: number;
  features?: string[];
  benefits?: string[];
}

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export const ServiceDetailModal = ({ service, onClose }: ServiceDetailModalProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  if (!service) return null;

  const ServiceIcon = service.icon;

  return (
    <Dialog open={!!service} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto animate-scale-in">
        <DialogHeader className="space-y-6">
          <div className="flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl">
            <ServiceIcon className="w-12 h-12 text-white" />
          </div>
          <DialogTitle className="text-4xl font-ubuntu text-center">
            {service.name}
          </DialogTitle>
          <DialogDescription className="text-lg text-center">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-8">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
            <ul className="space-y-3 text-muted-foreground">
              {service.benefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button 
              size="lg" 
              className="flex-1 text-lg"
              onClick={() => {
                setIsContactOpen(true);
              }}
            >
              Contact Sales
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 text-lg"
              onClick={() => {
                setIsContactOpen(true);
              }}
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </DialogContent>
      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </Dialog>
  );
};
