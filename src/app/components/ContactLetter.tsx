import Image from "next/image";

export default function ContactLetter() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl mx-4 my-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 overflow-visible">
      {/* Left Side: Doctor Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
        <Image
          src="/contact.png"
          alt="Doctor holding test tubes"
          width={400}
          height={400}
          className="object-contain md:absolute md:top-[-195px] md:left-0"
        />
      </div>

      {/* Right Side: Booking Form */}
      <div className="w-full md:w-2/3 space-y-4 mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Book a Home Collection
        </h2>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="input-field">
            <option>Service Name</option>
          </select>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="tel" placeholder="Phone" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="date" className="input-field" />
          <select className="input-field">
            <option>Time</option>
          </select>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full">
            Book Now
          </button>
        </div>
      </div>

      {/* Tailwind Utility Classes */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 10px;
          border-radius: 50px;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </section>
  );
}
