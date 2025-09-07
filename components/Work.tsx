// components/Work.tsx

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Home Exterior Improvement",
    category: "Exterior",
    image: "/work/work2.jpeg",
    description:
      "Complete exterior renovation including siding, roofing, and landscape design.",
  },
  {
    title: "Luxury Bathroom Makeover",
    category: "Interior",
    image: "/work/work3.jpeg",
    description:
      "Spa-like bathroom renovation with modern fixtures and premium tile work.",
  },
  {
    title: "Modern Kitchen Renovation",
    category: "Carpentry",
    image: "/work/work1.jpeg",
    description:
      "Complete kitchen transformation with custom cabinetry.",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
            Years of Trusted
            <br /> Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-prose">
            With decades of experience in home improvement, we&apos;ve helped
            hundreds of families transform their living spaces. Our team brings
            expertise, reliability, and attention to detail to every project,
            ensuring your vision becomes reality.
          </p>
        </div>

        {/* Full-width stacked project blocks */}
        <div className="space-y-10">
          {projects.map((p, i) => (
            <figure
              key={p.title}
              className="overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-xl"
            >
              <div className="relative h-[420px] sm:h-[520px]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {/* Bottom gradient + caption */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="rounded-2xl bg-gradient-to-t from-black/45 via-black/10 to-transparent p-4 sm:p-6">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-900 ring-1 ring-black/5">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-white text-2xl sm:text-3xl font-medium drop-shadow">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-white/90 text-sm sm:text-base max-w-2xl drop-shadow">
                      {p.description}
                    </p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
