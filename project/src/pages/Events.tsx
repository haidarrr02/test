import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';

type EventFormData = {
  eventType: string;
  guestCount: number;
  date: string;
  time: string;
  location: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const eventTypes = [
  {
    id: 'wedding',
    title: 'Mariage',
    description: 'Une cuisine raffinée pour votre jour spécial',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corporate',
    title: 'Événement Professionnel',
    description: 'Séminaires, conférences et réunions d\'entreprise',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'private',
    title: 'Fête Privée',
    description: 'Anniversaires, baptêmes et célébrations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

function Events() {
  const { register, handleSubmit, formState: { errors } } = useForm<EventFormData>();

  const onSubmit = (data: EventFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Événementiel</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Des moments inoubliables méritent une cuisine exceptionnelle
        </p>
      </div>

      {/* Event Types */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {eventTypes.map((type) => (
          <div key={type.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={type.image}
              alt={type.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Services Features */}
      <div className="bg-cream-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-serif text-center mb-8">Nos Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Users className="mx-auto text-amber-900 mb-4" size={32} />
            <h3 className="font-semibold mb-2">Service Personnalisé</h3>
            <p className="text-gray-600">Une équipe dédiée à votre événement</p>
          </div>
          <div className="text-center">
            <MapPin className="mx-auto text-amber-900 mb-4" size={32} />
            <h3 className="font-semibold mb-2">Sur Place ou à l'Extérieur</h3>
            <p className="text-gray-600">Nous nous adaptons à vos besoins</p>
          </div>
          <div className="text-center">
            <Calendar className="mx-auto text-amber-900 mb-4" size={32} />
            <h3 className="font-semibold mb-2">Menu Sur Mesure</h3>
            <p className="text-gray-600">Créé selon vos préférences</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto text-amber-900 mb-4" size={32} />
            <h3 className="font-semibold mb-2">Organisation Complète</h3>
            <p className="text-gray-600">De la conception à la réalisation</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-8">Demande de Devis</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type d'événement
            </label>
            <select
              {...register('eventType', { required: true })}
              className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
            >
              <option value="">Sélectionnez un type</option>
              {eventTypes.map(type => (
                <option key={type.id} value={type.id}>{type.title}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre d'invités
              </label>
              <input
                type="number"
                {...register('guestCount', { required: true, min: 1 })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date souhaitée
              </label>
              <input
                type="date"
                {...register('date', { required: true })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heure
              </label>
              <input
                type="time"
                {...register('time', { required: true })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lieu
              </label>
              <input
                type="text"
                {...register('location', { required: true })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
                placeholder="Adresse de l'événement"
              />
            </div>
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
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              />
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full rounded-lg border-gray-300 focus:border-amber-900 focus:ring-amber-900"
              placeholder="Détails supplémentaires sur votre événement..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-3 rounded-full hover:bg-amber-800 transition"
          >
            Demander un devis
          </button>
        </form>
      </div>
    </div>
  );
}

export default Events;