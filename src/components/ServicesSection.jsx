import React, { useState } from "react";

const services = [
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile with safe and effective whitening treatments.",
    details:
      "Our professional teeth whitening removes deep stains caused by food, coffee, and smoking. The procedure is safe, quick, and delivers long-lasting results.",
    img: "https://img.icons8.com/?size=100&id=59895&format=png&color=000000",
  },
  {
    title: "Dental Implants",
    desc: "Replace missing teeth with long-lasting premium implants.",
    details:
      "Dental implants provide a permanent solution for missing teeth. They restore natural appearance, improve chewing, and prevent bone loss.",
    img: "https://img.icons8.com/?size=100&id=59898&format=png&color=000000",
  },
  {
    title: "Root Canal",
    desc: "Painless and fast root canal procedures by specialists.",
    details:
      "Our advanced root canal treatment removes infection while preserving your natural tooth. Modern techniques ensure minimal discomfort and quick recovery.",
    img: "https://img.icons8.com/?size=100&id=23809&format=png&color=000000",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Dental Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start ">
        {services.map((service, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              onClick={() => toggleCard(i)}
              className={`cursor-pointer p-6 border rounded-xl bg-white transition-all duration-300
                ${isActive ? "h-auto shadow-lg" : "h-[230px] hover:shadow-md"}
              `}
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

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-300 text-center ${
                  isActive
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm">
                  {service.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
