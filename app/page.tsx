export default function Home() {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-blue-600">
          Accredian
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Programs</a>
          <a href="#">Enterprise</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20 bg-gradient-to-r from-blue-50 to-blue-100">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Workforce With Learning
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Empower your teams with certifications, industry-ready skills
            and future-focused learning programs.
          </p>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              500+ Companies
            </h2>
            <p className="text-gray-600">
              Trust Accredian for enterprise upskilling.
            </p>
          </div>
        </div>

      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-16 bg-white text-center">

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-4xl font-bold text-blue-600">10K+</h2>
          <p className="mt-2">Learners</p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-4xl font-bold text-blue-600">500+</h2>
          <p className="mt-2">Enterprise Clients</p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-4xl font-bold text-blue-600">95%</h2>
          <p className="mt-2">Satisfaction Rate</p>
        </div>

      </section>

      {/* Why Choose Us */}
<section className="px-10 py-20 bg-gray-50">

  <h2 className="text-4xl font-bold text-center mb-4">
    Why Choose Us
  </h2>

  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
    We help enterprises build future-ready teams through impactful,
    flexible and outcome-driven learning programs.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">🎓</div>
      <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
      <p className="text-gray-600 text-sm">
        Learn from experienced professionals and industry leaders.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">📚</div>
      <h3 className="text-xl font-bold mb-2">Modern Curriculum</h3>
      <p className="text-gray-600 text-sm">
        Updated content aligned with current market demands.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">⏰</div>
      <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
      <p className="text-gray-600 text-sm">
        Self-paced and live sessions designed for working teams.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">📈</div>
      <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
      <p className="text-gray-600 text-sm">
        Improve productivity, retention and team performance.
      </p>
    </div>

  </div>

</section>
      {/* Testimonials */}
      <section className="px-10 py-20 bg-white">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="shadow-lg p-8 rounded-xl">
            <p>
              "Amazing experience. Our employees gained valuable
              real-world skills."
            </p>
            <h4 className="mt-4 font-bold">HR Manager</h4>
          </div>

          <div className="shadow-lg p-8 rounded-xl">
            <p>
              "Professional learning platform with outstanding support."
            </p>
            <h4 className="mt-4 font-bold">CEO</h4>
          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="px-10 py-20 bg-gray-50">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full border p-4 rounded-lg"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
            Submit
          </button>

        </form>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-2">Accredian</h2>
        <p>Enterprise Learning Solutions</p>
        <p className="mt-4 text-sm">© 2026 All Rights Reserved</p>
      </footer>

    </div>
  );
}