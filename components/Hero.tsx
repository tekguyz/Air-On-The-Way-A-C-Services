import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-200 flex flex-col lg:flex-row">
      {/* Text Content (Left) */}
      <div className="flex-1 px-4 py-16 lg:py-32 lg:pl-8 xl:pl-0 flex justify-end z-10">
        <div className="w-full max-w-2xl lg:pr-12 xl:pr-24 space-y-8">
          <div className="inline-flex items-center gap-2 bg-urgency-red/10 text-urgency-red px-4 py-2 rounded-sm font-bold text-sm border border-urgency-red/20">
            <span className="w-2 h-2 bg-urgency-red rounded-full animate-pulse"></span>
            EMERGENCY DISPATCH AVAILABLE
          </div>
          <h1 className="text-5xl md:text-7xl uppercase text-cool-navy leading-[1.1]">
            A/C Out? <br />
            <span className="text-urgency-red">We&apos;re Already On The Way.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-xl">
            Fast-response HVAC repair and installation in Deerfield Beach. We don&apos;t just fix units; we restore your comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact-form" className="bg-cool-navy hover:bg-cool-navy/90 text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg">
              Request Fast Repair <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+17868187506" className="bg-white hover:bg-gray-50 text-cool-navy px-8 py-4 rounded-sm font-bold text-lg transition-colors border-2 border-cool-navy flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (786) 818-7506
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 flex items-center gap-6 text-sm font-bold text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-urgency-red" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-urgency-red" />
              Upfront Pricing
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Content (Right) */}
      <div className="flex-1 relative w-full h-[400px] lg:h-auto min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="HVAC technician working on a modern outdoor condenser unit"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle gradient to blend the edge on desktop */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent hidden lg:block"></div>
      </div>
    </section>
  );
}
