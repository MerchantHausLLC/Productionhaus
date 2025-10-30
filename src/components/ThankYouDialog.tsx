import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ThankYouDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  body?: string;
  closeLabel?: string;
}

export const ThankYouDialog = ({
  open,
  onOpenChange,
  title = "Thank You!",
  description = "Your submission has been received.",
  body,
  closeLabel = "Close",
}: ThankYouDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-ubuntu text-foreground">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-6">
          <CheckCircle2 className="h-16 w-16 text-primary" />
          {body ? (
            <p className="text-center text-foreground whitespace-pre-line">{body}</p>
          ) : null}
          <Button
            onClick={() => onOpenChange(false)}
            className="mt-2 bg-crimson hover:bg-crimson/90"
          >
            {closeLabel}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
