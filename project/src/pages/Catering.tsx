import React from 'react';
import { Truck, ShoppingBag, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <ShoppingBag size={32} />,
    title: 'À Emporter',
    description: 'Commandez et récupérez vos plats au restaurant',
    features: ['Commande 2h à lavance', 'Menu complet disponible', 'Réductions sur grandes quantités'],
    cta: 'Commander',
    link: '/order?type=takeout'
  },
  {
    icon: <Truck size={32} />,
    title: 'Livraison',
    description: 'Nos plats livrés directement chez vous',
    features: ['Livraison sous 45 minutes', 'Zone de livraison : 5km', 'Suivi en temps réel'],
    cta: 'Commander en livraison',
    link: '/order?type=delivery'
  },
  {
    icon: <Users size={32} />,
    title: 'Service Traiteur',
    description: 'Pour vos événements professionnels et privés',
    features: ['Devis personnalisé', 'Service sur place', 'Équipement fourni'],
    cta: 'Demander un devis',
    link: '/events'
  }
];

function Catering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Service Traiteur</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          De la simple commande à emporter aux événements les plus prestigieux,
          découvrez nos services de restauration sur mesure
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-amber-900 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2 text-amber-900" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={service.link}
              className="block text-center bg-amber-900 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition"
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Special Offers */}
      <div className="bg-cream-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-serif text-center mb-8">Offres Spéciales Entreprises</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Petit-déjeuner d'affaires</h3>
            <ul className="space-y-2 mb-4">
              <li>✓ Viennoiseries artisanales</li>
              <li>✓ Boissons chaudes</li>
              <li>✓ Jus frais pressés</li>
              <li>✓ Livraison incluse</li>
            </ul>
            <p className="text-2xl font-bold text-amber-900">À partir de 12€/personne</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Buffet déjeuner</h3>
            <ul className="space-y-2 mb-4">
              <li>✓ Entrées variées</li>
              <li>✓ Plats chauds</li>
              <li>✓ Desserts assortis</li>
              <li>✓ Service inclus</li>
            </ul>
            <p className="text-2xl font-bold text-amber-900">À partir de 25€/personne</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-serif mb-4">Une demande spécifique ?</h2>
        <p className="text-gray-600 mb-6">
          Notre équipe est à votre disposition pour étudier vos besoins et vous proposer
          une offre sur mesure.
        </p>
        <Link
          to="/events"
          className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}

export default Catering;