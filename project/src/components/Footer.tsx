import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Oresto</h3>
            <p className="text-gray-400">
              Une expérience gastronomique française authentique au cœur de la ville.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@oresto.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Rue de la Gastronomie, Paris</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Lun-Ven: 12h-14h30, 19h-22h30</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Sam-Dim: 12h-23h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Oresto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;