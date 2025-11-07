import { Link, useParams } from 'react-router-dom';
import { Globe, User, ArrowLeft, Smartphone, Zap, Wifi, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ServiceConfig {
  name: string;
  icon: typeof Smartphone;
  color: string;
  description: string;
  fields: Array<{
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

const serviceConfigs: Record<string, ServiceConfig> = {
  'orange': {
    name: 'Orange Moldova',
    icon: Smartphone,
    color: '#FF6600',
    description: 'Orange Moldova este unul dintre liderii pieței de telecomunicații din Moldova, oferind servicii mobile de înaltă calitate, internet rapid și o gamă largă de opțiuni pentru clienții săi.',
    fields: [
      { name: 'phone', label: 'Număr de telefon', type: 'tel', placeholder: '0XXXXXXXX', required: true },
      { name: 'amount', label: 'Suma de plată (MDL)', type: 'number', placeholder: '0.00', required: true }
    ],
    faq: [
      { question: 'Cum pot verifica soldul?', answer: 'Formați *100# pentru a verifica soldul dvs. curent.' },
      { question: 'Cât timp durează reîncărcarea?', answer: 'Reîncărcarea este instantanee și va primi o confirmare prin SMS.' },
      { question: 'Pot anula plata?', answer: 'Da, puteți anula tranzacția în primele 5 minute după efectuare contactând suportul.' }
    ]
  },
  'moldcell': {
    name: 'Moldcell',
    icon: Smartphone,
    color: '#0066CC',
    description: 'Moldcell oferă servicii de telefonie mobilă de calitate superioară și soluții inovatoare pentru comunicare în Republica Moldova.',
    fields: [
      { name: 'phone', label: 'Număr de telefon', type: 'tel', placeholder: '0XXXXXXXX', required: true },
      { name: 'amount', label: 'Suma de plată (MDL)', type: 'number', placeholder: '0.00', required: true }
    ],
    faq: [
      { question: 'Care este suma minimă de reîncărcare?', answer: 'Suma minimă de reîncărcare este de 10 MDL.' },
      { question: 'Pot reîncărca un alt număr?', answer: 'Da, puteți reîncărca orice număr Moldcell din Moldova.' },
      { question: 'Primesc factură?', answer: 'Da, veți primi o confirmare electronică pe email după finalizarea plății.' }
    ]
  },
  'energocom': {
    name: 'Energocom',
    icon: Zap,
    color: '#FFB800',
    description: 'Energocom este furnizorul principal de energie electrică în Republica Moldova, asigurând servicii de calitate pentru locuințe și afaceri.',
    fields: [
      { name: 'contract', label: 'Număr contract', type: 'text', placeholder: 'Introduceți numărul contractului', required: true },
      { name: 'amount', label: 'Suma de plată (MDL)', type: 'number', placeholder: '0.00', required: true }
    ],
    faq: [
      { question: 'Unde găsesc numărul contractului?', answer: 'Numărul contractului se află pe factura dvs. de energie electrică.' },
      { question: 'Pot plăti în avans?', answer: 'Da, puteți plăti orice sumă pentru a crea un sold pozitiv.' },
      { question: 'Când se procesează plata?', answer: 'Plata este procesată instant și se reflectă în cont în maxim 24 ore.' }
    ]
  },
  'moldovagaz': {
    name: 'Moldovagaz',
    icon: Zap,
    color: '#0055AA',
    description: 'Moldovagaz este furnizorul național de gaze naturale, asigurând aprovizionarea continuă cu gaze pentru consumatori casnici și industriali.',
    fields: [
      { name: 'clientCode', label: 'Cod client', type: 'text', placeholder: 'Introduceți codul client', required: true },
      { name: 'amount', label: 'Suma de plată (MDL)', type: 'number', placeholder: '0.00', required: true }
    ],
    faq: [
      { question: 'Unde găsesc codul client?', answer: 'Codul client se află pe factura lunară de gaze naturale.' },
      { question: 'Există comisioane?', answer: 'Nu, plata pentru Moldovagaz prin OPLATA.MD este fără comision.' },
      { question: 'Pot programa plăți automate?', answer: 'Da, după autentificare puteți configura plăți recurente.' }
    ]
  },
  'starnet': {
    name: 'StarNet',
    icon: Wifi,
    color: '#E31E24',
    description: 'StarNet oferă servicii de internet și televiziune prin fibră optică de înaltă viteză în Republica Moldova, asigurând conexiuni stabile și rapide.',
    fields: [
      { name: 'clientId', label: 'ID client', type: 'text', placeholder: 'Introduceți ID-ul client', required: true },
      { name: 'amount', label: 'Suma de plată (MDL)', type: 'number', placeholder: '0.00', required: true }
    ],
    faq: [
      { question: 'Unde găsesc ID-ul client?', answer: 'ID-ul client se află pe contractul dvs. sau pe factură.' },
      { question: 'Cât durează activarea după plată?', answer: 'Serviciile sunt activate automat în câteva minute după confirmare.' },
      { question: 'Pot schimba planul tarifar?', answer: 'Da, contactați serviciul clienți pentru a schimba planul.' }
    ]
  }
};

const defaultConfig: ServiceConfig = {
  name: 'Serviciu',
  icon: Zap,
  color: '#00AEEF',
  description: 'Plătiți rapid și sigur pentru serviciile dvs. prin OPLATA.MD.',
  fields: [
    { name: 'clientCode', label: 'Cod client / Număr contract', type: 'text', placeholder: 'Introduceți codul client sau numărul contractului', required: true },
    { name: 'amount', label: 'Suma de plată (MDL)', type: 'number', placeholder: '0.00', required: true }
  ],
  faq: [
    { question: 'Este sigură plata?', answer: 'Da, toate plățile sunt protejate prin SSL și respectă standardele PCI DSS.' },
    { question: 'Când se procesează plata?', answer: 'Plățile sunt procesate instant sau în maxim 24 ore lucrătoare.' }
  ]
};

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: Record<string, string>;
  serviceName: string;
  amount: string;
}

function ConfirmationModal({ isOpen, onClose, onConfirm, formData, serviceName, amount }: ConfirmationModalProps) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 relative"
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

        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
          Confirmați plata
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          Suma totală: <span className="font-bold" style={{ color: 'var(--color-primary)' }}>{amount} MDL</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
              Email pentru confirmare *
            </label>
            <input
              type="email"
              placeholder="exemplu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl border border-gray-300 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              style={{ color: 'var(--text)' }}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="confirm-consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="confirm-consent" className="text-sm" style={{ color: 'var(--text)' }}>
              Sunt de acord cu{' '}
              <a href="#" className="text-[var(--color-primary)] hover:underline font-medium">
                politica de confidențialitate
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
            Confirmă plata
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ServicePayment() {
  const { serviceId } = useParams();
  const config = serviceConfigs[serviceId || ''] || defaultConfig;
  const ServiceIcon = config.icon;

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmPayment = () => {
    console.log('Payment confirmed:', formData);
    setShowConfirmation(false);
  };

  const amount = formData.amount || '0.00';
  const commission = '0.00';
  const total = parseFloat(amount) + parseFloat(commission);

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

        <div className="glass-card rounded-2xl p-6 mb-6 flex items-center gap-4" style={{
          background: 'white',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
        }}>
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: config.color }}
          >
            <ServiceIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-strong)' }}>
              {config.name}
            </h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Plata pentru servicii
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass-card rounded-2xl p-4 text-center" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Instant</div>
            <div className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>Fără comision</div>
          </div>

          <div className="glass-card rounded-2xl p-4 text-center" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Orice card</div>
            <div className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>Visa, Mastercard</div>
          </div>

          <div className="glass-card rounded-2xl p-4 text-center" style={{
            background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>24/7</div>
            <div className="font-semibold text-sm" style={{ color: 'var(--text-strong)' }}>Disponibil non-stop</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6 mb-6" style={{
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 212, 255, 0.05) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
        }}>
          {config.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-strong)' }}>
                {field.label} {field.required && '*'}
              </label>
              <input
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                min={field.type === 'number' ? '0' : undefined}
                step={field.type === 'number' ? '0.01' : undefined}
                className="w-full h-12 px-4 rounded-xl border glass-card transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--text)'
                }}
              />
            </div>
          ))}

          <div className="glass-card rounded-xl p-4" style={{
            background: 'rgba(0, 174, 239, 0.05)',
            border: '1px solid rgba(0, 174, 239, 0.1)'
          }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Suma de plată</span>
              <span className="font-semibold" style={{ color: 'var(--text-strong)' }}>{amount} MDL</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Comision</span>
              <span className="font-semibold" style={{ color: 'var(--text-strong)' }}>{commission} MDL</span>
            </div>
            <div className="border-t pt-2 mt-2" style={{ borderColor: 'rgba(0, 174, 239, 0.1)' }}>
              <div className="flex justify-between items-center">
                <span className="font-semibold" style={{ color: 'var(--text-strong)' }}>Total</span>
                <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{total.toFixed(2)} MDL</span>
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

        <div className="glass-card rounded-2xl p-6 mb-6" style={{
          background: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-strong)' }}>
            Despre serviciu
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {config.description}
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6" style={{
          background: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-strong)' }}>
            Întrebări frecvente
          </h3>
          <div className="space-y-3">
            {config.faq.map((item, index) => (
              <div key={index} className="rounded-xl border transition-all duration-300" style={{
                borderColor: expandedFaq === index ? 'rgba(0, 174, 239, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                background: expandedFaq === index ? 'rgba(0, 174, 239, 0.05)' : 'transparent'
              }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 transition-colors duration-300 hover:bg-opacity-60"
                  style={{
                    background: expandedFaq === index ? 'rgba(0, 174, 239, 0.08)' : 'transparent'
                  }}
                >
                  <h4 className="font-medium text-left" style={{ color: 'var(--text-strong)' }}>
                    {item.question}
                  </h4>
                  <ChevronDown
                    className="w-5 h-5 transition-transform duration-300 flex-shrink-0"
                    style={{
                      color: 'var(--color-primary)',
                      transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4 border-t" style={{ borderColor: 'rgba(0, 174, 239, 0.1)' }}>
                    <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmPayment}
        formData={formData}
        serviceName={config.name}
        amount={total.toFixed(2)}
      />
    </div>
  );
}
