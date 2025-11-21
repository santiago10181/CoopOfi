import React from 'react';
 // Usaremos Twitter como X por ahora o un SVG custom
import ListFoot from '../common/ListFoot';
import ButtonFoot from '../common/ButtonFoot';
import Brand from '../common/Brand';
import UnionLinks from '../frames/UnionLinks';
import SocialIcon from '../frames/SocialIcon';

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 pb-6 md:px-8 md:pb-8 pt-0">
      <div className="max-w-[1400px] mx-auto bg-[#F9F9F7] rounded-[2.5rem] relative overflow-hidden">
        
        {/* --- CONTENIDO PRINCIPAL (Grid) --- */}
        <div className="relative z-20 p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Columna 1: Solutions */}
            <ListFoot text1="For Individuals" text2="For Business" />

            {/* Columna 2: Products */}
            <ListFoot text1="Products" text2="Canary Care Shop" />  

            {/* Columna 3: Support */}
            <ListFoot text1="Help Center" text2="Contact Us" />

            {/* Columna 4: App Stores (Alineado a la derecha en desktop) */}
            <div className="flex flex-col items-start lg:items-end gap-3">
              {/* Botón App Store (Simulado o imagen real) */}
              <ButtonFoot 
                text1="Download on the"
                text2="App Store"
                url="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                alt="App Store"
              />

              {/* Botón Google Play */}
              <ButtonFoot 
                text1="GET IT ON"
                text2="Google Play"
                url="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                alt="Google Play"
              />
            </div>

          </div>

          {/* --- PARTE INFERIOR (Logo y Legal) --- */}
          <div className="mt-24 md:mt-32 flex flex-col items-start relative z-20">
            
            {/* Logo Canary Care */}
            <Brand className="mb-8" />

            {/* Enlaces Legales */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-[#1a1a1a] mb-4">
              <UnionLinks text1="Privacy Policy" text2="Terms of Service" text3="Cookie Policy"
              className="text-sm"
              />
            </div>
            {/* Copyright */}
            <p className="text-sm text-[#1a1a1a]/70">
              © Canary Care Global Limited 2025
            </p>
          </div>
        </div>
        {/* --- REDES SOCIALES (Posicionadas sobre la figura amarilla) --- */}
        <SocialIcon />
      </div>
    </footer>
  );
};

export default Footer;