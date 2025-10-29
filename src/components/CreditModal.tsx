import { useState } from 'react';
import { X } from 'lucide-react';

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreditModal({ isOpen, onClose }: CreditModalProps) {
  const [amount, setAmount] = useState(3000);
  const [months, setMonths] = useState(6);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idnp, setIdnp] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ amount, months, name, surname, idnp, phone });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center"
        >
          <X className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
        </button>

        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: 'var(--text-strong)' }}>
          Trimite cerere de credit
        </h2>
        <p className="text-center mb-8" style={{ color: 'var(--text-muted)' }}>
          Serviciul este disponibil între orele 8:00 și 17:00, de luni până vineri.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium" style={{ color: 'var(--text-strong)' }}>
                Suma
              </label>
              <div className="px-4 py-2 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold">
                {amount.toLocaleString('ro-RO')} MDL
              </div>
            </div>
            <input
              type="range"
              min="3000"
              max="300000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00AEEF 0%, #00AEEF ${((amount - 3000) / 297000) * 100}%, #E6EBF2 ${((amount - 3000) / 297000) * 100}%, #E6EBF2 100%)`
              }}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>3,000.00 MDL</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>300,000.00 MDL</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium" style={{ color: 'var(--text-strong)' }}>
                Perioada
              </label>
              <div className="px-4 py-2 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold">
                {months} Luni
              </div>
            </div>
            <input
              type="range"
              min="6"
              max="46"
              step="1"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00AEEF 0%, #00AEEF ${((months - 6) / 40) * 100}%, #E6EBF2 ${((months - 6) / 40) * 100}%, #E6EBF2 100%)`
              }}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>6 Luni</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>46 Luni</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Nume
              </label>
              <input
                type="text"
                placeholder="Nume"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{ color: 'var(--text)' }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Prenume
              </label>
              <input
                type="text"
                placeholder="Prenume"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{ color: 'var(--text)' }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                IDNP
              </label>
              <input
                type="text"
                placeholder="IDNP"
                value={idnp}
                onChange={(e) => setIdnp(e.target.value)}
                required
                maxLength={13}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{ color: 'var(--text)' }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                Telefon Mobil (0°°°°°°°°°)
              </label>
              <input
                type="tel"
                placeholder="Telefon Mobil"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{ color: 'var(--text)' }}
              />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex items-center gap-4" style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(0, 174, 239, 0.2)'
          }}>
            <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{
              background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.1), rgba(0, 212, 255, 0.05))',
              border: '2px solid var(--color-primary)'
            }}>
              <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>e</span>
            </div>
            <div>
              <div className="font-semibold" style={{ color: 'var(--text-strong)' }}>
                {amount.toLocaleString('ro-RO')} MDL
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {months} Luni
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="credit-consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="credit-consent" className="text-sm" style={{ color: 'var(--text)' }}>
              Sunt de acord ca datele mele să fie prelucrate de către companiile de creditare alese
            </label>
          </div>

          <button
            type="submit"
            disabled={!agreed}
            className="w-full h-14 rounded-xl font-semibold text-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: agreed ? 'var(--gradient-primary)' : '#E6EBF2',
              color: agreed ? 'white' : 'var(--text-muted)',
              boxShadow: agreed ? '0 8px 24px rgba(0, 174, 239, 0.3)' : 'none'
            }}
          >
            Trimite cererea
          </button>

          <div className="glass-card rounded-xl p-4 flex items-center justify-between" style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Confirmarea acțiunii</span>
            <div className="text-xs px-3 py-1 rounded bg-gray-100" style={{ color: 'var(--text-muted)' }}>
              reCAPTCHA
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
