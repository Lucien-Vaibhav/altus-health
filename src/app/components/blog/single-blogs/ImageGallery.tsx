import Image from "next/image";

// SVG Component for Checkmark
const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="17"
    height="17"
  >
    <path
      fill="#2BDBBA"
      d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"
    />
  </svg>
);

const ImageGallery= () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Image
          src="/image-single2.jpg" // Replace with actual images
          alt="Scientist working in lab"
          width={400}
          height={500}
          className="rounded-lg"
        />
        <Image
          src="/image-single3.jpg"
          alt="Scientist holding vaccine bottle"
          width={400}
          height={500}
          className="rounded-lg"
        />
        <Image
          src="/image-single4.jpg"
          alt="Scientist with blue lighting"
          width={400}
          height={500}
          className="rounded-lg"
        />
      </div>

      {/* Bullet Points Section */}
      <div className="mt-8">
        <ul className="space-y-4 text-lg text-gray-800 ">
          <li className="flex items-center gap-4">
            <Checkmark />
            <span  className=" text-[25px] font-chakra font-bold text-[#1d2864]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </span>
          </li>
          <li className="flex items-center gap-4">
            <Checkmark />
            <span  className=" text-[25px] font-chakra font-bold text-[#1d2864]">
              Eam soluta dicunt cu. Est ad oporteat appellantur, per dic ta
              pertinax.
            </span>
          </li>
          <li className="flex items-center gap-4">
            <Checkmark />
            <span className=" text-[25px] font-chakra font-bold text-[#1d2864]"> 
              Cu movet debitis cum. Vix paulo evertquasi arch itecto beatae
              vitae.
            </span>
          </li>
        </ul>
      </div>
      
    </section>
  );
};

export default ImageGallery;
