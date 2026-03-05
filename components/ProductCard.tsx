'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingCart, Eye, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  badge?: string;
  isPopular?: boolean;
}

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-stone-100 group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              {product.badge}
            </span>
          )}
          {product.isPopular && (
            <span className="bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Star size={10} fill="currentColor" /> Popular
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button 
            onClick={() => onQuickView(product)}
            className="w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
            title="Quick View"
          >
            <Eye size={20} />
          </button>
          <button 
            className="w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            title="Request Quote"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-blue-700 transition-colors">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-6 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-blue-700 font-bold">Request Quote</span>
          <button 
            className="text-stone-400 hover:text-blue-600 transition-colors"
            onClick={() => onQuickView(product)}
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
