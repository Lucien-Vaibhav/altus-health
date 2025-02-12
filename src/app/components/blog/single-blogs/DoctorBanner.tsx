import Image from "next/image";

const DoctorBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat rounded-xl shadow-lg flex flex-col md:flex-row items-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} // Add background image
    >

      <div className="relative md:w-1/2 p-2">
        <h2 className="text-3xl font-bold text-gray-800">
          Dedicated Professionals & <br /> Doctors Recommend Us
        </h2>
        <p className="mt-4 text-gray-600">
          Dedicated professionals committed to providing you with accurate and
          reliable diagnostic services. Get patholab services today from the
          best lab experts & make a visit to our laboratory.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-[#25BCCF] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 transition">
            Get Patholab Services
          </button>
          <button className="border text-black bg-white border-gray-400 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
            Book A Home Visit
          </button>
        </div>
      </div>

      {/* Right Image (Doctors) */}
      <div className="relative md:w-1/2 flex justify-end ml-auto mt-20">
        <Image
          src="/blog-bg.png"
          alt="Doctors"
          width={400}
          height={250}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default DoctorBanner;
