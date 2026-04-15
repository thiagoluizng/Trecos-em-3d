/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Bell, 
  Search, 
  SlidersHorizontal, 
  Home, 
  LayoutGrid, 
  Receipt, 
  User,
  PlusCircle,
  ArrowLeft,
  Share2,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Heart,
  ShoppingBag,
  Info,
  CheckCircle2,
  Leaf,
  Wrench,
  FlaskConical,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Truck,
  Factory
} from 'lucide-react';
import { cn } from './lib/utils';
import { PRODUCTS, MATERIALS, COLORS } from './constants';
import { Screen, Product, Material, Category } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);

  // Navigation handlers
  const navigateTo = (screen: Screen, product: Product | null = null) => {
    if (product) setSelectedProduct(product);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-16 glass-card border-b border-outline-variant/10 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {currentScreen !== 'home' ? (
            <button 
              onClick={() => navigateTo('home')}
              className="p-2 -ml-2 hover:bg-surface-container-low rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <button className="p-2 -ml-2 hover:bg-surface-container-low rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          )}
          <h1 className="font-display font-extrabold text-xl tracking-tighter">
            Trecos em 3D
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white" />
          </button>
          {currentScreen === 'detail' && (
            <>
              <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-32">
        <AnimatePresence mode="wait">
          {currentScreen === 'home' && (
            <HomeScreen key="home" onNavigate={navigateTo} />
          )}
          {currentScreen === 'catalog' && (
            <CatalogScreen key="catalog" onNavigate={navigateTo} />
          )}
          {currentScreen === 'detail' && selectedProduct && (
            <DetailScreen 
              key="detail" 
              product={selectedProduct} 
              onNavigate={navigateTo}
              onAddToCart={() => setCartCount(prev => prev + 1)}
            />
          )}
          {currentScreen === 'config' && (
            <ConfigScreen key="config" onNavigate={navigateTo} />
          )}
        </AnimatePresence>
      </main>

      {/* FAB for Home */}
      {currentScreen === 'home' && (
        <button 
          onClick={() => navigateTo('config')}
          className="fixed bottom-28 right-6 z-40 flex items-center gap-2 bg-primary text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
        >
          <PlusCircle className="w-5 h-5 fill-white/20" />
          <span className="font-display font-bold text-sm">Solicitar Orçamento</span>
        </button>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-20 glass-card border-t border-outline-variant/10 z-50 px-6 flex items-center justify-around rounded-t-3xl shadow-[0_-4px_20px_0_rgba(3,6,18,0.04)]">
        <NavItem 
          icon={<Home className="w-5 h-5" />} 
          label="Início" 
          active={currentScreen === 'home'} 
          onClick={() => navigateTo('home')}
        />
        <NavItem 
          icon={<LayoutGrid className="w-5 h-5" />} 
          label="Catálogo" 
          active={currentScreen === 'catalog'} 
          onClick={() => navigateTo('catalog')}
        />
        <NavItem 
          icon={<Receipt className="w-5 h-5" />} 
          label="Pedidos" 
          active={false} 
        />
        <NavItem 
          icon={<User className="w-5 h-5" />} 
          label="Perfil" 
          active={false} 
        />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: ReactNode, label: string, active: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 transition-all duration-300",
        active ? "text-secondary scale-110" : "text-primary/40 hover:text-secondary"
      )}
    >
      <div className={cn(active && "fill-current")}>{icon}</div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
  );
}

// --- Screens ---

function HomeScreen({ onNavigate }: { onNavigate: (screen: Screen, product?: Product) => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-20 px-4 max-w-2xl mx-auto space-y-8"
    >
      {/* Search Bar */}
      <div className="relative group">
        <div className="flex items-center bg-surface-container-highest px-4 py-3.5 rounded-2xl gap-3 transition-all group-focus-within:ring-2 ring-secondary/20">
          <Search className="w-5 h-5 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Buscar modelos 3D ou materiais..."
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/60"
          />
          <SlidersHorizontal className="w-5 h-5 text-secondary cursor-pointer" />
        </div>
      </div>

      {/* Promo Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-primary-container text-white p-6 aspect-[16/9] flex flex-col justify-end group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary/40 opacity-90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1631033031350-260168f07111?auto=format&fit=crop&q=80&w=800"
          alt="3D Printing"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
        />
        <div className="relative z-20">
          <span className="bg-secondary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Oferta Especial</span>
          <h2 className="font-display font-extrabold text-2xl leading-tight mb-4 max-w-[80%]">
            30% de desconto no seu primeiro orçamento 3D!
          </h2>
          <button className="bg-white text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary hover:text-white transition-all">
            Resgatar Agora
          </button>
        </div>
      </section>

      {/* Categories */}
      <div className="flex overflow-x-auto gap-3 hide-scrollbar -mx-4 px-4">
        {['Decoração', 'Cozinha', 'Gadgets', 'Peças'].map((cat) => (
          <button key={cat} className="flex-shrink-0 bg-surface-container-low px-5 py-2.5 rounded-full flex items-center gap-2 border border-outline-variant/10 hover:bg-secondary/10 hover:border-secondary/20 transition-all group">
            <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
            <span className="text-sm font-semibold">{cat}</span>
          </button>
        ))}
      </div>

      {/* Pronta Entrega */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="font-display font-bold text-xl">Pronta Entrega</h3>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-secondary text-sm font-bold hover:underline"
          >
            Ver Tudo
          </button>
        </div>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar -mx-4 px-4 pb-4">
          {PRODUCTS.filter(p => p.isQuickShip).map(product => (
            <ProductCardSmall key={product.id} product={product} onClick={() => onNavigate('detail', product)} />
          ))}
        </div>
      </section>

      {/* Criações em Destaque */}
      <section className="space-y-4">
        <h3 className="font-display font-bold text-xl">Criações em Destaque</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Featured Large Card */}
          {PRODUCTS.filter(p => p.isBestSeller).slice(0, 1).map(product => (
            <div 
              key={product.id}
              onClick={() => onNavigate('detail', product)}
              className="col-span-2 bg-white rounded-3xl p-4 flex gap-4 items-center shadow-sm border border-outline-variant/5 cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-surface-container-low">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Mais Vendido</span>
                <h4 className="font-display font-bold text-lg leading-tight mt-1">{product.name}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-1 mb-3">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold">R$ {product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-[10px] text-on-surface-variant line-through">R$ {product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Small Grid Cards */}
          {PRODUCTS.slice(3, 5).map(product => (
            <div 
              key={product.id}
              onClick={() => onNavigate('detail', product)}
              className="bg-white rounded-3xl p-3 shadow-sm border border-outline-variant/5 cursor-pointer hover:shadow-md transition-all"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low mb-3">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display font-bold text-sm">{product.name}</h4>
              <p className="text-[10px] text-on-surface-variant mb-2">{product.description}</p>
              <p className="text-sm font-bold text-secondary">R$ {product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function ProductCardSmall({ product, onClick }: { product: Product, onClick: () => void, key?: string }) {
  return (
    <div 
      onClick={onClick}
      className="flex-shrink-0 w-44 bg-white rounded-3xl shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all"
    >
      <div className="h-44 w-full bg-surface-container-low relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        {product.isQuickShip && (
          <span className="absolute top-3 right-3 bg-secondary/90 text-white text-[10px] px-2 py-1 rounded-lg backdrop-blur-md font-bold">
            Envio Rápido
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-on-surface-variant font-medium mb-1">{product.name}</p>
        <p className="font-bold text-primary">R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

function CatalogScreen({ onNavigate }: { onNavigate: (screen: Screen, product?: Product) => void, key?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const categories = ['Todos', 'Funcionais', 'Decoração', 'Articulados', 'Organizadores'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 px-6 max-w-7xl mx-auto"
    >
      {/* Editorial Header */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-none">
              Atelier Digital<br/>
              <span className="text-secondary">Catálogo</span>
            </h1>
            <p className="mt-4 text-on-surface-variant max-w-md font-medium">
              Designs 3D de precisão para a oficina moderna. Da utilidade funcional à arte escultural.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-outline-variant/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Ordenar Por</span>
            <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer">
              <option>Lançamentos</option>
              <option>Populares</option>
            </select>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-8">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all",
              activeCategory === cat 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <ProductCardLarge key={product.id} product={product} onClick={() => onNavigate('detail', product)} />
        ))}
      </div>
    </motion.div>
  );
}

function ProductCardLarge({ product, onClick }: { product: Product, onClick: () => void, key?: string }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
    >
      <div className="relative aspect-square mb-6 overflow-hidden rounded-3xl bg-surface-container-low">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {product.isQuickShip && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest">
            Entrega Rápida
          </div>
        )}
        <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-display font-bold">{product.name}</h3>
          <span className="text-lg font-extrabold">R$ {product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-bold">{product.rating}</span>
          <span className="text-xs text-on-surface-variant font-medium ml-1">({product.reviews} avaliações)</span>
        </div>
        <div className="flex gap-2">
          {product.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-surface-container-low text-[10px] font-bold text-secondary uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailScreen({ product, onNavigate, onAddToCart }: { product: Product, onNavigate: (screen: Screen, product?: Product) => void, onAddToCart: () => void, key?: string }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState<Material>('PLA');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="pt-20 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-12 mt-6">
        {/* Gallery */}
        <div className="w-full md:w-3/5 space-y-6">
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-surface-container-low aspect-square md:aspect-[4/3] flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
              <span className="w-10 h-1.5 rounded-full bg-secondary"></span>
              <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
              <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {[1, 2, 3].map(i => (
              <div key={i} className={cn(
                "flex-none w-24 h-24 rounded-2xl bg-surface-container-low overflow-hidden transition-all cursor-pointer",
                i === 1 ? "ring-2 ring-secondary" : "opacity-60 hover:opacity-100"
              )}>
                <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-2/5 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {product.isBestSeller && (
                <span className="px-2.5 py-1 rounded-lg bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase">
                  Mais Vendido
                </span>
              )}
              <div className="flex items-center text-secondary">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold ml-1.5">{product.rating} ({product.reviews} avaliações)</span>
              </div>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight leading-tight">{product.name}</h2>
            <p className="mt-4 text-on-surface-variant text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-extrabold">R$ {product.price.toFixed(2)}</span>
              <span className="text-on-surface-variant font-medium">cada</span>
            </div>
            <div className="bg-secondary/5 p-4 rounded-2xl flex items-start gap-3 border border-secondary/10">
              <Info className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-secondary font-semibold text-sm leading-snug">
                Compre 10+ e ganhe 15% de desconto automaticamente!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Material</label>
              <div className="flex gap-3">
                {['PLA', 'PETG'].map(mat => (
                  <button 
                    key={mat}
                    onClick={() => setSelectedMaterial(mat as Material)}
                    className={cn(
                      "flex-1 py-3.5 px-4 rounded-2xl border-2 transition-all flex items-center justify-between",
                      selectedMaterial === mat 
                        ? "border-secondary bg-white shadow-sm" 
                        : "border-transparent bg-surface-container-low hover:bg-surface-container-high"
                    )}
                  >
                    <span className={cn("font-bold", selectedMaterial === mat ? "text-primary" : "text-on-surface-variant")}>{mat}</span>
                    {selectedMaterial === mat && <CheckCircle2 className="w-4 h-4 text-secondary" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Quantidade</label>
              <div className="inline-flex items-center bg-surface-container-low rounded-2xl p-1.5">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <footer className="mt-20 py-12 border-t border-outline-variant/10 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        <Badge icon={<Factory className="w-5 h-5" />} title="Precisão Industrial" desc="Camadas de 0.1mm" />
        <Badge icon={<Leaf className="w-5 h-5" />} title="Eco Friendly" desc="Bioplástico PLA" />
        <Badge icon={<Truck className="w-5 h-5" />} title="Envio Rápido" desc="Em até 48 horas" />
        <Badge icon={<ShieldCheck className="w-5 h-5" />} title="Garantia" desc="Reimpressão grátis" />
      </footer>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-6 bg-gradient-to-t from-surface via-surface to-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto bg-primary text-white p-4 md:p-5 rounded-[2rem] shadow-2xl shadow-primary/30">
          <div className="hidden md:block pl-4">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Total Estimado</p>
            <h3 className="text-2xl font-display font-extrabold">R$ {(product.price * quantity).toFixed(2)}</h3>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <button className="flex-1 md:w-40 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all font-bold flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Salvar
            </button>
            <button 
              onClick={onAddToCart}
              className="flex-[2] md:w-72 py-4 rounded-2xl bg-secondary hover:brightness-110 active:scale-95 transition-all text-white font-bold flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Adicionar ao Carrinho • R$ {(product.price * quantity).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Badge({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <div className="text-secondary">{icon}</div>
      <h4 className="font-bold text-sm">{title}</h4>
      <p className="text-xs text-on-surface-variant">{desc}</p>
    </div>
  );
}

function ConfigScreen({ onNavigate }: { onNavigate: (screen: Screen) => void, key?: string }) {
  const [step, setStep] = useState(2);
  const [material, setMaterial] = useState<Material>('PLA');
  const [color, setColor] = useState('onyx');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="pt-24 px-6 max-w-6xl mx-auto"
    >
      {/* Step Indicator */}
      <nav className="flex items-center justify-center mb-16 gap-4">
        <Step num={1} label="Upload" active={false} done={true} />
        <div className="w-12 h-[2px] bg-secondary/30" />
        <Step num={2} label="Material" active={true} />
        <div className="w-12 h-[2px] bg-surface-container-highest" />
        <Step num={3} label="Orçamento" active={false} />
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
        {/* Selection */}
        <section className="space-y-12">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight mb-3">Configure sua Peça</h2>
            <p className="text-on-surface-variant text-lg">Escolha o melhor material e acabamento para o seu projeto.</p>
          </div>

          <div className="space-y-6">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Material</label>
            <div className="space-y-4">
              {MATERIALS.map(mat => (
                <div 
                  key={mat.id}
                  onClick={() => setMaterial(mat.id as Material)}
                  className={cn(
                    "group relative p-6 rounded-3xl border-2 transition-all cursor-pointer",
                    material === mat.id 
                      ? "bg-white border-secondary shadow-xl shadow-secondary/5" 
                      : "bg-surface-container-low border-transparent hover:bg-surface-container-high"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-3 rounded-2xl transition-colors",
                        material === mat.id ? "bg-secondary/10 text-secondary" : "bg-on-surface-variant/10 text-on-surface-variant"
                      )}>
                        {mat.icon === 'Leaf' && <Leaf className="w-6 h-6" />}
                        {mat.icon === 'Wrench' && <Wrench className="w-6 h-6" />}
                        {mat.icon === 'FlaskConical' && <FlaskConical className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{mat.name}</h3>
                        <p className="text-sm text-on-surface-variant">{mat.description}</p>
                      </div>
                    </div>
                    {material === mat.id && <CheckCircle2 className="w-6 h-6 text-secondary fill-secondary/10" />}
                  </div>
                  {material === mat.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex items-center gap-3 bg-secondary/5 p-4 rounded-2xl border border-secondary/10"
                    >
                      <Info className="w-4 h-4 text-secondary flex-shrink-0" />
                      <p className="text-xs text-on-secondary-container leading-relaxed">{mat.benefits}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Cor</label>
            <div className="grid grid-cols-6 gap-4">
              {COLORS.map(c => (
                <button 
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={cn(
                    "w-full aspect-square rounded-full transition-all relative group",
                    color === c.id ? "ring-4 ring-secondary ring-offset-4" : "hover:scale-110"
                  )}
                  style={{ backgroundColor: c.hex }}
                >
                  {color === c.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle2 className={cn("w-6 h-6", c.id === 'white' ? "text-primary" : "text-white")} />
                    </div>
                  )}
                  {c.id === 'white' && <div className="absolute inset-0 rounded-full border border-outline-variant" />}
                </button>
              ))}
            </div>
            <p className="text-sm text-on-surface-variant font-medium">
              Selecionado: <span className="text-primary font-bold">{COLORS.find(c => c.id === color)?.name}</span>
            </p>
          </div>
        </section>

        {/* Preview */}
        <aside className="sticky top-24 space-y-8">
          <div className="bg-surface-container-low rounded-[2.5rem] p-6 shadow-sm overflow-hidden">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-4">Visualização 3D</label>
            <div className="aspect-square w-full bg-white rounded-3xl overflow-hidden relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="3D Preview" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-6 right-6 bg-primary/90 backdrop-blur px-4 py-2 rounded-full text-[10px] text-white font-bold tracking-widest uppercase">
                STL Carregado
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Stat label="Dimensões" value="42 x 65 x 12 mm" />
              <Stat label="Volume" value="14.5 cm³" />
              <Stat label="Filamento" value="45g" icon={<Wrench className="w-3 h-3" />} />
              <Stat label="Tempo" value="2h 15min" icon={<Bell className="w-3 h-3" />} />
            </div>
          </div>

          <div className="bg-secondary/5 p-8 rounded-[2.5rem] border border-secondary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Info className="w-24 h-24" />
            </div>
            <h4 className="font-display font-bold text-xl mb-2">Precisa de ajuda?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Nossa seleção de materiais depende se sua peça é para fins estéticos ou resistência mecânica.
            </p>
            <button className="text-secondary font-bold text-sm flex items-center gap-2 group/btn">
              Ler o Guia Completo 
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 glass-card px-8 py-6 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center">
            <Receipt className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <span className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Preço Estimado</span>
            <span className="text-3xl font-display font-extrabold tracking-tight">R$ 45,90</span>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-8 h-14 rounded-2xl font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">
            Salvar Rascunho
          </button>
          <button className="flex-1 md:flex-none px-12 h-14 rounded-2xl bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            Prosseguir para Revisão
          </button>
        </div>
      </footer>
    </motion.div>
  );
}

function Step({ num, label, active, done }: { num: number, label: string, active: boolean, done?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
        active ? "bg-secondary text-white shadow-lg shadow-secondary/20 scale-110" : 
        done ? "bg-secondary/20 text-secondary" : "bg-surface-container-highest text-on-surface-variant"
      )}>
        {done ? <CheckCircle2 className="w-5 h-5" /> : num}
      </div>
      <span className={cn(
        "text-sm font-bold hidden md:block",
        active ? "text-secondary" : "text-on-surface-variant"
      )}>{label}</span>
    </div>
  );
}

function Stat({ label, value, icon }: { label: string, value: string, icon?: ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-2xl text-center">
      <div className="flex items-center justify-center gap-1.5 mb-1 opacity-40">
        {icon}
        <span className="text-[10px] uppercase font-bold tracking-widest">{label}</span>
      </div>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}

