'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingBag, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import PremiumSouvenirImage from '@/images/premiumsouvenir.jpg';
import EventPlannerImage from '@/images/Event Planner.png';
import StudentTrainingImage from '@/images/Student Training.png';
import KitchenThingsImage from '@/images/Kitchen things.jpg';
import PersonalUtilityImage from '@/images/Personal utility.jpg';
import SoFoodImage from '@/images/SO food1.jpg';
import LuxuryImage from '@/images/Luxury.jpg';
import PhoneStandImage from '@/images/phonestand.jpg';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'souvenirs',
      title: 'Premium Souvenirs',
      desc: 'Exquisite gifts for all occasions. We source, brand, and package items that your guests will cherish forever.',
      icon: <ShoppingBag size={40} />,
      image: PremiumSouvenirImage,
      color: 'bg-blue-600',
      link: '#souvenirs-grid'
    },
    {
      id: 'events',
      title: 'Event Planning',
      desc: 'Seamless coordination for weddings, birthdays, and corporate events. We handle the stress while you enjoy the moment.',
      icon: <Calendar size={40} />,
      image: EventPlannerImage,
      color: 'bg-amber-600',
      link: '/events'
    },
    {
      id: 'training',
      title: 'Student Training',
      desc: 'Professional programs in event management, branding, and creative design to empower the next generation.',
      icon: <GraduationCap size={40} />,
      image: StudentTrainingImage,
      color: 'bg-stone-900',
      link: '#training-details'
    }
  ];

  const souvenirCategories = [
    { name: 'Kitchen & Household', href: '/solutions/souvenirs/kitchen', image: KitchenThingsImage },
    { name: 'Personal & Utility', href: '/solutions/souvenirs/personal', image: PersonalUtilityImage },
    { name: 'Edibles & Groceries', href: '/solutions/souvenirs/edibles', image: SoFoodImage },
    { name: 'Luxury & VIP', href: '/solutions/souvenirs/luxury', image: LuxuryImage },
    { name: 'Tech & Modern', href: '/solutions/souvenirs/tech', image: PhoneStandImage },
  ];

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
            Our <span className="text-amber-500">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-300 max-w-3xl mx-auto"
          >
            Comprehensive services tailored to make your celebrations extraordinary and your skills professional.
          </motion.p>
        </div>
      </section>

      {/* Main Solutions Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {solutions.map((sol, i) => (
              <motion.div 
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-stone-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={sol.image} alt={sol.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className={`absolute top-6 left-6 ${sol.color} text-white p-4 rounded-2xl shadow-lg`}>
                    {sol.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold text-stone-900 mb-4">{sol.title}</h3>
                  <p className="text-stone-600 mb-8 leading-relaxed">{sol.desc}</p>
                  <Link 
                    href={sol.link}
                    className={`inline-flex items-center font-bold ${sol.id === 'souvenirs' ? 'text-blue-700' : sol.id === 'events' ? 'text-amber-600' : 'text-stone-900'} group`}
                  >
                    Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Souvenirs Grid Section */}
      <section id="souvenirs-grid" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">Explore Our Souvenir Collections</h2>
              <p className="text-stone-600">From household essentials to luxury gifts, we have something for every guest and every budget.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {souvenirCategories.map((cat, i) => (
              <Link key={i} href={cat.href} className="group">
                <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-lg">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-2xl font-display font-bold text-white mb-2">{cat.name}</h4>
                    <span className="text-amber-400 text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Browse Items <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Training Details Section */}
      <section id="training-details" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Training Programs</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Master the Craft of <span className="text-blue-500">Events & Branding</span></h3>
              
              <div className="space-y-8 mb-12">
                {[
                  { title: 'Event Management Training', desc: 'Learn to plan, coordinate, and execute world-class events.' },
                  { title: 'Souvenir Branding & Packaging', desc: 'Master the art of custom branding and premium gift packaging.' },
                  { title: 'Small Business Startup', desc: 'Practical steps to launching your own creative business in Nigeria.' },
                  { title: 'Creative Design', desc: 'Learn to design custom products that stand out.' }
                ].map((course, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-blue-500/20 text-blue-500 p-2 rounded-lg mt-1">
                      <ArrowRight size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{course.title}</h4>
                      <p className="text-stone-400">{course.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <p className="text-stone-500 text-xs uppercase font-bold mb-1">Duration</p>
                  <p className="font-bold">4 - 12 Weeks</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <p className="text-stone-500 text-xs uppercase font-bold mb-1">Mode</p>
                  <p className="font-bold">Physical & Online</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="bg-white text-stone-900 p-10 rounded-[3rem] shadow-2xl"
            >
              <h4 className="text-2xl font-display font-bold mb-6 text-center">Enroll in a Program</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Select Program</label>
                  <select className="w-full bg-stone-100 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Event Management</option>
                    <option>Souvenir Branding</option>
                    <option>Small Business Startup</option>
                    <option>Creative Design</option>
                  </select>
                </div>
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/20 mt-4">
                  Register Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default SolutionsPage;
