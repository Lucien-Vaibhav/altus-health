"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

declare global {
  interface Window {
    google: any;
  }
}

const branches = [
  {
    name: "Texas Brunch",
    address: "183 Marina Avenue, Miami Central Mall, United State of America",
    email: "Patholab@servicecare.com",
    phone: "+987123 56666",
    hours: "Mon - Sat 8.00-18.00",
    closed: "Sunday - Closed",
  },
  {
    name: "Miami Brunch",
    address: "183 Marina Avenue, Miami Central Mall, United State of America",
    email: "Patholab@servicecare.com",
    phone: "+987123 56666",
    hours: "Mon - Sat 8.00-18.00",
    closed: "Sunday - Closed",
  },
  {
    name: "Miami Brunch",
    address: "183 Marina Avenue, Miami Central Mall, United State of America",
    email: "Patholab@servicecare.com",
    phone: "+987123 56666",
    hours: "Mon - Sat 8.00-18.00",
    closed: "Sunday - Closed",
  },
  {
    name: "Miami Brunch",
    address: "183 Marina Avenue, Miami Central Mall, United State of America",
    email: "Patholab@servicecare.com",
    phone: "+987123 56666",
    hours: "Mon - Sat 8.00-18.00",
    closed: "Sunday - Closed",
  },
  {
    name: "Miami Brunch",
    address: "183 Marina Avenue, Miami Central Mall, United State of America",
    email: "Patholab@servicecare.com",
    phone: "+987123 56666",
    hours: "Mon - Sat 8.00-18.00",
    closed: "Sunday - Closed",
  },
  {
    name: "Miami Brunch",
    address: "183 Marina Avenue, Miami Central Mall, United State of America",
    email: "Patholab@servicecare.com",
    phone: "+987123 56666",
    hours: "Mon - Sat 8.00-18.00",
    closed: "Sunday - Closed",
  },
];


export default function BranchLocation() {
  const timerRefs = useRef<(HTMLImageElement | null)[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(timerRefs.current, {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
      force3D: true,
      overwrite: "auto",
    });

    // GSAP Fade-in Animation for Branch Cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    // GSAP Fade-in Animation for Google Map
    gsap.fromTo(
      mapContainerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGoogleMaps = () => {
      if (!window.google || !window.google.maps) return;
      const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat: 25.7617, lng: -80.1918 },
        zoom: 12,
      });

      new window.google.maps.Marker({
        position: { lat: 25.7617, lng: -80.1918 },
        map,
        title: "Our Miami Branch",
      });
    };

    if (!window.google || !window.google.maps) {
      if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAzWsHhwsYapR9xLcmVu9ziAOpQ5d9ZpjI&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = loadGoogleMaps;
        document.head.appendChild(script);
      }
    } else {
      loadGoogleMaps();
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white shadow-xl rounded-3xl p-6 w-full h-auto transition-transform transform hover:scale-105"
            >
              {/* Title */}
              <div className="bg-[#E1F6F9] text-[#2ad2c1] font-bold text-xl sm:text-lg py-3 px-6 rounded-t-2xl text-center">
                {branch.name}
              </div>

              {/* Address */}
              <div className="mt-4">
                <h4 className="text-lg font-bold text-[#1d2864]">Our Address</h4>
                <p className="text-gray-600 mt-2 flex items-center gap-2">
                  📍 {branch.address}
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-4">
                <h4 className="text-lg font-bold text-[#1d2864]">Contact Information</h4>
                <p className="text-gray-600 mt-2 flex items-center gap-2">✉️ {branch.email}</p>
                <p className="text-gray-600 mt-2 flex items-center gap-2">📞 {branch.phone}</p>
              </div>

              {/* Opening Hours */}
              <div className="mt-6 flex items-center gap-4 p-4 rounded-2xl bg-gray-100">
                {/* Rotating Timer Image with Square Background */}
                <div className="w-14 h-14 bg-[#2ad2c1] rounded-xl flex items-center justify-center">
                  <img
                   ref={(el) => {
                    timerRefs.current[index] = el;
                  }}
                    src="/clock.png"
                    alt="Opening Hours Icon"
                    className="w-10 h-10"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-800">Opening Hour</h4>
                  <p className="text-gray-700">{branch.hours}</p>
                  <p className="text-red-600 font-medium">{branch.closed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Map Section */}
        <div ref={mapContainerRef} className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Our Locations</h2>
          <div ref={mapRef} className="w-full h-[500px] mt-6 rounded-xl shadow-md"></div>
        </div>
      </div>
    </section>
  );
}
