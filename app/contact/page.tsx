'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Facebook, Instagram, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Contact <span className="text-amber-500">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-300 max-w-3xl mx-auto"
          >
            Have a question or ready to start planning? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold text-stone-900 mb-8">Get in Touch</h2>
              <p className="text-stone-600 mb-12 text-lg">
                Whether you&apos;re looking for the perfect souvenir or need a full event planning team, we&apos;re here to help make your celebration royal.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-1">Call Us</h4>
                    <p className="text-stone-600">+234 800 SOROYAL</p>
                    <p className="text-stone-600">+234 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-100 p-4 rounded-2xl text-amber-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-1">Email Us</h4>
                    <p className="text-stone-600">hello@soroyalsolutions.com</p>
                    <p className="text-stone-600">sales@soroyalsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-stone-200 p-4 rounded-2xl text-stone-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-1">Visit Us</h4>
                    <p className="text-stone-600">123 Royal Plaza, Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-200">
                <h4 className="text-lg font-bold text-stone-900 mb-6">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-stone-600 hover:bg-blue-700 hover:text-white transition-all border border-stone-100">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-stone-100">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-stone-900">Message Sent!</h3>
                  <p className="text-stone-600">Thank you for contacting us. We&apos;ll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-blue-700 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">First Name</label>
                      <input type="text" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-2">Last Name</label>
                      <input type="text" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Subject</label>
                    <select className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" required>
                      <option value="">Select a subject</option>
                      <option>Souvenir Inquiry</option>
                      <option>Event Planning</option>
                      <option>Student Training</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                    <textarea rows={5} className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="How can we help you?" required></textarea>
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
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-blue-700 mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-stone-900">Find Us in Lagos</h3>
            <p className="text-stone-600">123 Royal Plaza, Victoria Island</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default ContactPage;
