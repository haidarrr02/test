import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, UtensilsCrossed } from 'lucide-react';

type BookingFormData = {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  occasion?: string;
  specialRequests?: string;
};

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

const occasions = [
  'Anniversaire',
  'Dîner romantique',
  'Repas d\'affaires',
  'Célébration',
  'Autre'
];

function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    // Handle booking submission
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Réservation</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Réservez votre table et profitez d'une expérience gastronomique unique
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <Calendar className="mx-auto text-amber-900 mb-4" size={32} />
          <h3 className="font-semibold mb-2">Réservation Simple</h3>
          <p className="text-gray-600">En quelques clics seulement</p>
        </div>
        <div className="text-center">
          <Clock className="mx-auto text-amber-900 mb-4" size={32} />
          <h3 className="font-semibold mb-2">Confirmation Immédiate</h3>
          <p className="text-gray-600">Réponse instantanée</p>
        </div>
        <div className="text-center">
          <Users className="mx-auto text-amber-900 mb-4" size={32} />
          <h3 className="font-semibold mb-2">Groupes Bienvenus</h3>
          <p className="text-gray-600">Jusqu'à 20 personnes</p>
        </div>
        <div className="text-center">
          <UtensilsCrossed className="mx-auto text-amber-900 mb-4" size={32} />
          <h3 className="font-semibold mb-2">Menu Personnalisé</h3>
          <p className="text-gray-600">Adaptable à vos besoins</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                min={today}
                {...register('date', { required: true })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
              {errors.date && (
                <span className="text-red-600 text-sm">Date requise</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heure
              </label>
              <select
                {...register('time', { required: true })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              >
                <option value="">Sélectionnez une heure</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.time && (
                <span className="text-red-600 text-sm">Heure requise</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre de personnes
            </label>
            <input
              type="number"
              min="1"
              max="20"
              {...register('guests', { required: true, min: 1, max: 20 })}
              className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
            />
            {errors.guests && (
              <span className="text-red-600 text-sm">
                Nombre de personnes requis (max 20)
              </span>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
              {errors.name && (
                <span className="text-red-600 text-sm">Nom requis</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: true,
                  pattern: /^\S+@\S+$/i
                })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email valide requis</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              {...register('phone', { required: true })}
              className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
            />
            {errors.phone && (
              <span className="text-red-600 text-sm">Téléphone requis</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Occasion
            </label>
            <select
              {...register('occasion')}
              className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
            >
              <option value="">Sélectionnez une occasion (optionnel)</option>
              {occasions.map(occasion => (
                <option key={occasion} value={occasion}>{occasion}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Demandes spéciales
            </label>
            <textarea
              {...register('specialRequests')}
              rows={4}
              className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              placeholder="Allergies, préférences alimentaires, placement..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-3 rounded-full hover:bg-amber-800 transition"
          >
            Réserver ma table
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Pour les groupes de plus de 20 personnes,</p>
          <p>veuillez nous contacter directement au 01 23 45 67 89</p>
        </div>
      </div>
    </div>
  );
}

export default Booking;