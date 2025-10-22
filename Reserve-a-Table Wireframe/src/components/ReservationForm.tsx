import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';

interface ReservationFormProps {
  formData: {
    date: string;
    time: string;
    guests: string;
    seating: string;
  };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
}

export function ReservationForm({ formData, onUpdate, onNext }: ReservationFormProps) {
  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.date && formData.time && formData.guests && formData.seating) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="date" className="text-[#495E57]">Select Date</Label>
        <div className="relative mt-2">
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => onUpdate('date', e.target.value)}
            required
            min={new Date().toISOString().split('T')[0]}
            className="border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]"
          />
          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#495E57] pointer-events-none" size={20} />
        </div>
      </div>

      <div>
        <Label htmlFor="time" className="text-[#495E57]">Select Time</Label>
        <Select value={formData.time} onValueChange={(value) => onUpdate('time', value)} required>
          <SelectTrigger className="mt-2 border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]">
            <SelectValue placeholder="Choose a time" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="guests" className="text-[#495E57]">Number of Guests</Label>
        <Select value={formData.guests} onValueChange={(value) => onUpdate('guests', value)} required>
          <SelectTrigger className="mt-2 border-[#495E57] focus:border-[#F4CE14] focus:ring-[#F4CE14]">
            <SelectValue placeholder="Select number of guests" />
          </SelectTrigger>
          <SelectContent>
            {guestOptions.map((num) => (
              <SelectItem key={num} value={num}>
                {num} {num === '1' ? 'Guest' : 'Guests'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-[#495E57]">Seating Preference</Label>
        <RadioGroup
          value={formData.seating}
          onValueChange={(value) => onUpdate('seating', value)}
          className="mt-2 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="indoor" id="indoor" className="border-[#495E57] text-[#F4CE14]" />
            <Label htmlFor="indoor" className="cursor-pointer">Indoor Seating</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="outdoor" id="outdoor" className="border-[#495E57] text-[#F4CE14]" />
            <Label htmlFor="outdoor" className="cursor-pointer">Outdoor Seating</Label>
          </div>
        </RadioGroup>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#F4CE14] text-[#495E57] hover:bg-[#F4CE14]/90"
      >
        Continue to Details
      </Button>
    </form>
  );
}
