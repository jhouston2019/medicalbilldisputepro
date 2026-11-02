import { defineConfig, loadEnv } from 'vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const supabaseUrl =
    env.VITE_SUPABASE_URL ||
    env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    ''
  const supabaseAnonKey =
    env.VITE_SUPABASE_ANON_KEY ||
    env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    ''

  return {
    server: {
      port: 3000
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(supabaseUrl),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(supabaseAnonKey),
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          success: resolve(__dirname, 'success.html'),
          app: resolve(__dirname, 'app.html'),
          pricing: resolve(__dirname, 'pricing.html'),
          cancel: resolve(__dirname, 'cancel.html'),
          payment: resolve(__dirname, 'payment.html'),
          dashboard: resolve(__dirname, 'dashboard.html'),
          login: resolve(__dirname, 'login.html'),
          signup: resolve(__dirname, 'signup.html'),
          updatePassword: resolve(__dirname, 'update-password.html'),
          examples: resolve(__dirname, 'examples.html'),
          preview: resolve(__dirname, 'preview.html'),
          result: resolve(__dirname, 'result.html'),
          'duplicate-charges-medical-bill': resolve(__dirname, 'duplicate-charges-medical-bill.html'),
          'upcoding-medical-billing': resolve(__dirname, 'upcoding-medical-billing.html'),
          'unbundling-medical-billing': resolve(__dirname, 'unbundling-medical-billing.html'),
          'balance-billing': resolve(__dirname, 'balance-billing.html'),
          'surprise-medical-bill': resolve(__dirname, 'surprise-medical-bill.html'),
          'charged-for-services-not-received': resolve(__dirname, 'charged-for-services-not-received.html'),
          'billed-after-insurance-paid': resolve(__dirname, 'billed-after-insurance-paid.html'),
          'incorrect-quantity-or-units-medical-bill': resolve(__dirname, 'incorrect-quantity-or-units-medical-bill.html'),
          'er-bill-too-high': resolve(__dirname, 'er-bill-too-high.html'),
          'out-of-network-bill-at-in-network-hospital': resolve(__dirname, 'out-of-network-bill-at-in-network-hospital.html'),
          'ambulance-bill-dispute': resolve(__dirname, 'ambulance-bill-dispute.html'),
          'air-ambulance-bill-dispute': resolve(__dirname, 'air-ambulance-bill-dispute.html'),
          'lab-bill-dispute': resolve(__dirname, 'lab-bill-dispute.html'),
          'dme-bill-dispute': resolve(__dirname, 'dme-bill-dispute.html'),
          'uninsured-self-pay-medical-bill': resolve(__dirname, 'uninsured-self-pay-medical-bill.html'),
          'anesthesiologist-surprise-bill': resolve(__dirname, 'anesthesiologist-surprise-bill.html'),
          'medical-bill-sent-to-collections': resolve(__dirname, 'medical-bill-sent-to-collections.html'),
          'insurance-denied-claim-medical-bill': resolve(__dirname, 'insurance-denied-claim-medical-bill.html'),
          'medicare-medicaid-billing-errors': resolve(__dirname, 'medicare-medicaid-billing-errors.html'),
          'radiology-pathology-bill-dispute': resolve(__dirname, 'radiology-pathology-bill-dispute.html'),
          'how-to-dispute-a-medical-bill': resolve(__dirname, 'how-to-dispute-a-medical-bill.html'),
          'how-to-request-itemized-medical-bill': resolve(__dirname, 'how-to-request-itemized-medical-bill.html'),
          'how-to-read-an-eob': resolve(__dirname, 'how-to-read-an-eob.html'),
          'how-to-write-a-medical-bill-dispute-letter': resolve(__dirname, 'how-to-write-a-medical-bill-dispute-letter.html'),
          'medical-bill-dispute-deadlines': resolve(__dirname, 'medical-bill-dispute-deadlines.html'),
          'how-to-negotiate-a-medical-bill': resolve(__dirname, 'how-to-negotiate-a-medical-bill.html'),
          'hospital-financial-assistance-application': resolve(__dirname, 'hospital-financial-assistance-application.html'),
          'request-medical-records-for-billing-dispute': resolve(__dirname, 'request-medical-records-for-billing-dispute.html'),
          'file-complaint-state-insurance-commissioner': resolve(__dirname, 'file-complaint-state-insurance-commissioner.html'),
          'good-faith-estimate-dispute': resolve(__dirname, 'good-faith-estimate-dispute.html'),
          'what-to-do-before-medical-bill-goes-to-collections': resolve(__dirname, 'what-to-do-before-medical-bill-goes-to-collections.html'),
          'should-i-pay-a-medical-bill-while-disputing': resolve(__dirname, 'should-i-pay-a-medical-bill-while-disputing.html'),
          'medical-bill-dispute-checklist': resolve(__dirname, 'medical-bill-dispute-checklist.html'),
          'sample-letter-duplicate-charge': resolve(__dirname, 'sample-letter-duplicate-charge.html'),
          'sample-letter-balance-billing': resolve(__dirname, 'sample-letter-balance-billing.html'),
          'sample-letter-itemized-bill-request': resolve(__dirname, 'sample-letter-itemized-bill-request.html'),
          'sample-letter-upcoding': resolve(__dirname, 'sample-letter-upcoding.html'),
          'sample-letter-collections-validation': resolve(__dirname, 'sample-letter-collections-validation.html'),
          'sample-letter-financial-assistance-request': resolve(__dirname, 'sample-letter-financial-assistance-request.html'),
          'no-surprises-act-explained': resolve(__dirname, 'no-surprises-act-explained.html'),
          'medical-billing-glossary': resolve(__dirname, 'medical-billing-glossary.html'),
          'medical-billing-advocate-vs-dispute-letter': resolve(__dirname, 'medical-billing-advocate-vs-dispute-letter.html'),
          'eob-vs-medical-bill': resolve(__dirname, 'eob-vs-medical-bill.html'),
          'common-medical-billing-errors': resolve(__dirname, 'common-medical-billing-errors.html'),
          'when-you-need-a-healthcare-attorney': resolve(__dirname, 'when-you-need-a-healthcare-attorney.html'),
          'medical-bill-dispute-georgia': resolve(__dirname, 'medical-bill-dispute-georgia.html'),
          'medical-bill-dispute-texas': resolve(__dirname, 'medical-bill-dispute-texas.html'),
          'medical-bill-dispute-florida': resolve(__dirname, 'medical-bill-dispute-florida.html'),
          'medical-bill-dispute-california': resolve(__dirname, 'medical-bill-dispute-california.html'),
          'medical-bill-dispute-new-york': resolve(__dirname, 'medical-bill-dispute-new-york.html'),
          'medical-bill-dispute-illinois': resolve(__dirname, 'medical-bill-dispute-illinois.html'),
          'medical-bill-dispute-pennsylvania': resolve(__dirname, 'medical-bill-dispute-pennsylvania.html'),
          'medical-bill-dispute-ohio': resolve(__dirname, 'medical-bill-dispute-ohio.html'),
          'medical-bill-dispute-north-carolina': resolve(__dirname, 'medical-bill-dispute-north-carolina.html'),
          'medical-bill-dispute-michigan': resolve(__dirname, 'medical-bill-dispute-michigan.html'),
          guides: resolve(__dirname, 'guides.html'),
        },
      },
    },
  }
})
