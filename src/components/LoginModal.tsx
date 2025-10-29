import { useState } from 'react';
import { X, Mail } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, isLogin });
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

                  <button
                    type="button"
                    className="w-full h-14 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-gray-300"
                    style={{
                      background: 'white',
                      color: 'var(--text-strong)'
                    }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Continuă cu Google</span>
                  </button>

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
                    Continuă cu e-mailul
                  </button>

                  <button
                    type="button"
                    className="w-full h-14 rounded-xl font-semibold text-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 border-2"
                    style={{
                      background: '#6B7280',
                      color: 'white',
                      borderColor: '#6B7280'
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
