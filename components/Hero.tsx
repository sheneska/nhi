export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Modern living room interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
                Your dream home awaits.
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Whether you decide to proceed with a single job or use our discount on multiple projects,
                we take the worry out of home improvements from start to finish.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium"
              >
                Book A Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
              >
                Services
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/10 rounded-2xl overflow-hidden">
              <div className="text-center pb-4 pt-6">
                <h2 className="text-xl text-white leading-snug">
                  Schedule a<br />Free Consultation
                </h2>
              </div>

              <form className="space-y-4 px-6 pb-6">
                <input
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-200/80 bg-white/95 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-200/80 bg-white/95 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-200/80 bg-white/95 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-gray-200/80 bg-white/95 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="flooring">Flooring</option>
                  <option value="painting">Painting</option>
                  <option value="electrical">Electrical Work</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  placeholder="Details"
                  rows={5}
                  className="w-full min-h-[100px] rounded-lg border border-gray-200/80 bg-white/95 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium"
                >
                  Book A Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
