'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  X, 
  ChevronRight, 
  ShoppingBag, 
  Star,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import ProductCard from '@/components/ProductCard';

const productsData: Record<string, any[]> = {
  kitchen: [
    { id: 'k1', name: 'Customized Plastic Basins', description: 'High-quality durable basins customized with event name and date.', image: 'https://picsum.photos/seed/basin/600/600', badge: 'Best Seller' },
    { id: 'k2', name: 'Premium Serving Trays', description: 'Available in plastic, wooden, and metallic finishes.', image: 'https://picsum.photos/seed/tray/600/600' },
    { id: 'k3', name: 'Customized Mugs & Cups', description: 'Ceramic or plastic mugs with high-quality print.', image: 'https://picsum.photos/seed/mug/600/600', isPopular: true },
    { id: 'k4', name: 'Food Flasks & Coolers', description: 'Insulated flasks to keep food warm for hours.', image: 'https://picsum.photos/seed/flask/600/600' },
    { id: 'k5', name: 'Premium Cutlery Sets', description: 'Stainless steel cutlery in elegant packaging.', image: 'https://picsum.photos/seed/cutlery/600/600' },
    { id: 'k6', name: 'Graters & Chopping Boards', description: 'Essential kitchen tools with custom branding.', image: 'https://picsum.photos/seed/grater/600/600' },
    { id: 'k7', name: 'Sieves & Colanders', description: 'Durable mesh sieves for everyday kitchen use.', image: 'https://picsum.photos/seed/sieve/600/600' },
    { id: 'k8', name: 'Dishwashing Set', description: 'Liquid soap and sponge pack in a branded mesh bag.', image: 'https://picsum.photos/seed/soap/600/600' },
    { id: 'k9', name: 'Spice Racks & Containers', description: 'Organize your kitchen with these stylish containers.', image: 'https://picsum.photos/seed/spice/600/600' },
  ],
  personal: [
    { id: 'p1', name: 'Customized Umbrellas', description: 'Large sturdy umbrellas with full-color branding.', image: 'https://picsum.photos/seed/umbrella/600/600', isPopular: true },
    { id: 'p2', name: 'Premium Towel Sets', description: 'Face and bath towels with embroidered initials.', image: 'https://picsum.photos/seed/towel/600/600' },
    { id: 'p3', name: 'Hand Fans', description: 'Traditional or modern foldable hand fans.', image: 'https://picsum.photos/seed/fan/600/600' },
    { id: 'p4', name: 'Ankara Tote Bags', description: 'Stylish and reusable bags made from premium Ankara fabric.', image: 'https://picsum.photos/seed/tote/600/600', badge: 'Cultural' },
    { id: 'p5', name: 'Branded Notepads & Pens', description: 'Essential stationery for corporate or personal events.', image: 'https://picsum.photos/seed/notepad/600/600' },
    { id: 'p6', name: 'Keychains & Openers', description: 'Metallic keychains with bottle opener functionality.', image: 'https://picsum.photos/seed/key/600/600' },
    { id: 'p7', name: 'Hygiene Packs', description: 'Hand sanitizer and liquid soap in travel-size bottles.', image: 'https://picsum.photos/seed/sanitizer/600/600' },
  ],
  edibles: [
    { id: 'e1', name: 'Noodles Bundle', description: 'A pack of popular Nigerian noodles in custom packaging.', image: 'https://picsum.photos/seed/noodles/600/600' },
    { id: 'e2', name: 'Garri & Sugar Pack', description: 'Premium white/yellow garri with sugar and groundnuts.', image: 'https://picsum.photos/seed/garri/600/600', badge: 'Traditional' },
    { id: 'e3', name: 'Cooking Oil Bottles', description: 'Branded bottles of high-quality vegetable oil.', image: 'https://picsum.photos/seed/oil/600/600' },
    { id: 'e4', name: 'Seasoning & Salt Pack', description: 'Essential cooking spices in a branded pouch.', image: 'https://picsum.photos/seed/salt/600/600' },
    { id: 'e5', name: 'Plantain Chips Pack', description: 'Crunchy and delicious plantain chips in custom bags.', image: 'https://picsum.photos/seed/chips/600/600', isPopular: true },
    { id: 'e6', name: 'Premium Chin Chin', description: 'Homemade style chin chin in various sizes.', image: 'https://picsum.photos/seed/chinchin/600/600' },
  ],
  luxury: [
    { id: 'l1', name: 'Vacuum Travel Flasks', description: 'Double-walled stainless steel flasks for hot/cold drinks.', image: 'https://picsum.photos/seed/vflask/600/600', badge: 'VIP' },
    { id: 'l2', name: 'Designer Perfumes', description: 'Long-lasting fragrances in elegant gift boxes.', image: 'https://picsum.photos/seed/perfume/600/600', isPopular: true },
    { id: 'l3', name: 'Customized Wine Bottles', description: 'Premium wine with personalized labels for your event.', image: 'https://picsum.photos/seed/wine/600/600' },
    { id: 'l4', name: 'Leather Passport Holders', description: 'Genuine leather holders with embossed initials.', image: 'https://picsum.photos/seed/passport/600/600' },
    { id: 'l5', name: 'Premium Fabric Sets', description: 'Ankara, Lace, or Guinea Brocade fabric for VIP guests.', image: 'https://picsum.photos/seed/fabric/600/600', badge: 'Luxury' },
    { id: 'l6', name: 'Rechargeable Table Fans', description: 'Portable and powerful fans for modern comfort.', image: 'https://picsum.photos/seed/rfan/600/600' },
  ],
  tech: [
    { id: 't1', name: 'Custom Power Banks', description: 'High-capacity power banks with engraved branding.', image: 'https://picsum.photos/seed/power/600/600', isPopular: true },
    { id: 't2', name: 'USB Flash Drives', description: 'Available in various capacities with custom shapes.', image: 'https://picsum.photos/seed/usb/600/600' },
    { id: 't3', name: 'Bluetooth Speakers', description: 'Compact and powerful speakers for music on the go.', image: 'https://picsum.photos/seed/speaker/600/600', badge: 'Millennial Choice' },
    { id: 't4', name: 'Branded Pop Sockets', description: 'Stylish phone grips with custom event logos.', image: 'https://picsum.photos/seed/pop/600/600' },
  ]
};

