'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Calendar, Users, MapPin, DollarSign, Send, CheckCircle2 } from 'lucide-react';
import WeddingImage from '@/images/wedding.png';
import BirthdayImage from '@/images/Birthday.png';
import CorporateImage from '@/images/Corporate.png';
import TraditionalImage from '@/images/traditional.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const EventsPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const services = [
    {
      title: 'Wedding Planning',
      items: ['Decoration & Styling', 'Souvenir Coordination', 'Guest Management', 'Vendor Sourcing'],
      image: WeddingImage
    },
    {
      title: 'Birthday Parties',
      items: ['Themed Décor', 'Custom Souvenir Packages', 'Entertainment Sourcing', 'Cake & Catering'],
      image: BirthdayImage
    },
    {
      title: 'Corporate Events',
      items: ['Branding & Merchandise', 'Conference Materials', 'Venue Setup', 'Logistics Management'],
      image: CorporateImage
    },
    {
      title: 'Traditional Ceremonies',
      items: ['Cultural Décor', 'Fabric Coordination', 'Traditional Souvenirs', 'Protocol Services'],
      image: TraditionalImage
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Event <span className="text-blue-900">Planning</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-amber-50 max-w-3xl mx-auto"
          >
            From intimate gatherings to grand celebrations, we bring your vision to life with precision and royalty.
          </motion.p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100 flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image src={service.image} alt={service.title} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center space-x-3 text-stone-600">
                        <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-blue-800 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Let&apos;s Plan Your Next Event</h2>
                <p className="text-blue-100 mb-10">Fill out the form and our event specialists will get back to you within 24 hours with a custom proposal.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-700 p-3 rounded-xl">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 uppercase font-bold">Availability</p>
                      <p className="font-medium">Mon - Sat, 9am - 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-700 p-3 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 uppercase font-bold">Coverage</p>
                      <p className="font-medium">Nationwide Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-blue-700">
                <p className="text-sm text-blue-400 italic">&quot;Excellence is not an act, but a habit.&quot;</p>
              </div>
            </div>

            <div className="lg:w-3/5 p-12">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-stone-900">Inquiry Received!</h3>
                  <p className="text-stone-600">Thank you for reaching out. Our team will contact you shortly to discuss your event details.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-blue-700 font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Event Type</label>
                      <select className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" required>
                        <option value="">Select event type</option>
                        <option>Wedding</option>
                        <option>Birthday Party</option>
                        <option>Corporate Event</option>
                        <option>Traditional Ceremony</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Budget Range (₦)</label>
                      <select className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" required>
                        <option value="">Select budget</option>
                        <option>Under 500k</option>
                        <option>500k - 2M</option>
                        <option>2M - 5M</option>
                        <option>5M - 10M</option>
                        <option>10M+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Guest Size</label>
                      <input type="number" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 200" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Event Date</label>
                      <input type="date" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Location</label>
                    <input type="text" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="City, State" required />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Special Requests</label>
                    <textarea rows={4} className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Tell us more about your vision..."></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center space-x-2"
                  >
                    {formStatus === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default EventsPage;
