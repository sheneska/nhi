
const images = [
  { src: "/about/photo1.jpeg", alt: "Project photo 1", height: "tall" },
  { src: "/about/photo2.jpeg", alt: "Project photo 2", height: "tall" },
  { src: "/about/photo3.jpeg", alt: "Project photo 3", height: "short" },
  { src: "/about/photo4.jpeg", alt: "Project photo 4", height: "tall" },
  { src: "/about/photo5.jpeg", alt: "Project photo 5", height: "tall" },
  { src: "/about/photo6.jpeg", alt: "Project photo 6", height: "short" },
  { src: "/about/photo7.jpeg", alt: "Project photo 7", height: "tall" },
  { src: "/about/photo8.jpeg", alt: "Project photo 8", height: "tall" },
];

// Duplicate for seamless loop
const infiniteImages = [...images, ...images, ...images];

export default function About() {
  const trackWidth = 320 * infiniteImages.length + 16 * (infiniteImages.length - 1);

  return (
    <section id="about" className="py-20 bg-white">
      {/* Copy/content constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-4">
            <div className="text-sm text-gray-500 uppercase tracking-wider">ABOUT US</div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 leading-tight font-medium">
              Home Improvement
              <br />
              in every Area
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in transforming visions into reality. Explore our portfolio of
              innovative architectural and interior design projects crafted with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed slider */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex gap-4 will-change-transform animate-scroll hover:[animation-play-state:paused]"
          style={{ width: `${trackWidth}px` }}
        >
          {infiniteImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`flex-shrink-0 w-80 overflow-hidden ${
                img.height === "tall" ? "h-80" : "h-52"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading={i > images.length ? "lazy" : "eager"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
