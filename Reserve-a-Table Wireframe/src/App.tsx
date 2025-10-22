import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReservationForm } from './components/ReservationForm';
import { CustomerDetailsForm } from './components/CustomerDetailsForm';
import { ConfirmationPage } from './components/ConfirmationPage';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: '',
    seating: 'indoor',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const updateField = (field: string, value: string) => {
    setReservationData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setStep(1);
    setReservationData({
      date: '',
      time: '',
      guests: '',
      seating: 'indoor',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1751011983324-fe9d30fe9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHRhYmxlfGVufDF8fHx8MTc2MDk4NDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Little Lemon Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#495E57]/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-white mb-2">Reserve Your Table</h1>
            <p className="text-[#F4CE14]">Experience the finest Mediterranean cuisine</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Progress Indicator */}
          {step < 3 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm ${step >= 1 ? 'text-[#F4CE14]' : 'text-gray-400'}`}>
                  Reservation
                </span>
                <span className={`text-sm ${step >= 2 ? 'text-[#F4CE14]' : 'text-gray-400'}`}>
                  Details
                </span>
                <span className={`text-sm ${step >= 3 ? 'text-[#F4CE14]' : 'text-gray-400'}`}>
                  Confirmation
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#F4CE14] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            {step === 1 && (
              <div>
                <h2 className="text-[#495E57] mb-6">Reservation Information</h2>
                <ReservationForm
                  formData={reservationData}
                  onUpdate={updateField}
                  onNext={() => setStep(2)}
                />
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-[#495E57] mb-6">Your Details</h2>
                <CustomerDetailsForm
                  formData={reservationData}
                  onUpdate={updateField}
                  onNext={() => setStep(3)}
                  onBack={() => setStep(1)}
                />
              </div>
            )}

            {step === 3 && (
              <ConfirmationPage
                reservationData={reservationData}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
