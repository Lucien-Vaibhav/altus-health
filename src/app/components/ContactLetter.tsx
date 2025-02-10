import Image from "next/image";

export default function ContactLetter() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl mx-4 my-10 flex items-center justify-between overflow-visible">
      {/* Left Side: Doctor Image */}
      <div className="w-1/3 relative">
        <Image 
          src="/contact.png" 
          alt="Doctor holding test tubes" 
          width={400} 
          height={400} 
          className="object-contain -mt-10" // ✅ Moves image slightly above the section
        />
      </div>

      {/* Right Side: Booking Form */}
      <div className="w-2/3 space-y-4 p-8">
        <h2 className="text-3xl font-bold">Book a Home Collection</h2>
        
        {/* Input Fields */}
        <div className="grid grid-cols-3 gap-4">
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
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full">
          Book Now
        </button>
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
