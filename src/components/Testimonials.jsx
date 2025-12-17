import React from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    review:
      "The best dentist I’ve ever visited. Zero pain and extremely polite staff!",
  },
  {
    name: "Ali Raza",
    review:
      "Modern clinic, professional doctors, and fast service. Highly recommended!",
  },
  {
    name: "Fatima Noor",
    review:
      "I had a root canal done here. It was completely painless. Amazing experience!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 px-6 bg-gray-300 rounded-xl mt-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Patients Say
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-700 italic">“{t.review}”</p>
            <h4 className="mt-4 font-semibold text-blue-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
