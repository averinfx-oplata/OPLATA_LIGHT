import { Link } from 'react-router-dom';
import { Globe, User, CreditCard, ArrowLeft } from 'lucide-react';

export default function P2PTransfer() {
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
                <span className="relative z-10">O</span>
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--text-strong)' }}>OPLATA.MD</span>
            </Link>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 h-10 rounded-xl border transition-all duration-300 ease-out hover:scale-105 active:scale-95 glass-card"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}>
                <Globe className="w-4 h-4" />
                <span>Ro</span>
              </button>
              <button
                className="flex items-center gap-2 px-6 h-10 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                }}>
                <User className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-sm transition-colors duration-300 hover:text-[var(--color-primary)]"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-strong)' }}>
            Transferați bani de la card la card
          </h1>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            La completarea formularului, vă rugăm să utilizați doar caractere simple, fără ă, â, î, ș, ț
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-6 space-y-4" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold" style={{ color: 'var(--text-strong)' }}>
                De pe cardul
              </h2>
              <div className="flex gap-2">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231434CB' width='48' height='32' rx='4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold' font-size='10'%3EVISA%3C/text%3E%3C/svg%3E" alt="VISA" className="h-6" />
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%23EB001B' width='24' height='32' rx='16'/%3E%3Crect fill='%23F79E1B' x='24' width='24' height='32' rx='16'/%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Cardul expeditorului
              </label>
              <input
                type="text"
                placeholder="Cardul expeditorului"
                maxLength={19}
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                  Valabil până
                </label>
                <input
                  type="text"
                  placeholder="LL / AA"
                  maxLength={5}
                  className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text)'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="CVV"
                  maxLength={3}
                  className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text)'
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Numele și prenumele expeditorului
              </label>
              <input
                type="text"
                placeholder="Numele și prenumele expeditorului"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Adresa
              </label>
              <input
                type="text"
                placeholder="Adresa expeditorului"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Oraș
              </label>
              <input
                type="text"
                placeholder="Orașul expeditorului"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Cod poștal
              </label>
              <input
                type="text"
                placeholder="Introduceți codul poștal al expeditor"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Țară
              </label>
              <input
                type="text"
                placeholder="Introduceți țara expeditorului"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold" style={{ color: 'var(--text-strong)' }}>
                La cardul
              </h2>
              <div className="flex gap-2">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231434CB' width='48' height='32' rx='4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold' font-size='10'%3EVISA%3C/text%3E%3C/svg%3E" alt="VISA" className="h-6" />
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%23EB001B' width='24' height='32' rx='16'/%3E%3Crect fill='%23F79E1B' x='24' width='24' height='32' rx='16'/%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Cardul destinatarului
              </label>
              <input
                type="text"
                placeholder="Cardul destinatarului"
                maxLength={19}
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Numele și prenumele destinatarului
              </label>
              <input
                type="text"
                placeholder="Numele și prenumele destinatarului"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Suma transferului
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full h-12 px-4 pr-16 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text)'
                  }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                  MDL
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Comision
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="0.00"
                  readOnly
                  className="w-full h-12 px-4 pr-16 rounded-xl border glass-card bg-gray-50"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text-muted)'
                  }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                  MDL
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Total cu comision
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="0.00"
                  readOnly
                  className="w-full h-12 px-4 pr-16 rounded-xl border glass-card bg-gray-50"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'var(--text-muted)'
                  }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                  MDL
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-6 glass-card rounded-2xl p-4" style={{
          background: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}>
          <input
            type="checkbox"
            id="terms"
            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="terms" className="text-sm" style={{ color: 'var(--text)' }}>
            Sunt de acord cu{' '}
            <a href="#" className="text-[var(--color-primary)] hover:underline font-medium">
              Termenii și condițiile serviciului
            </a>
          </label>
        </div>

        <button
          className="w-full h-14 rounded-xl font-semibold text-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group"
          style={{
            background: 'var(--gradient-primary)',
            color: 'white',
            boxShadow: '0 8px 24px rgba(0, 174, 239, 0.3)'
          }}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 2s infinite'
          }} />
          <span className="relative z-10">Transferă</span>
        </button>

        <div className="mt-12 glass-card rounded-2xl p-6" style={{
          background: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
            FAQ
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Cât timp durează transferul?
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Transferurile sunt procesate instant și banii ajung pe cardul destinatarului în maxim 5 minute.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Care este comisionul?
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Comisionul variază în funcție de suma transferată și cardurile folosite. Veți vedea suma exactă înainte de confirmare.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Este sigur să transfer bani?
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Da, toate transferurile sunt protejate prin tehnologie de criptare SSL și respectă standardele internaționale de securitate PCI DSS.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
