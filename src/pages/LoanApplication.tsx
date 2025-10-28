import { Link } from 'react-router-dom';
import { Globe, User, ArrowLeft, CreditCard, Shield, Clock } from 'lucide-react';

export default function LoanApplication() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-sm transition-colors duration-300 hover:text-[var(--color-primary)]"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-strong)' }}>
            Solicită Credit Online
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Obține un credit rapid și simplu direct de pe site. Completează formularul și primește o decizie în câteva minute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-2xl p-6 text-center" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
          }}>
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>Rapid</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Decizie în 5 minute</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
          }}>
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>Sigur</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Date protejate SSL</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
          }}>
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>Flexibil</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Până la 50.000 MDL</p>
          </div>
        </div>

        <form className="glass-card rounded-2xl p-8 space-y-6 mb-8" style={{
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
        }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-strong)' }}>
            Informații Personale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Nume *
              </label>
              <input
                type="text"
                required
                placeholder="Introduceți numele"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Prenume *
              </label>
              <input
                type="text"
                required
                placeholder="Introduceți prenumele"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                IDNP *
              </label>
              <input
                type="text"
                required
                placeholder="Introduceți IDNP"
                maxLength={13}
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Data nașterii *
              </label>
              <input
                type="date"
                required
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Telefon *
              </label>
              <input
                type="tel"
                required
                placeholder="+373 XXXX XXXX"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="exemplu@email.com"
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
              Adresa de domiciliu *
            </label>
            <input
              type="text"
              required
              placeholder="Strada, numărul, apartamentul"
              className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--text)'
              }}
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-6" style={{ color: 'var(--text-strong)' }}>
            Detalii Credit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Suma solicitată (MDL) *
              </label>
              <input
                type="number"
                required
                placeholder="1000"
                min="1000"
                max="50000"
                step="100"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Perioada (luni) *
              </label>
              <select
                required
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              >
                <option value="">Selectați perioada</option>
                <option value="3">3 luni</option>
                <option value="6">6 luni</option>
                <option value="12">12 luni</option>
                <option value="18">18 luni</option>
                <option value="24">24 luni</option>
                <option value="36">36 luni</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Scopul creditului *
              </label>
              <select
                required
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              >
                <option value="">Selectați scopul</option>
                <option value="personal">Nevoi personale</option>
                <option value="renovare">Renovare locuință</option>
                <option value="medical">Tratament medical</option>
                <option value="educatie">Educație</option>
                <option value="altele">Altele</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Venitul lunar (MDL) *
              </label>
              <input
                type="number"
                required
                placeholder="5000"
                min="0"
                step="100"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-6" style={{ color: 'var(--text-strong)' }}>
            Informații Angajator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Numele companiei *
              </label>
              <input
                type="text"
                required
                placeholder="Introduceți numele companiei"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Funcția *
              </label>
              <input
                type="text"
                required
                placeholder="Introduceți funcția"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Adresa companiei *
              </label>
              <input
                type="text"
                required
                placeholder="Adresa completă a companiei"
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>
          </div>

          <div className="flex items-start gap-3 mt-6 glass-card rounded-2xl p-4" style={{
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-sm" style={{ color: 'var(--text)' }}>
              Confirm că am citit și accept{' '}
              <a href="#" className="text-[var(--color-primary)] hover:underline font-medium">
                Termenii și condițiile
              </a>
              {' '}și{' '}
              <a href="#" className="text-[var(--color-primary)] hover:underline font-medium">
                Politica de confidențialitate
              </a>
              . Sunt de acord cu procesarea datelor personale.
            </label>
          </div>

          <button
            type="submit"
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
            <span className="relative z-10">Trimite Cererea</span>
          </button>
        </form>

        <div className="glass-card rounded-2xl p-6 mb-8" style={{
          background: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
            Condițiile Creditului
          </h3>
          <div className="space-y-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            <p>• Suma: de la 1.000 până la 50.000 MDL</p>
            <p>• Dobânda: de la 12% pe an</p>
            <p>• Perioada: de la 3 până la 36 luni</p>
            <p>• Vârsta solicitantului: 18-65 ani</p>
            <p>• Cetățenie: Republica Moldova</p>
            <p>• Necesare: Buletin de identitate, confirmare venit</p>
            <p>• Decizie: în maxim 24 ore</p>
          </div>
        </div>
      </main>
    </div>
  );
}
