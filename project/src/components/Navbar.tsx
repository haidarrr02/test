import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif text-amber-900">
              Oresto
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/menu" className="text-gray-700 hover:text-amber-900 transition">
              La Carte
            </Link>
            <Link to="/catering" className="text-gray-700 hover:text-amber-900 transition">
              Traiteur
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-amber-900 transition">
              Évènements
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-amber-900 transition">
              Réservation
            </Link>
            <Link to="/order" className="flex items-center space-x-1 text-gray-700 hover:text-amber-900 transition">
              <ShoppingBag size={20} />
              <span>Commander</span>
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-amber-900">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/menu"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              La Carte
            </Link>
            <Link
              to="/catering"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Traiteur
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Évènements
            </Link>
            <Link
              to="/booking"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Réservation
            </Link>
            <Link
              to="/order"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Commander
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;