import { Search, User, Globe, CreditCard, Smartphone, Wifi, Monitor, Users, ShoppingCart, Umbrella, Heart, Book, Gift, Ticket, Sparkles, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CreditModal from '../components/CreditModal';
import LoginModal from '../components/LoginModal';

export default function Home() {
  const navigate = useNavigate();
  const [showCategoryMenu, setShowCategoryMenu] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const categories = {
    'telefonia-mobila': {
      name: 'Telefonia mobilă',
      icon: Smartphone,
      color: 'from-blue-400 to-cyan-400',
      services: ['Orange', 'Moldcell', 'Unite', 'IDC']
    },
    'servicii-comunale': {
      name: 'Servicii comunale',
      icon: Wifi,
      color: 'from-cyan-400 to-teal-400',
      services: ['Energocom', 'Premier Energy', 'Termoelectrica', 'Moldovagaz', 'SLOT', 'Infosapr']
    },
    'internet-tv': {
      name: 'Operatori internet și TV',
      icon: Monitor,
      color: 'from-teal-400 to-green-400',
      services: ['StarNet', 'SunTV', 'Canal 2', 'TV Moldova', 'Arax']
    },
    'plati-stat': {
      name: 'Plăți de stat',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      services: ['Amenzi', 'Impozite și taxe', 'Servicii consulare']
    },
    'creditori': {
      name: 'Plata creditorilor',
      icon: CreditCard,
      color: 'from-indigo-400 to-purple-400',
      services: ['eCredit', 'Microinvest', 'FinComBank', 'BCR Leasing']
    },
    'jocuri': {
      name: 'Jocuri',
      icon: Gift,
      color: 'from-purple-400 to-pink-400',
      services: ['Loteria Națională 7777', 'Maxbet', 'SuperBet']
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, #F7FAFF 0%, #E9F3FF 100%)'
        }}
      />

      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"
        style={{ animation: 'float 20s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl -z-10"
        style={{ animation: 'float 25s ease-in-out infinite 5s' }}
      />

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/50" style={{ boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                }}>
                <div className="absolute inset-0 opacity-30" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 3s infinite'
                }} />
                <span className="relative z-10">O</span>
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--text-strong)' }}>OPLATA.MD</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="relative max-w-md hidden md:block">
                <input
                  type="text"
                  placeholder="Căutare rapidă a serviciilor"
                  className="w-96 h-10 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <button
                className="px-6 h-10 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 2s infinite'
                }} />
                <span className="relative z-10">OK</span>
              </button>
              <button className="flex items-center gap-2 px-4 h-10 rounded-xl border transition-all duration-300 ease-out hover:scale-105 active:scale-95 glass-card"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}>
                <Globe className="w-4 h-4" />
                <span>Ro</span>
              </button>
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 px-6 h-10 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 2s infinite'
                }} />
                <User className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8 animate-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2" style={{ color: 'var(--text-strong)' }}>
              Plăți frecvente
              <Sparkles className="w-5 h-5 text-blue-400" />
            </h2>
            <button
              className="flex items-center gap-2 px-6 h-11 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(0, 174, 239, 0.3)'
              }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 2s infinite'
              }} />
              <span className="text-xl relative z-10">+</span>
              <span className="relative z-10">Adaugă serviciul tău</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            {[
              { name: 'Loteria Națională 7777', path: '/service/loteria' },
              { name: 'Orange', path: '/service/orange' },
              { name: 'eCredit', path: '/service/ecredit' },
              { name: 'Infocom', path: '/service/infocom' },
              { name: 'Iute', path: '/service/iute' },
              { name: 'Moldcell', path: '/service/moldcell' }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => navigate(service.path)}
                className="group relative rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 glass-card overflow-hidden"
                style={{
                  width: '191px',
                  height: '142px',
                  animationDelay: `${idx * 50}ms`
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'radial-gradient(circle at center, rgba(0, 174, 239, 0.1) 0%, transparent 70%)'
                }} />
                <div className="flex items-center justify-center h-full px-4 relative z-10">
                  <span className="text-sm font-semibold text-center transition-colors duration-300 group-hover:text-blue-600" style={{ color: 'var(--text-strong)' }}>
                    {service.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Energocom', path: '/service/energocom' },
              { name: 'SLOT', path: '/service/slot' },
              { name: 'Termoelectrica', path: '/service/termoelectrica' },
              { name: 'Moldovagaz', path: '/service/moldovagaz' },
              { name: 'Premier Energy', path: '/service/premier-energy' },
              { name: 'Infosapr', path: '/service/infosapr' }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => navigate(service.path)}
                className="group relative rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 glass-card overflow-hidden"
                style={{
                  width: '191px',
                  height: '142px',
                  animationDelay: `${(idx + 6) * 50}ms`
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'radial-gradient(circle at center, rgba(0, 174, 239, 0.1) 0%, transparent 70%)'
                }} />
                <div className="flex items-center justify-center h-full px-4 relative z-10">
                  <span className="text-sm font-semibold text-center transition-colors duration-300 group-hover:text-blue-600" style={{ color: 'var(--text-strong)' }}>
                    {service.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-8 animate-in" style={{ animationDelay: '100ms' }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--text-strong)' }}>
            Servicii noi
            <span className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">NEW</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'AVON', path: '/service/avon' },
              { name: 'Canal 2', path: '/service/canal2' },
              { name: 'StarNet', path: '/service/starnet' },
              { name: 'Microinvest', path: '/service/microinvest' }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => navigate(service.path)}
                className="group relative h-20 rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 glass-card overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'radial-gradient(circle at center, rgba(0, 174, 239, 0.15) 0%, transparent 70%)'
                }} />
                <div className="flex items-center justify-center h-full px-4 relative z-10">
                  <span className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600" style={{ color: 'var(--text-strong)' }}>
                    {service.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-in" style={{ animationDelay: '200ms' }}>
          <div className="relative rounded-2xl p-8 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
          }}>
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at top left, rgba(0, 174, 239, 0.1) 0%, transparent 70%)'
            }} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.2), rgba(0, 212, 255, 0.15))',
                  boxShadow: '0 4px 12px rgba(0, 174, 239, 0.2)'
                }}>
                <CreditCard className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>
                Solicită
              </h3>
              <p className="mb-6 text-lg font-semibold" style={{ color: 'var(--text-muted)' }}>
                CREDIT
              </p>
              <button
                onClick={() => setShowCreditModal(true)}
                className="px-8 h-11 rounded-xl font-medium border-2 transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 hover:shadow-lg relative overflow-hidden group/btn"
                style={{
                  background: 'white',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)'
                }}>
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.05), rgba(0, 212, 255, 0.05))'
                }} />
                <span className="relative z-10">Plătește</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => navigate('/p2p')}
            className="relative rounded-2xl p-8 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden group text-left"
            style={{
              background: 'linear-gradient(135deg, #009BE9 0%, #00B6FF 50%, #00D4FF 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 8s ease infinite',
              boxShadow: '0 12px 40px rgba(0, 174, 239, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
            }}>
            <div className="absolute inset-0 opacity-30" style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
            }} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border border-white/30">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Transfer
              </h3>
              <p className="mb-6 text-white/90 text-base" style={{ lineHeight: '1.6' }}>
                de la card la card
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-sm font-semibold text-white border border-white/40 transition-all duration-300 hover:bg-white/30 hover:scale-105">
                  VISA
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-sm font-semibold text-white border border-white/40 transition-all duration-300 hover:bg-white/30 hover:scale-105">
                  Mastercard
                </span>
              </div>
            </div>
          </button>
        </section>

        <section className="animate-in" style={{ animationDelay: '300ms' }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-strong)' }}>
            Categorii
          </h2>

          <div className="space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(categories).slice(0, 6).map(([key, category], idx) => (
                <button
                  key={idx}
                  onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 glass-card overflow-hidden ${expandedCategory === key ? 'ring-2 ring-blue-400' : ''}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 174, 239, 0.1) 0%, transparent 70%)'
                  }} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${category.color}`}
                      style={{
                        boxShadow: '0 4px 12px rgba(0, 174, 239, 0.2)'
                      }}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-medium text-center transition-colors duration-300 group-hover:text-blue-600" style={{ color: 'var(--text)', lineHeight: '1.4' }}>
                      {category.name}
                    </p>
                    <ChevronDown className={`w-4 h-4 mx-auto mt-2 transition-transform duration-300 ${expandedCategory === key ? 'rotate-180' : ''}`} style={{ color: 'var(--color-primary)' }} />
                  </div>
                </button>
              ))}
            </div>

            {expandedCategory && (
              <div className="glass-card rounded-2xl p-6 animate-in" style={{
                background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
                border: '1px solid rgba(0, 174, 239, 0.2)',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {categories[expandedCategory]?.services.map((service, serviceIdx) => (
                    <button
                      key={serviceIdx}
                      onClick={() => {
                        navigate(`/service/${service.toLowerCase().replace(/\s+/g, '-')}`);
                        setExpandedCategory(null);
                      }}
                      className="group relative rounded-2xl p-4 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 glass-card overflow-hidden h-28 flex items-center justify-center"
                      style={{
                        background: 'white',
                        border: '1px solid rgba(0, 174, 239, 0.1)'
                      }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        background: 'radial-gradient(circle at center, rgba(0, 174, 239, 0.1) 0%, transparent 70%)'
                      }} />
                      <span className="font-semibold text-sm text-center transition-colors duration-300 group-hover:text-blue-600 relative z-10" style={{ color: 'var(--text-strong)' }}>
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'E-commerce', icon: ShoppingCart, color: 'from-pink-400 to-rose-400' },
                { name: 'Turism', icon: Umbrella, color: 'from-orange-400 to-amber-400' },
                { name: 'Frumusețe și Sănătate', icon: Heart, color: 'from-rose-400 to-pink-500' },
                { name: 'Cursuri', icon: Book, color: 'from-amber-400 to-yellow-400' },
                { name: 'Loterii și Sloturi', icon: Ticket, color: 'from-green-400 to-emerald-400' },
                { name: 'Donații', icon: Gift, color: 'from-emerald-400 to-teal-500' }
              ].map((category, idx) => (
                <button
                  key={idx}
                  className="group relative rounded-2xl p-6 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 174, 239, 0.1) 0%, transparent 70%)'
                  }} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${category.color}`}
                      style={{
                        boxShadow: '0 4px 12px rgba(0, 174, 239, 0.2)'
                      }}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-medium text-center transition-colors duration-300 group-hover:text-blue-600" style={{ color: 'var(--text)', lineHeight: '1.4' }}>
                      {category.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CreditModal isOpen={showCreditModal} onClose={() => setShowCreditModal(false)} />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      <footer className="border-t mt-16 relative" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="absolute inset-0 backdrop-blur-xl bg-white/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden"
                  style={{
                    background: 'var(--gradient-primary)',
                    boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                  }}>
                  <div className="absolute inset-0 opacity-30" style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s infinite'
                  }} />
                  <span className="relative z-10">O</span>
                </div>
                <span className="text-lg font-semibold" style={{ color: 'var(--text-strong)' }}>OPLATA.MD</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                © 2019 "Paynet Services" SRL
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Licență BNM nr. L009586
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
                Despre noi
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm transition-all duration-300 hover:text-[var(--color-primary)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-muted)' }}>Contactează-ne</a></li>
                <li><a href="#" className="text-sm transition-all duration-300 hover:text-[var(--color-primary)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-muted)' }}>Termeni și Condiții</a></li>
                <li><a href="#" className="text-sm transition-all duration-300 hover:text-[var(--color-primary)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-muted)' }}>Termeni și Condiții P2P</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
                Politici
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm transition-all duration-300 hover:text-[var(--color-primary)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-muted)' }}>Politica de Confidențialitate</a></li>
                <li><a href="#" className="text-sm transition-all duration-300 hover:text-[var(--color-primary)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-muted)' }}>Politica de cookies</a></li>
                <li><a href="#" className="text-sm transition-all duration-300 hover:text-[var(--color-primary)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-muted)' }}>Setări cookies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
                Metode de plată
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2.5 rounded-xl border glass-card transition-all duration-300 hover:scale-105 cursor-pointer" style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <span className="text-sm font-semibold text-red-500">Mastercard</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl border glass-card transition-all duration-300 hover:scale-105 cursor-pointer" style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <span className="text-sm font-semibold text-blue-700">VISA</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl border glass-card transition-all duration-300 hover:scale-105 cursor-pointer" style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>MIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
