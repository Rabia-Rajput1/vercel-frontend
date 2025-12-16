

const faqs = [
  {
    q: "How often should I visit a dentist?",
    a: "You should visit every 6 months for a routine checkup.",
  },
  {
    q: "Does teeth whitening hurt?",
    a: "No, it is painless and completely safe when done professionally.",
  },
  {
    q: "Are dental implants permanent?",
    a: "Yes, with proper care, implants can last a lifetime.",
  },
];

const FAQSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border p-5 rounded-xl bg-white">
            <h3 className="font-semibold text-lg">{item.q}</h3>
            <p className="text-gray-600 mt-1">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
