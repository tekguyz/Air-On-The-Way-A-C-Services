import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-cool-navy mb-4 uppercase">Expert HVAC Solutions</h2>
          <div className="w-24 h-1 bg-urgency-red mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to full system overhauls, our team of certified technicians is ready to restore your comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 rounded-sm hover:border-urgency-red transition-all duration-300 group hover:shadow-xl flex flex-col">
              <div className="w-14 h-14 bg-cool-navy/5 text-cool-navy flex items-center justify-center rounded-sm mb-6 group-hover:bg-urgency-red group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cool-navy">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <a 
                href={`#contact-form?service=${service.slug}`} 
                className="text-urgency-red font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm tracking-wider"
              >
                Request Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
