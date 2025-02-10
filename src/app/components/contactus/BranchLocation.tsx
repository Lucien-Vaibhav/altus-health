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
  const timerRefs = useRef<(HTMLImageElement | null)[]>(new Array(branches.length).fill(null));
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(timerRefs.current, {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
      force3D: true,
      overwrite: "auto",
      invalidateOnRefresh: true,
    });
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
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAzWsHhwsYapR9xLcmVu9ziAOpQ5d9ZpjI&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = loadGoogleMaps;
      document.head.appendChild(script);
    } else {
      loadGoogleMaps();
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white shadow-xl rounded-3xl p-8 w-full h-[500px]">
              {/* Title */}
              <div className="bg-blue-200 text-blue-700 font-bold text-2xl py-3 px-6 rounded-t-2xl text-center">
                {branch.name}
              </div>

              {/* Address */}
              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-800">Our Address</h4>
                <p className="text-gray-600 mt-2 flex items-center gap-2">📍 {branch.address}</p>
              </div>

              {/* Contact Info */}
              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-800">Contact Information</h4>
                <p className="text-gray-600 mt-2 flex items-center gap-2">✉️ {branch.email}</p>
                <p className="text-gray-600 mt-2 flex items-center gap-2">📞 {branch.phone}</p>
              </div>

              {/* Opening Hours */}
              <div className="mt-8 flex items-center gap-5 bg-blue-100 p-6 rounded-2xl">
                {/* Rotating Timer Image with Square Background */}
                <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center">
                  <img
                    ref={(el) => {
                      timerRefs.current[index] = el;
                    }}
                    src="/clock.png"
                    alt="Timer"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800">Opening Hour</h4>
                  <p className="text-gray-700 text-lg">{branch.hours}</p>
                  <p className="text-red-600 text-lg font-medium">{branch.closed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Our Locations</h2>
          <div ref={mapRef} className="w-full h-[800px] mt-6"></div>
        </div>
      </div>
    </section>
  );
}
