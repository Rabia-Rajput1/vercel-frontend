import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-14">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Why Choose Our Dental Clinic?
      </h2>

      <div className="grid sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🦷 Expert Dentists</h3>
          <p className="text-gray-600">
            Highly skilled professionals with years of experience.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">💙 Painless Procedures</h3>
          <p className="text-gray-600">
            Advanced tools & techniques for a comfortable experience.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🏥 Modern Equipment</h3>
          <p className="text-gray-600">
            Latest technology ensures precision & safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
