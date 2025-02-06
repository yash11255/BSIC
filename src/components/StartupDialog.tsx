
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface StartupDialogProps {
  isOpen: boolean;
  onClose: () => void;
  startup: {
    name: string;
    description: string;
    image: string;
    details?: string;
  } | null;
}

export const StartupDialog = ({ isOpen, onClose, startup }: StartupDialogProps) => {
  if (!startup) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{startup.name}</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="relative h-48 w-full mb-4">
          <img
            src={startup.image}
            alt={startup.name}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">{startup.description}</p>
          {startup.details && (
            <p className="text-sm text-muted-foreground">{startup.details}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
