"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const specialists = [
    { id: 1, src: "/person1.jpg", alt: "Lora Robert", role: "Analyst" },
    { id: 2, src: "/person2.jpg", alt: "Albert Frod", role: "Head Microbiologist" },
    { id: 3, src: "/person3.jpg", alt: "John Doe", role: "Researcher" },
    { id: 4, src: "/person4.jpg", alt: "Sarah Lee", role: "Biochemist" },
    { id: 5, src: "/person5.jpg", alt: "Sarah John", role: "Biochemist" },
];

export default function Employees() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ".specialist-card",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-12 px-4 bg-gray-100 text-center">
            <h3 className="text-sm text-green-600 font-semibold">Promising Best Quality Services</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Our amazing <span className="text-blue-700">Specialists</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                We have world-class pathologists & lab assistants equipped with the best machinery & reagents to ensure top-quality findings.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
                {specialists.map((person) => (
                    <div
                        key={person.id}
                        className="specialist-card relative group overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        <Image
                            src={person.src}
                            alt={person.alt}
                            width={300}
                            height={450} // Increased height of the image box
                            className=" object-cover w-full h-full"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                <h4 className="text-sm text-green-600">{person.role}</h4>
                                <h3 className="text-xl font-bold text-gray-900">{person.alt}</h3>
                                <div className="flex justify-center gap-3 mt-3">
                                    <a href="#" className="text-gray-600 hover:text-blue-600">
                                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-400">
                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-pink-500">
                                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-red-600">
                                        <FontAwesomeIcon icon={faPinterest} size="lg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

