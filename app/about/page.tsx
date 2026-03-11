'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, Heart, ShieldCheck } from 'lucide-react';
import CeramicCupsImage from '@/images/ceramic cups.jpg';
import OyeyemiImage from '@/images/Oyeyemi.png';
import AdeyemiImage from '@/images/Adeyemi.png';
import OkoroImage from '@/images/okoro.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const AboutPage = () => {
  const values = [
    { title: 'Excellence', desc: 'We strive for perfection in every souvenir and event we handle.', icon: <Award size={32} className="text-amber-500" /> },
    { title: 'Integrity', desc: 'Honesty and transparency are the foundations of our business.', icon: <ShieldCheck size={32} className="text-blue-600" /> },
    { title: 'Creativity', desc: 'We bring fresh, culturally relevant ideas to every project.', icon: <Heart size={32} className="text-rose-500" /> },
    { title: 'Customer Focus', desc: 'Your satisfaction is our ultimate priority.', icon: <Users size={32} className="text-blue-500" /> },
  ];

  const team = [
    { name: 'Oyeyemi Haladay', role: 'Founder & CEO', image: OyeyemiImage },
    { name: 'James Adeyemi', role: 'Head of Operations', image: AdeyemiImage },
    { name: 'Blessing Okoro', role: 'Creative Director', image: OkoroImage },
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            About <span className="text-blue-500">SORoyal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-400 max-w-3xl mx-auto"
          >
            A legacy of premium gifting and unforgettable celebrations in the heart of Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-blue-700 font-bold uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl font-display font-bold text-stone-900 mb-6">From a Passion for Gifting to a <span className="text-blue-700">Royal Standard</span></h3>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  SORoyal Solutions was born out of a simple observation: Nigerian celebrations are vibrant, but the art of gifting often lacked that &quot;royal&quot; touch. We saw a gap for high-quality, customized, and culturally relevant souvenirs that guests would actually value.
                </p>
                <p>
                  What started as a small souvenir sourcing business has grown into a full-service event solution brand. Today, we don&apos;t just provide gifts; we create experiences. From planning the perfect wedding to training the next generation of creative entrepreneurs, we are committed to excellence.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-[600px]">
                <Image src={CeramicCupsImage} alt="Our Story" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-stone-100 max-w-xs">
                <p className="text-4xl font-display font-bold text-blue-700 mb-2">10+</p>
                <p className="text-stone-600 font-medium">Years of experience in the Nigerian event industry.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-display font-bold mb-6 text-amber-400">Our Mission</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                To elevate every Nigerian celebration by providing premium, customized souvenirs and seamless event planning services that reflect our clients&apos; unique style and cultural heritage.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-display font-bold mb-6 text-amber-400">Our Vision</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                To be the leading provider of event solutions in Africa, recognized for our commitment to quality, innovation, and the empowerment of creative talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">Our Core Values</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">The principles that guide every decision we make and every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-stone-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">{v.title}</h4>
                <p className="text-stone-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">Meet the Team</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">The creative minds behind SORoyal Solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-2xl font-display font-bold text-stone-900 mb-1">{member.name}</h4>
                <p className="text-blue-700 font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default AboutPage;
