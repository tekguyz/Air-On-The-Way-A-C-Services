'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Upload, Check } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Create a new FormData object to ensure the order of fields
    const form = e.currentTarget;
    const formData = new FormData();
    
    // Netlify requires form-name to be present in the POST body
    formData.append("form-name", "air-on-the-way-v6");
    
    // Append all other fields from the form
    const originalData = new FormData(form);
    for (const [key, value] of originalData.entries()) {
      if (key !== "form-name") {
        formData.append(key, value);
      }
    }
    
    try {
      const response = await fetch("/forms.html", { 
        method: "POST", 
        headers: { "X-Requested-With": "XMLHttpRequest" },
        body: formData 
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error(`Server responded with ${response.status}. Please try again later.`);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-cool-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-urgency-red/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl uppercase mb-6">Ready to Restore <br /><span className="text-urgency-red">Your Comfort?</span></h2>
                <div className="w-24 h-1 bg-urgency-red"></div>
              </div>
              <p className="text-xl text-steel-silver">
                Don&apos;t wait in the heat. Our technicians are standing by to provide fast, professional service in Deerfield Beach and beyond.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-urgency-red">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-steel-silver uppercase font-bold tracking-wider">Emergency Line</p>
                    <p className="text-2xl font-bold">(786) 818-7506</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-urgency-red">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-steel-silver uppercase font-bold tracking-wider">Email Us</p>
                    <p className="text-xl font-bold">aironthewayac@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-urgency-red">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-steel-silver uppercase font-bold tracking-wider">Location</p>
                    <p className="text-xl font-bold">Deerfield Beach, FL</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/airontheway.ac/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-urgency-red hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div>
                    <p className="text-sm text-steel-silver uppercase font-bold tracking-wider">Follow Us</p>
                    <p className="text-xl font-bold">Facebook</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-cool-navy p-10 rounded-sm shadow-2xl border-l-8 border-urgency-red">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Check className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading italic text-3xl">Request Received!</h3>
                    <p className="text-gray-600 font-medium">We&apos;re already on the way. A technician will contact you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-urgency-red font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading italic text-3xl mb-2">Schedule Service</h3>
                  <p className="text-gray-500 mb-8 font-medium">Fast response guaranteed. We&apos;ll be on the way.</p>
                  
                  <form 
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    encType="multipart/form-data"
                    name="air-on-the-way-v6"
                    action="/forms.html"
                  >
                    <input type="hidden" name="form-name" value="air-on-the-way-v6" />
                    <div className="hidden">
                      <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Full Name</label>
                      <input type="text" name="full_name" required className="w-full border-b-2 border-gray-200 focus:border-urgency-red outline-none py-2 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Phone Number</label>
                      <input type="tel" name="phone_number" required className="w-full border-b-2 border-gray-200 focus:border-urgency-red outline-none py-2 transition-colors" placeholder="(786) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Address</label>
                      <input type="text" name="address" className="w-full border-b-2 border-gray-200 focus:border-urgency-red outline-none py-2 transition-colors" placeholder="123 Main St, Deerfield Beach" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Service Needed</label>
                      <select name="service_type" className="w-full border-b-2 border-gray-200 focus:border-urgency-red outline-none py-2 transition-colors bg-transparent">
                        <option value="">Select a service</option>
                        {SERVICES.map(s => (
                          <option key={s.slug} value={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                        Unit Photo <span className="text-xs font-normal text-gray-400 italic">(Optional - Helps us prep)</span>
                      </label>
                      <div className="relative group">
                        <input 
                          type="file" 
                          name="unit_photo" 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          accept="image/*"
                        />
                        <div className="w-full border-2 border-dashed border-gray-200 group-hover:border-urgency-red rounded-sm py-4 flex flex-col items-center justify-center transition-colors">
                          <Upload className="w-6 h-6 text-gray-400 group-hover:text-urgency-red mb-2" />
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Upload Photo</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Message (Optional)</label>
                      <textarea name="message" className="w-full border-b-2 border-gray-200 focus:border-urgency-red outline-none py-2 transition-colors resize-none" rows={3} placeholder="Tell us about your issue..."></textarea>
                    </div>
                    <div className="md:col-span-2 pt-4">
                      {error && (
                        <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium">
                          {error}
                        </div>
                      )}
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-urgency-red hover:bg-urgency-red/90 disabled:bg-gray-400 text-white font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-lg shadow-lg flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Processing..." : "Dispatch Technician"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
