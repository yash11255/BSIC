
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ApplyFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyForm = ({ isOpen, onClose }: ApplyFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
    onClose();
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Apply Now</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-2">
              Website
            </label>
            <Input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Tell us about your startup
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
