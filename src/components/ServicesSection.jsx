import React from "react";

const services = [
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile with safe and effective whitening treatments.",
    img: "https://img.icons8.com/?size=100&id=59895&format=png&color=000000",
  },
  {
    title: "Dental Implants",
    desc: "Replace missing teeth with long-lasting premium implants.",
    img: "https://img.icons8.com/?size=100&id=59898&format=png&color=000000",
  },
  {
    title: "Root Canal",
    desc: "Painless and fast root canal procedures by specialists.",
    img: "https://img.icons8.com/?size=100&id=23809&format=png&color=000000",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Dental Services
      </h2>

      <div className="grid sm:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
          >
            <img src={service.img} alt="" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
