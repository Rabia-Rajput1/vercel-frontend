import React, { useState } from "react";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "🦷 Expert Dentists",
      short: "Highly skilled professionals with years of experience.",
      details:
        "Our dentists are certified specialists with extensive clinical experience, regularly trained in modern dental procedures to ensure the best results.",
    },
    {
      title: "💙 Painless Procedures",
      short: "Advanced tools & techniques for a comfortable experience.",
      details:
        "We use modern anesthesia methods and minimally invasive techniques to make every treatment stress-free and comfortable.",
    },
    {
      title: "🏥 Modern Equipment",
      short: "Latest technology ensures precision & safety.",
      details:
        "Our clinic is equipped with state-of-the-art dental technology, ensuring accurate diagnosis, safer procedures, and faster recovery.",
    },
  ];

  return (
    <div className="py-14">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Why Choose Our Dental Clinic?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`cursor-pointer p-6 border rounded-xl transition-all duration-300 hover:shadow-lg
                ${isActive ? "h-auto" : "h-200"}
              `}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.short}</p>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm">{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>




    </div>
  );
};

export default WhyChooseUs;
