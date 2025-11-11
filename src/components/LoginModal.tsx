import { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (email: string) => void;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      onLogin?.(email);
      setEmail('');
      setAgreed(false);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto animate-in"
      onClick={onClose}
    >
      <div className="min-h-screen w-full max-w-7xl flex items-center justify-center py-8">
        <div
          className="w-full rounded-3xl overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            maxWidth: '1200px'
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/90 hover:bg-white transition-colors flex items-center justify-center z-10 shadow-lg"
          >
            <X className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative p-12 flex flex-col justify-center" style={{
              background: 'linear-gradient(135deg, #0093D5 0%, #00AEEF 50%, #00C4FF 100%)'
            }}>
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
              }} />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/30">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      O
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl font-bold mb-4 text-white">
                  Înregistrează
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Contul tău personal
                </p>

                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Salvarea cardului</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Istoricul tranzacțiilor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Repetare plăți cu 1 clic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Coș</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <img
                    src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Person"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center bg-white">
              <div className="max-w-md mx-auto w-full">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                  Bun venit pe OPLATA.MD
                </h3>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                  Introdu adresa ta de e-mail pentru a te autentifica sau a te înregistra:
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                      Adresa de e-mail
                    </label>
                    <input
                      type="email"
                      placeholder="Adresa de e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-14 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      style={{ color: 'var(--text)' }}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="login-consent"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="login-consent" className="text-sm" style={{ color: 'var(--text)' }}>
                      <a href="#" className="text-[var(--color-primary)] hover:underline">
                        Sunt de acord cu termenii și condițiile
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!agreed || !email}
                    className="w-full h-14 rounded-xl font-semibold text-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: (agreed && email) ? 'var(--gradient-primary)' : '#E6EBF2',
                      color: (agreed && email) ? 'white' : 'var(--text-muted)',
                      boxShadow: (agreed && email) ? '0 8px 24px rgba(0, 174, 239, 0.3)' : 'none'
                    }}
                  >
                    Continuă
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full h-14 rounded-xl font-semibold text-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 border-2"
                    style={{
                      background: 'white',
                      color: 'var(--text-strong)',
                      borderColor: 'var(--color-primary)'
                    }}
                  >
                    Înapoi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
