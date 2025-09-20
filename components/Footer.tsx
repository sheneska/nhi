// components/Footer.tsx

function HomeMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z" fill="currentColor"/>
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.05 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.47-3.88 3.72-3.88 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.53v1.85h2.72l-.43 2.91h-2.29V22C18.34 21.21 22 17.05 22 12.06Z"/>
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22a3.5 3.5 0 0 1-.9 1.38 3.5 3.5 0 0 1-1.38.9c-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.5 3.5 0 0 1-1.38-.9 3.5 3.5 0 0 1-.9-1.38c-.16-.42-.35-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.35 2.22-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.97.05-1.5.21-1.85.35-.47.18-.8.39-1.15.74-.35.35-.56.68-.74 1.15-.14.35-.3.88-.35 1.85-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.97.21 1.5.35 1.85.18.47.39.8.74 1.15.35.35.68.56 1.15.74.35.14.88.3 1.85.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.97-.05 1.5-.21 1.85-.35.47-.18.8-.39 1.15-.74.35-.35.56-.68.74-1.15.14-.35.3-.88.35-1.85.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.97-.21-1.5-.35-1.85a2.7 2.7 0 0 0-.74-1.15 2.7 2.7 0 0 0-1.15-.74c-.35-.14-.88-.3-1.85-.35-1.24-.06-1.61-.07-4.76-.07Zm0 2.95a6.05 6.05 0 1 1 0 12.1 6.05 6.05 0 0 1 0-12.1Zm0 1.8a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Zm5.45-2.08a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
    </svg>
  );
}
// function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//       <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.32c0-1.27-.02-2.89-1.76-2.89-1.77 0-2.04 1.38-2.04 2.8V21h-4V9Z"/>
//     </svg>
//   );
// }

export default function Footer() {
  const year = new Date().getFullYear();
  const BIX_URL= "https://www.bixllc.net";

  return (
    <footer className="bg-[#0b0b12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <HomeMark className="h-5 w-5 text-white" />
              </span>
              <span className="text-xl">Nelson Home Improvement LLC</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Transforming homes with expert craftsmanship and quality
              service. Licensed, insured, and committed
              to excellence in every project.
            </p>
            <div className="flex items-center gap-4 text-white/90">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p>info@nelsonhomeimprovement.com</p>
              <p>russnelson120@gmail.com</p>
              <p>Servicing Metro Atlanta & Surrounding Areas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/80">
          <p>© {year} Nelson Home Improvement LLC. All rights reserved. {" "}
            <a
              href={BIX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-2 hover:text-white hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              Website by Bix LLC
            </a>.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
