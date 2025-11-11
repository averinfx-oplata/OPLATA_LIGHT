import { Link } from 'react-router-dom';
import { Globe, LogOut, History, Settings, Lock, LogIn } from 'lucide-react';
import { useState } from 'react';

interface CabinetProps {
  email: string;
  onLogout: () => void;
}

type TabType = 'history' | 'account' | 'settings';

export default function Cabinet({ email, onLogout }: CabinetProps) {
  const [activeTab, setActiveTab] = useState<TabType>('history');

  const menuItems = [
    { id: 'history', label: 'Istoricul tranzacțiilor', icon: History },
    { id: 'account', label: 'Contul meu', icon: Settings },
    { id: 'settings', label: 'Securitate', icon: Lock }
  ];

  const transactions = [
    { id: 1, service: 'Premier Energy', amount: '100', date: '2024-01-15', status: 'Achitat' },
    { id: 2, service: 'Premier Energy', amount: '150', date: '2024-01-14', status: 'Achitat' },
    { id: 3, service: 'Premier Energy', amount: '200', date: '2024-01-13', status: 'Achitat' },
    { id: 4, service: 'Moldcel', amount: '50', date: '2024-01-12', status: 'Achitat' },
    { id: 5, service: 'Moldcel', amount: '75', date: '2024-01-11', status: 'Achitat' },
    { id: 6, service: 'Moldcel', amount: '60', date: '2024-01-10', status: 'Achitat' }
  ];

  const getServiceColor = (service: string) => {
    if (service.includes('Premier')) return '#2563EB';
    if (service.includes('Moldcel')) return '#A855F7';
    return '#00AEEF';
  };

  const getServiceLetter = (service: string) => {
    return service.charAt(0).toUpperCase();
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
                onClick={onLogout}
                className="flex items-center gap-2 px-6 h-10 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 border-2"
                style={{
                  background: 'white',
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)'
                }}>
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-24" style={{
              background: 'linear-gradient(135deg, #0093D5 0%, #00AEEF 50%, #00C4FF 100%)',
              boxShadow: '0 8px 32px rgba(0, 174, 239, 0.2)'
            }}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: 'rgba(255, 255, 255, 0.3)' }}
                >
                  {email.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-white capitalize">{email.split('@')[0]}</div>
                  <div className="text-sm text-white/80">{email}</div>
                </div>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === item.id
                          ? 'bg-white/20 backdrop-blur-sm text-white'
                          : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {activeTab === 'history' && (
              <div className="glass-card rounded-2xl p-8" style={{
                background: 'white',
                border: '1px solid rgba(0, 174, 239, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                  Istoricul plătilor
                </h2>
                <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                  Din acest meniu poți vedea istoricul tuturor tranzacțiilor tale
                </p>

                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50"
                      style={{
                        background: 'rgba(0, 174, 239, 0.02)',
                        border: '1px solid rgba(0, 174, 239, 0.1)'
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold flex-shrink-0"
                        style={{ background: getServiceColor(tx.service) }}
                      >
                        {getServiceLetter(tx.service)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>
                          {tx.service}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {tx.date}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-semibold" style={{ color: 'var(--text-strong)' }}>
                          {tx.amount} MDL
                        </div>
                        <div className="text-xs text-green-600">{tx.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="glass-card rounded-2xl p-8" style={{
                background: 'white',
                border: '1px solid rgba(0, 174, 239, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                  Contul meu
                </h2>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                  Aici poți schimba datele tale de profil
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-strong)' }}>
                      Fotografia de profil
                    </label>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl"
                        style={{ background: 'var(--gradient-primary)' }}
                      >
                        {email.charAt(0).toUpperCase()}
                      </div>
                      <button
                        className="px-6 h-10 rounded-xl font-medium border-2 transition-all duration-300"
                        style={{
                          background: 'white',
                          color: 'var(--color-primary)',
                          borderColor: 'var(--color-primary)'
                        }}
                      >
                        Încarcă fotografie
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-strong)' }}>
                      Nume complet
                    </label>
                    <input
                      type="text"
                      placeholder="Introduceți numele complet"
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      style={{ color: 'var(--text)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-strong)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      disabled
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 transition-all duration-300"
                      style={{ color: 'var(--text)' }}
                    />
                  </div>

                  <button
                    className="w-full h-14 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95"
                    style={{
                      background: 'var(--gradient-primary)',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(0, 174, 239, 0.3)'
                    }}
                  >
                    Salvează modificările
                  </button>

                  <button
                    className="w-full h-12 rounded-xl font-medium border-2 transition-all duration-300"
                    style={{
                      background: 'white',
                      color: 'var(--text-strong)',
                      borderColor: 'var(--text-muted)'
                    }}
                  >
                    Anulează
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="glass-card rounded-2xl p-8" style={{
                background: 'white',
                border: '1px solid rgba(0, 174, 239, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                  Securitate
                </h2>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                  Protejați-vă contul cu o strategie suplimentară de securitate
                </p>

                <div className="space-y-6">
                  <div className="glass-card rounded-xl p-6" style={{
                    background: 'rgba(0, 174, 239, 0.05)',
                    border: '1px solid rgba(0, 174, 239, 0.1)'
                  }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--text-strong)' }}>
                          Autentificare în două etape
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          Protejați-vă contul cu un strat suplimentar de securitate
                        </p>
                      </div>
                      <button
                        className="px-4 h-10 rounded-xl font-medium text-sm transition-all duration-300"
                        style={{
                          background: 'var(--gradient-primary)',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)'
                        }}
                      >
                        Activează
                      </button>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6" style={{
                    background: 'rgba(0, 174, 239, 0.05)',
                    border: '1px solid rgba(0, 174, 239, 0.1)'
                  }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--text-strong)' }}>
                          Sesiuni active
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          Deconectați dispozitivele conectate la contul dumneavoastră
                        </p>
                      </div>
                      <button
                        className="px-4 h-10 rounded-xl font-medium text-sm transition-all duration-300 border-2"
                        style={{
                          background: 'white',
                          color: 'var(--color-primary)',
                          borderColor: 'var(--color-primary)'
                        }}
                      >
                        Vezi sesiuni
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
