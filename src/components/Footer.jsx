import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-[#1e4636] text-white py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        <p className="max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex gap-4 justify-center">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all hover:scale-110">
              <img src="/instagram.png" alt="Instagram" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all hover:scale-110">
              <img src="/facebook.png" alt="Facebook" className="w-10 h-10 object-contain" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all hover:scale-110">
              <img src="/twitter.png" alt="Twitter" className="w-10 h-10 object-contain" />
            </a>
          </div>
        </div>
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>&copy; 2026 KeenKeeper. All rights reserved by Anas</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;