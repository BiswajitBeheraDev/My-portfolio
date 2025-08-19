"use client"
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: FaFacebookF,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: FaInstagram,
    color: 'hover:text-pink-500',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/1234567890',
    icon: FaWhatsapp,
    color: 'hover:text-green-500',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center border-t border-gray-700 py-6 px-4 w-full">
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className={`transition-colors duration-300 ${link.color}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Biswajit. All rights reserved.</p>
    </footer>
  );
}