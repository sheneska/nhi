
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M13 5l7 7-7 7M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Use your local images from /public/services
const services = [
  {
    title: "Carpentry",
    desc:
       "Cupboards, Cabinets, Finishes and so muchn more - we bring your vision to life with our expertise.",
    image: "/services/carpentry.jpg", 
    alt: "Kitchen remodeling",
  },
  {
    title: "Interior Work",
    desc:
      "Design, paint, flooring, fixtures, and more — we refresh interiors with clean craftsmanship and attention to detail.",
    image: "/services/interiorwork.jpeg",
    alt: "Room addition work",
  },
  {
    title: "Exterior Work",
    desc:
      "From siding and trim to outdoor structures, we deliver durable exterior upgrades that boost curb appeal and longevity.",
    image: "/services/exteriorwork.jpeg",
    alt: "Exterior improvements",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      {/* soft background wordmark / blend (optional) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-120px,rgba(0,0,0,0.05),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with faint wordmark behind */}
        <div className="relative mb-8">
          <h2 className="relative z-10 text-4xl lg:text-5xl font-medium text-gray-900">
            Improving Homes
          </h2>
          <div
            aria-hidden
            className="select-none absolute -top-10 left-0 text-[12vw] leading-none font-semibold text-black/5 whitespace-nowrap"
          >
            Improving Homes
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Top image with white fade into content */}
              <div className="relative h-56 md:h-64">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                {/* fade from transparent to white so the title reads dark and blends into card */}
                <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent via-white/50 to-white" />
                {/* Title on image, dark like your mock */}
                <div className="absolute left-6 right-6 bottom-6">
                  <h3 className="whitespace-pre-line text-3xl font-medium leading-tight text-gray-900">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-8 pt-2 md:px-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
