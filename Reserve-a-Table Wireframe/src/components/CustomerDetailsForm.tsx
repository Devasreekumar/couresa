import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface CustomerDetailsFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CustomerDetailsForm({ formData, onUpdate, onNext, onBack }: CustomerDetailsFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.phone) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-[#495E57]">First Name</Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => onUpdate('firstName', e.target.value)}
            placeholder="Enter first name"
            required
            className="mt-2 border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]"
          />
        </div>

        <div>
          <Label htmlFor="lastName" className="text-[#495E57]">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => onUpdate('lastName', e.target.value)}
            placeholder="Enter last name"
            required
            className="mt-2 border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-[#495E57]">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onUpdate('email', e.target.value)}
          placeholder="your.email@example.com"
          required
          className="mt-2 border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-[#495E57]">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onUpdate('phone', e.target.value)}
          placeholder="(123) 456-7890"
          required
          className="mt-2 border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]"
        />
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          onClick={onBack}
          variant="outline"
          className="flex-1 border-[#495E57] text-[#495E57] hover:bg-[#495E57] hover:text-white"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-[#F4CE14] text-[#495E57] hover:bg-[#F4CE14]/90"
        >
          Confirm Reservation
        </Button>
      </div>
    </form>
  );
}
