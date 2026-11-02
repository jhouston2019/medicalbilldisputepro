import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
/** Vite builds these entry HTML files with hashed /assets/* refs; do not overwrite with dev paths (/src/...). */
const skip = new Set([
  "index.html",
  "success.html",
  "app.html",
  "pricing.html",
  "cancel.html",
  "payment.html",
  "dashboard.html",
  "login.html",
  "signup.html",
  "update-password.html",
  "examples.html",
  "preview.html",
  "result.html",
  "guides.html",
  "duplicate-charges-medical-bill.html",
  "upcoding-medical-billing.html",
  "unbundling-medical-billing.html",
  "balance-billing.html",
  "surprise-medical-bill.html",
  "charged-for-services-not-received.html",
  "billed-after-insurance-paid.html",
  "incorrect-quantity-or-units-medical-bill.html",
  "er-bill-too-high.html",
  "out-of-network-bill-at-in-network-hospital.html",
  "ambulance-bill-dispute.html",
  "air-ambulance-bill-dispute.html",
  "lab-bill-dispute.html",
  "dme-bill-dispute.html",
  "uninsured-self-pay-medical-bill.html",
  "anesthesiologist-surprise-bill.html",
  "medical-bill-sent-to-collections.html",
  "insurance-denied-claim-medical-bill.html",
  "medicare-medicaid-billing-errors.html",
  "radiology-pathology-bill-dispute.html",
  "how-to-dispute-a-medical-bill.html",
  "how-to-request-itemized-medical-bill.html",
  "how-to-read-an-eob.html",
  "how-to-write-a-medical-bill-dispute-letter.html",
  "medical-bill-dispute-deadlines.html",
  "how-to-negotiate-a-medical-bill.html",
  "hospital-financial-assistance-application.html",
  "request-medical-records-for-billing-dispute.html",
  "file-complaint-state-insurance-commissioner.html",
  "good-faith-estimate-dispute.html",
  "what-to-do-before-medical-bill-goes-to-collections.html",
  "should-i-pay-a-medical-bill-while-disputing.html",
  "medical-bill-dispute-checklist.html",
  "sample-letter-duplicate-charge.html",
  "sample-letter-balance-billing.html",
  "sample-letter-itemized-bill-request.html",
  "sample-letter-upcoding.html",
  "sample-letter-collections-validation.html",
  "sample-letter-financial-assistance-request.html",
  "no-surprises-act-explained.html",
  "medical-billing-glossary.html",
  "medical-billing-advocate-vs-dispute-letter.html",
  "eob-vs-medical-bill.html",
  "common-medical-billing-errors.html",
  "when-you-need-a-healthcare-attorney.html",
  "medical-bill-dispute-georgia.html",
  "medical-bill-dispute-texas.html",
  "medical-bill-dispute-florida.html",
  "medical-bill-dispute-california.html",
  "medical-bill-dispute-new-york.html",
  "medical-bill-dispute-illinois.html",
  "medical-bill-dispute-pennsylvania.html",
  "medical-bill-dispute-ohio.html",
  "medical-bill-dispute-north-carolina.html",
  "medical-bill-dispute-michigan.html",
]);

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

for (const f of fs.readdirSync(root).filter((x) => x.endsWith(".html"))) {
  if (skip.has(f)) continue;
  fs.copyFileSync(path.join(root, f), path.join(dist, f));
}

const styles = path.join(root, "styles.css");
if (fs.existsSync(styles)) {
  fs.copyFileSync(styles, path.join(dist, "styles.css"));
}

for (const f of ["robots.txt", "sitemap.xml", "404.html", "llms.txt"]) {
  const src = path.join(root, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, f));
  }
}

console.log("Copied HTML (except Vite entry pages), styles.css, robots.txt, sitemap.xml, 404.html, llms.txt to dist/");
