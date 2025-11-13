import { Link } from 'react-router-dom';
import { Globe, LogOut, History, Settings, ShoppingCart, CreditCard, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface CabinetProps {
  email: string;
  onLogout: () => void;
}

type TabType = 'history' | 'account' | 'cart' | 'cards';

export default function Cabinet({ email, onLogout }: CabinetProps) {
  const [activeTab, setActiveTab] = useState<TabType>('history');
  const [cartItems, setCartItems] = useState([
    { id: 1, service: 'Premier Energy', amount: 100, date: '2024-01-15' },
    { id: 2, service: 'Moldcel', amount: 50, date: '2024-01-14' },
    { id: 3, service: 'Orange', amount: 75, date: '2024-01-13' }
  ]);
  const [cards, setCards] = useState([
    { id: 1, number: '5569****1803', holder: 'Alexandru Pobusan', expiry: '12/26', type: 'mastercard', last4: '1803' },
    { id: 2, number: '4532****9876', holder: 'Alexandru Pobusan', expiry: '08/25', type: 'visa', last4: '9876' },
    { id: 3, number: '3782****4567', holder: 'Alexandru Pobusan', expiry: '11/27', type: 'amex', last4: '4567' }
  ]);

  const menuItems = [
    { id: 'history', label: 'Istoricul tranzacțiilor', icon: History },
    { id: 'account', label: 'Contul meu', icon: Settings },
    { id: 'cart', label: 'Coșul meu', icon: ShoppingCart },
    { id: 'cards', label: 'Plățile mele', icon: CreditCard }
  ];

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

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

            {activeTab === 'cart' && (
              <div className="glass-card rounded-2xl p-8" style={{
                background: 'white',
                border: '1px solid rgba(0, 174, 239, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                  Coșul meu
                </h2>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                  Aici sunt serviciile pe care le-ai adăugat pentru a le plăti
                </p>

                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: 'var(--text-muted)' }} />
                    <p style={{ color: 'var(--text-muted)' }}>Coșul tău este gol</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-5 rounded-xl transition-all duration-300"
                        style={{
                          background: 'rgba(0, 174, 239, 0.05)',
                          border: '1px solid rgba(0, 174, 239, 0.1)'
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-semibold flex-shrink-0"
                          style={{ background: getServiceColor(item.service) }}
                        >
                          {getServiceLetter(item.service)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold" style={{ color: 'var(--text-strong)' }}>
                            {item.service}
                          </h3>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            Adăugat pe {item.date}
                          </p>
                        </div>
                        <div className="text-right mr-4 flex-shrink-0">
                          <div className="font-bold text-lg" style={{ color: 'var(--text-strong)' }}>
                            {item.amount} MDL
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-3 rounded-xl transition-all duration-300 ease-out hover:scale-110 active:scale-95 flex-shrink-0"
                          style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: '#EF4444'
                          }}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(0, 174, 239, 0.2)' }}>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-lg font-semibold" style={{ color: 'var(--text-strong)' }}>
                          Total de plată:
                        </span>
                        <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                          {cartItems.reduce((sum, item) => sum + item.amount, 0)} MDL
                        </span>
                      </div>
                      <button
                        className="w-full h-14 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95"
                        style={{
                          background: 'var(--gradient-primary)',
                          color: 'white',
                          boxShadow: '0 8px 24px rgba(0, 174, 239, 0.3)'
                        }}
                      >
                        Plătește acum
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'cards' && (
              <div className="glass-card rounded-2xl p-8" style={{
                background: 'white',
                border: '1px solid rgba(0, 174, 239, 0.1)',
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                  Plățile mele
                </h2>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                  Gestionează-ți cardurile salvate pentru plăți mai rapide
                </p>

                <div className="space-y-4">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
                      style={{
                        background: card.type === 'visa'
                          ? 'linear-gradient(135deg, #1A1F71 0%, #3B3DB3 100%)'
                          : card.type === 'mastercard'
                          ? 'linear-gradient(135deg, #EB001B 0%, #F79E1B 100%)'
                          : 'linear-gradient(135deg, #006FCF 0%, #00D4FF 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex-1">
                          <p className="text-white/70 text-sm mb-6">Card de credit</p>
                          <p className="text-white text-2xl font-mono tracking-wider mb-6">
                            {card.number}
                          </p>
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-white/70 text-xs mb-1">Titular</p>
                              <p className="text-white font-semibold">{card.holder}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white/70 text-xs mb-1">Valabil până</p>
                              <p className="text-white font-semibold">{card.expiry}</p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeCard(card.id)}
                          className="p-3 rounded-xl transition-all duration-300 ease-out hover:scale-110 active:scale-95 flex-shrink-0 ml-4"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: 'white'
                          }}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <button
                    className="w-full h-14 rounded-xl font-semibold border-2 transition-all duration-300 ease-out hover:scale-105 active:scale-95 mt-6"
                    style={{
                      background: 'white',
                      color: 'var(--color-primary)',
                      borderColor: 'var(--color-primary)'
                    }}
                  >
                    Adaugă card nou
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
