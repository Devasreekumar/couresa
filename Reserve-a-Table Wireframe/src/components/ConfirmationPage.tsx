import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ConfirmationPageProps {
  reservationData: {
    date: string;
    time: string;
    guests: string;
    seating: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onReset: () => void;
}

export function ConfirmationPage({ reservationData, onReset }: ConfirmationPageProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="bg-green-100 rounded-full p-4">
          <CheckCircle size={64} className="text-green-600" />
        </div>
      </div>

      <div>
        <h2 className="text-[#495E57] mb-2">Thank You!</h2>
        <p className="text-gray-600">Your table has been successfully reserved.</p>
      </div>

      <Card className="border-[#495E57]">
        <CardContent className="pt-6 space-y-4 text-left">
          <h3 className="text-[#495E57] text-center mb-4">Reservation Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="text-[#495E57]">{formatDate(reservationData.date)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="text-[#495E57]">{reservationData.time}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Guests</p>
              <p className="text-[#495E57]">{reservationData.guests} {reservationData.guests === '1' ? 'Guest' : 'Guests'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Seating</p>
              <p className="text-[#495E57] capitalize">{reservationData.seating}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-[#495E57]">{reservationData.firstName} {reservationData.lastName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-[#495E57]">{reservationData.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-[#495E57]">{reservationData.phone}</p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-[#F4CE14]/10 p-4 rounded-lg">
        <p className="text-sm text-[#495E57]">
          A confirmation email has been sent to <span>{reservationData.email}</span>
        </p>
      </div>

      <Button
        onClick={onReset}
        className="bg-[#495E57] text-white hover:bg-[#495E57]/90"
      >
        Make Another Reservation
      </Button>
    </div>
  );
}
