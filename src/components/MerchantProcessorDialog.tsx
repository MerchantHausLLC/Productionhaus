import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type MerchantProcessorDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formUrl?: string;
};

export const MerchantProcessorDialog = ({
  open,
  onOpenChange,
  formUrl = "https://merchanthaus-fr.nmipays.com/form/MerchantHaus-fr",
}: MerchantProcessorDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw]">
        <DialogHeader>
          <DialogTitle>Complete Your Merchant Processor Application</DialogTitle>
          <DialogDescription>
            We partner with NMI to provision merchant processor accounts. Please complete the short form below to
            continue your application.
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border">
          <iframe title="Merchant processor application" src={formUrl} className="h-full w-full border-0" allowFullScreen />
        </div>
        <div className="text-sm text-muted-foreground">
          <p>
            Having trouble with the embedded form? You can also open it in a new tab using the button below and return here
            once finished.
          </p>
          <div className="mt-3">
            <Button asChild variant="outline">
              <a href={formUrl} target="_blank" rel="noreferrer">
                Open Processor Application in New Tab
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
