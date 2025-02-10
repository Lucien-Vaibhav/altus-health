"use client";

export default function ContactForm() {
  return (
    <section className="py-20 bg-[#f0f8ff] relative overflow-hidden">
      {/* Hexagon Background (One Image Mirrored) */}
      <div
        className="absolute inset-0 bg-[url('/contact-bg.png')] bg-no-repeat bg-left-top opacity-40 pointer-events-none"
        style={{
          backgroundSize: "30%",
          transform: "scaleX(-1)",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-[url('/contact-bg.png')] bg-no-repeat bg-right-top opacity-40 pointer-events-none"
        style={{
          backgroundSize: "30%",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">GET CONSULTANCY</h3>
          <h2 className="text-4xl font-bold text-teal-500 mt-2">Drop Us A Line</h2>
        </div>

        {/* Form */}
        <form className="mt-10 bg-white p-8 rounded-3xl shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-4 rounded-xl bg-gray-100 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-4 rounded-xl bg-gray-100 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-4 rounded-xl bg-gray-100 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full p-4 rounded-xl bg-gray-100 focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-gray-100 focus:outline-none mt-6 h-40"
          ></textarea>

          {/* Submit Button */}
          <button className="mt-6 w-full bg-teal-400 text-white font-semibold py-4 rounded-full text-lg hover:bg-teal-500 transition-all">
            Send Request
          </button>
        </form>
      </div>

    
    </section>
  );
}
