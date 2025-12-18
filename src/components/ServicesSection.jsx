import React from "react";
import { assets } from "../assets/assets";

const services = [
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile with safe and effective whitening treatments.",
    details:
      "Our professional teeth whitening removes deep stains caused by food, coffee, and smoking. The procedure is safe, quick, and delivers long-lasting results.",
    img: assets.TeethWhitening,
  },
  {
    title: "Dental Implants",
    desc: "Replace missing teeth with long-lasting premium implants.",
    details:
      "Dental implants provide a permanent solution for missing teeth. They restore natural appearance, improve chewing, and prevent bone loss.",
    img: assets.DentalImplant,
  },
  {
    title: "Root Canal",
    desc: "Painless and fast root canal procedures by specialists.",
    details:
      "Our advanced root canal treatment removes infection while preserving your natural tooth. Modern techniques ensure minimal discomfort and quick recovery.",
    img: assets.RootCanal,
  },
];

const ServicesSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Dental Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {services.map((service, i) => (
          <div
            key={i}
            className="group cursor-pointer p-6 border rounded-xl bg-white
                       h-[230px] overflow-hidden
                       transition-all duration-300
                       hover:shadow-lg hover:h-auto"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 mx-auto mb-4"
            />

            <h3 className="text-xl font-medium text-center">
              {service.title}
            </h3>

            <p className="text-gray-600 text-center mt-2">
              {service.desc}
            </p>

            {/* Hover Content */}
            <div
              className="overflow-hidden text-center
                         max-h-0 opacity-0 mt-0
                         transition-all duration-300
                         group-hover:max-h-40
                         group-hover:opacity-100
                         group-hover:mt-4"
            >
              <p className="text-gray-500 text-sm">
                {service.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
