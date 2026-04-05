import { CheckCircle2, Users, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative h-[500px] w-full rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HVAC Technician"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-8 border-cool-navy/10 pointer-events-none"></div>
          </div>
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl text-cool-navy mb-4">WHY CHOOSE US?</h2>
              <div className="w-24 h-1 bg-urgency-red"></div>
            </div>
            <p className="text-lg text-gray-600">
              With decades of combined experience, Air On The Way A/C Services delivers unmatched reliability and technical expertise. We don&apos;t just fix problems; we engineer lasting comfort solutions.
            </p>
            <ul className="space-y-4">
              {[
                'Upfront, flat-rate pricing with no hidden fees',
                'Fully licensed, bonded, and insured technicians',
                '100% satisfaction guarantee on all services',
                'Fully stocked trucks for one-trip repairs'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-urgency-red shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Trust & Heritage Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Heritage */}
            <div className="bg-cool-navy/5 p-8 rounded-sm border-l-4 border-urgency-red flex flex-col justify-center">
              <Users className="w-8 h-8 text-urgency-red mb-4" />
              <h3 className="font-heading italic text-xl mb-2 text-cool-navy uppercase">Heritage</h3>
              <p className="text-gray-700 font-medium leading-tight">
                Family Owned &amp; Operated. We treat your home like our own.
              </p>
            </div>

            {/* Card 2: Quality */}
            <div className="bg-cool-navy text-white p-8 rounded-sm flex flex-col justify-center">
              <ShieldCheck className="w-8 h-8 text-steel-silver mb-4" />
              <h3 className="font-heading italic text-xl mb-2 uppercase">Quality</h3>
              <p className="text-steel-silver font-medium leading-tight">
                Licensed & Insured. All work backed by our &apos;On The Way&apos; guarantee.
              </p>
            </div>

            {/* Card 3: Proof */}
            <div className="bg-urgency-red text-white p-8 rounded-sm flex flex-col justify-center">
              <Star className="w-8 h-8 text-white mb-4" />
              <h3 className="font-heading italic text-xl mb-2 uppercase">Proof</h3>
              <p className="text-white font-medium leading-tight">
                Broward County&apos;s Choice. Serving Deerfield Beach with 5-star reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
