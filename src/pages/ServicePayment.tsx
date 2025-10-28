import { Link, useParams } from 'react-router-dom';
import { Globe, User, ArrowLeft, CreditCard, CheckCircle2, Info } from 'lucide-react';

export default function ServicePayment() {
  const { serviceId } = useParams();

  const serviceNames: Record<string, string> = {
    'loteria': 'Loteria Națională 7777',
    'orange': 'Orange Moldova',
    'ecredit': 'eCredit',
    'infocom': 'Infocom',
    'iute': 'Iute Credit',
    'moldcell': 'Moldcell',
    'energocom': 'Energocom',
    'slot': 'SLOT',
    'termoelectrica': 'Termoelectrica',
    'moldovagaz': 'Moldovagaz',
    'premier-energy': 'Premier Energy',
    'infosapr': 'Infosapr',
    'avon': 'AVON',
    'canal2': 'Canal 2',
    'starnet': 'StarNet',
    'microinvest': 'Microinvest'
  };

  const serviceName = serviceNames[serviceId || ''] || 'Serviciu';

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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            Plata pentru {serviceName}
          </h1>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>
            Completați formularul pentru a efectua plata rapid și sigur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-2xl p-4 flex items-center gap-3" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Instant</div>
              <div className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>Fără comision</div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex items-center gap-3" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Orice card</div>
              <div className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>Visa, Mastercard</div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex items-center gap-3" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>24/7</div>
              <div className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>Disponibil non-stop</div>
            </div>
          </div>
        </div>

        <form className="glass-card rounded-2xl p-8 space-y-6 mb-8" style={{
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
        }}>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
              Cod client / Număr contract *
            </label>
            <input
              type="text"
              required
              placeholder="Introduceți codul client sau numărul contractului"
              className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--text)'
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
              Suma de plată (MDL) *
            </label>
            <input
              type="number"
              required
              placeholder="0.00"
              min="0"
              step="0.01"
              className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--text)'
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
              Email pentru confirmare
            </label>
            <input
              type="email"
              placeholder="exemplu@email.com"
              className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--text)'
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
              Telefon pentru confirmare
            </label>
            <input
              type="tel"
              placeholder="+373 XXXX XXXX"
              className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--text)'
              }}
            />
          </div>

          <div className="glass-card rounded-xl p-4" style={{
            background: 'rgba(0, 174, 239, 0.05)',
            border: '1px solid rgba(0, 174, 239, 0.1)'
          }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Suma de plată</span>
              <span className="font-semibold" style={{ color: 'var(--text-strong)' }}>0.00 MDL</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Comision</span>
              <span className="font-semibold" style={{ color: 'var(--text-strong)' }}>0.00 MDL</span>
            </div>
            <div className="border-t pt-2 mt-2" style={{ borderColor: 'rgba(0, 174, 239, 0.1)' }}>
              <div className="flex justify-between items-center">
                <span className="font-semibold" style={{ color: 'var(--text-strong)' }}>Total</span>
                <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>0.00 MDL</span>
              </div>
            </div>
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
            <span className="relative z-10">Plătește</span>
          </button>

          <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            Apăsând "Plătește", confirmați că sunteți de acord cu{' '}
            <a href="#" className="text-[var(--color-primary)] hover:underline">
              termenii și condițiile
            </a>
            {' '}serviciului
          </p>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6" style={{
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-strong)' }}>
              Securitate
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Toate tranzacțiile sunt protejate prin protocolul SSL și respectă standardele PCI DSS. Datele cardului dumneavoastră sunt în siguranță.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6" style={{
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-strong)' }}>
              Suport
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
              Aveți întrebări? Contactați-ne:
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
              +373 22 000 000
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
              support@oplata.md
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
