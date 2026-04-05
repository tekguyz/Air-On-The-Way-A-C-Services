import type {Metadata} from 'next';
import { Inter, Archivo_Black } from 'next/font/google';
import { Phone, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
});

export const metadata: Metadata = {
  title: 'Air On The Way A/C Services | Deerfield Beach AC Repair & Installation',
  description: 'Fast-response HVAC services in Broward County. Licensed, insured, and always on the way. 24/7 Emergency repairs.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Air On The Way A/C Services",
    "image": "https://ais-dev-yzliwnrykjq3z5bkw7hjl7-3822686412.us-west2.run.app/logo.png",
    "@id": "https://ais-dev-yzliwnrykjq3z5bkw7hjl7-3822686412.us-west2.run.app",
    "url": "https://ais-dev-yzliwnrykjq3z5bkw7hjl7-3822686412.us-west2.run.app",
    "telephone": "+17868187506",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4040 NE 3rd Ave",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33441",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.2378,
      "longitude": -80.1248
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen pb-16 md:pb-0">
        {/* Trust Bar */}
        <div className="bg-urgency-red text-white py-2 px-4 text-sm font-medium">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Emergency Service Available</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hidden sm:flex">
                <ShieldCheck className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
              <a href="tel:+17868187506" className="flex items-center gap-2 hover:text-steel-silver transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-bold">(786) 818-7506</span>
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-steel-silver/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Logo representation */}
              <div className="flex flex-col">
                <span className="font-heading italic text-3xl text-cool-navy leading-none tracking-tighter">
                  AIR <span className="text-urgency-red">ON THE WAY</span>
                </span>
                <span className="text-steel-silver font-bold text-xs tracking-widest uppercase mt-1">
                  A/C Services, LLC
                </span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 font-medium text-cool-navy">
              <a href="#services" className="hover:text-urgency-red transition-colors">Services</a>
              <a href="#about" className="hover:text-urgency-red transition-colors">About Us</a>
              <a href="#contact-form" className="hover:text-urgency-red transition-colors">Contact</a>
            </nav>

            <a href="tel:+17868187506" className="hidden md:flex bg-urgency-red hover:bg-urgency-red/90 text-white px-6 py-3 rounded-sm font-bold transition-colors items-center gap-2 shadow-sm">
              <Phone className="w-4 h-4" />
              Call Now: (786) 818-7506
            </a>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-cool-navy text-white py-12 border-t-4 border-urgency-red mb-16 md:mb-0">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="font-heading italic text-2xl leading-none tracking-tighter block mb-4">
                AIR <span className="text-urgency-red">ON THE WAY</span>
              </span>
              <p className="text-steel-silver text-sm max-w-xs mb-4">
                Professional HVAC repair, maintenance, and installation services. Fast, rugged, and reliable.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/airontheway.ac/" target="_blank" rel="noopener noreferrer" className="text-steel-silver hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-steel-silver text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Emergency Repair</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AC Installation</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact-form" className="hover:text-white transition-colors">Request Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-steel-silver text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (786) 818-7506</li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  aironthewayac@gmail.com
                </li>
                <li>4040 NE 3rd Ave</li>
                <li>Deerfield Beach, FL 33441</li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Mobile Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-steel-silver/30 flex md:hidden z-[100]">
          <a 
            href="tel:+17868187506" 
            className="flex-1 bg-cool-navy text-white flex items-center justify-center gap-2 font-bold uppercase tracking-tight"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a 
            href="#contact-form" 
            className="flex-1 bg-urgency-red text-white flex items-center justify-center gap-2 font-bold uppercase tracking-tight"
          >
            <MessageSquare className="w-5 h-5" />
            Request Quote
          </a>
        </div>
      </body>
    </html>
  );
}
