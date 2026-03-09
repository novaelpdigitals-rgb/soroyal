'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import OwambeImage from '@/images/Owambe.png';
import BirthdayImage from '@/images/Birthday.png';
import CorporateImage from '@/images/Corporate.png';
import TraditionalImage from '@/images/traditional.png';
import WeddingImage from '@/images/wedding.png';
import TradefairImage from '@/images/Tradefair.png';
import { 
  ArrowRight, 
  ShoppingBag, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Home = () => {
  const souvenirCategories = [
    { title: 'Kitchen & Household', icon: <ShoppingBag size={32} />, color: 'bg-blue-500', href: '/solutions/souvenirs/kitchen' },
    { title: 'Personal & Utility', icon: <Users size={32} />, color: 'bg-amber-500', href: '/solutions/souvenirs/personal' },
    { title: 'Edibles & Groceries', icon: <Star size={32} />, color: 'bg-rose-500', href: '/solutions/souvenirs/edibles' },
    { title: 'Luxury & VIP', icon: <Award size={32} />, color: 'bg-purple-600', href: '/solutions/souvenirs/luxury' },
    { title: 'Tech & Modern', icon: <Clock size={32} />, color: 'bg-blue-600', href: '/solutions/souvenirs/tech' },
  ];

  const testimonials = [
    {
      name: 'Mrs. Adebayo',
      role: 'Wedding Host',
      content: 'SORoyal Solutions made my daughter\'s wedding souvenirs a talk of the town. The customization was perfect!',
      avatar: 'https://picsum.photos/seed/woman1/100/100'
    },
    {
      name: 'Chidi Okafor',
      role: 'Corporate Manager',
      content: 'Professionalism at its peak. Our annual conference materials were delivered on time and exceeded expectations.',
      avatar: 'https://picsum.photos/seed/man1/100/100'
    },
    {
      name: 'Tunde Bakare',
      role: 'Birthday Celebrant',
      content: 'The event planning team took the stress off me. I just showed up and enjoyed my 50th birthday!',
      avatar: 'https://picsum.photos/seed/man2/100/100'
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/nigerian-party/1920/1080?blur=2"
            alt="Nigerian Celebration"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold tracking-wider uppercase mb-6 border border-amber-500/30">
              Premium Event Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Premium Souvenirs & <span className="text-amber-500">Event Planning</span> for Every Celebration
            </h1>
            <p className="text-xl text-stone-300 mb-10 leading-relaxed">
              We help hosts impress their guests with class and culture, regardless of budget. From exquisite souvenirs to seamless event management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/solutions#souvenirs" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center group"
              >
                Explore Souvenirs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/events" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center"
              >
                Plan My Event
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={OwambeImage}
                  alt="Exquisite Souvenirs"
                  width={800}
                  height={1000}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100 rounded-full -z-0 blur-3xl opacity-60" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full -z-0 blur-3xl opacity-60" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-stone-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-stone-900">5,000+</p>
                    <p className="text-sm text-stone-500">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-4">About SORoyal Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                Redefining the Art of <span className="text-blue-700">Nigerian Gifting</span>
              </h3>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                At SORoyal Solutions, we believe every celebration deserves a touch of royalty. We specialize in sourcing, branding, and packaging premium souvenirs that leave a lasting impression on your guests.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Customized branding for all items',
                  'Budget-friendly luxury options',
                  'Prompt nationwide delivery',
                  'Professional event coordination'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-stone-700 font-medium">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors group"
              >
                Learn more about our story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Souvenir Categories Preview */}
      <section id="souvenirs" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
              Our Souvenir Collections
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-stone-600 max-w-2xl mx-auto">
              Carefully curated items categorized to help you find the perfect gift for your special guests.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {souvenirCategories.map((cat, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-stone-100 group cursor-pointer"
              >
                <Link href={cat.href}>
                  <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">{cat.title}</h4>
                  <p className="text-stone-500 text-sm mb-6">Explore our premium selection of {cat.title.toLowerCase()} items.</p>
                  <span className="text-blue-700 font-bold text-sm flex items-center">
                    View Items <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Planning Overview */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/50 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-amber-400 font-bold uppercase tracking-widest mb-4">Event Services</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Seamless Planning for <span className="text-amber-500">Unforgettable</span> Moments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Weddings', desc: 'From traditional to white weddings.' },
                  { title: 'Birthdays', desc: 'Themed parties for all ages.' },
                  { title: 'Corporate', desc: 'Professional branding & coordination.' },
                  { title: 'Traditional', desc: 'Culturally rich ceremonies.' }
                ].map((service, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <h4 className="text-xl font-bold mb-2 text-amber-400">{service.title}</h4>
                    <p className="text-stone-400 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
              <Link 
                href="/events" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-amber-500/20 inline-flex items-center"
              >
                Plan My Event
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden h-64">
                  <Image src={WeddingImage} alt="Wedding" width={400} height={600} className="object-cover h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <Image src={BirthdayImage} alt="Birthday" width={400} height={400} className="object-cover h-full" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <Image src={CorporateImage} alt="Corporate" width={400} height={400} className="object-cover h-full" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <Image src={TraditionalImage} alt="Traditional" width={400} height={600} className="object-cover h-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Training Overview */}
      <section id="training" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-blue-500/20 text-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Empowering the <span className="text-blue-500">Next Generation</span> of Creatives
                </h2>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                  Join our professional training programs and learn the secrets of event management, souvenir branding, and creative entrepreneurship.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  {['Event Management', 'Souvenir Branding', 'Business Startup'].map((tag, i) => (
                    <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/solutions#training" 
                  className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-stone-200 transition-all inline-flex items-center"
                >
                  View Training Programs
                  <ArrowRight className="ml-2 text-blue-600" />
                </Link>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <Image src={TradefairImage} alt="Training Session" width={800} height={600} className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 relative"
              >
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image src={t.avatar} alt={t.name} width={48} height={48} referrerPolicy="no-referrer" />
                  </div>
                </div>
                <p className="text-stone-600 italic mb-6 mt-4">&quot;{t.content}&quot;</p>
                <div>
                  <h4 className="font-bold text-stone-900">{t.name}</h4>
                  <p className="text-sm text-blue-700 font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-display font-bold mb-6">Stay Updated</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Subscribe to our newsletter for the latest souvenir trends and exclusive event planning tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white/10 border border-white/20 rounded-full py-4 px-8 focus:outline-none focus:bg-white/20 transition-all text-white placeholder:text-blue-200"
              required
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-amber-900/20">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Home;