const CategoryPage = () => {
  const params = useParams();
  const category = params.category as string;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const categoryTitle = useMemo(() => {
    const titles: Record<string, string> = {
      kitchen: 'Kitchen & Household Items',
      personal: 'Personal Use & Utility Items',
      edibles: 'Edibles & Groceries',
      luxury: 'Luxury & VIP Souvenirs',
      tech: 'Tech & Modern Souvenirs'
    };
    return titles[category] || 'Souvenir Collection';
  }, [category]);

  const products = useMemo(() => {
    const list = productsData[category] || [];
    if (!searchQuery) return list;
    return list.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [category, searchQuery]);

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-stone-500 mb-6">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <ChevronRight size={14} />
            <Link href="/solutions" className="hover:text-blue-700">Solutions</Link>
            <ChevronRight size={14} />
            <span className="text-stone-900 font-medium">{categoryTitle}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-display font-bold text-stone-900 mb-2">{categoryTitle}</h1>
              <p className="text-stone-600">Browse our premium selection of {categoryTitle.toLowerCase()}.</p>
            </div>
            
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-100 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-stone-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-400">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-2">No products found</h3>
              <p className="text-stone-500">Try adjusting your search or browse another category.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 text-blue-700 font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-stone-900 hover:bg-stone-100 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  {selectedProduct.badge && (
                    <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      {selectedProduct.badge}
                    </span>
                  )}
                  <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">{selectedProduct.name}</h2>
                  <p className="text-stone-600 leading-relaxed mb-8">{selectedProduct.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-stone-100 p-3 rounded-xl text-blue-700">
                      <ShoppingBag size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase font-bold">Customization</p>
                      <p className="font-medium">Full Branding Included</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-stone-100 p-3 rounded-xl text-amber-600">
                      <Star size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase font-bold">Quality</p>
                      <p className="font-medium">Premium Grade Materials</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="flex-grow bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20">
                    Request Quote
                  </button>
                  <Link 
                    href="/contact"
                    className="flex-grow bg-stone-100 hover:bg-stone-200 text-stone-900 py-4 rounded-xl font-bold text-center transition-all"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default CategoryPage;
