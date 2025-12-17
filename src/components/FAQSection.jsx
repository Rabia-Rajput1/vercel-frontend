

const faqs = [
  {
    q: "How often should I visit a dentist?",
    a: "For most patients, visiting the dentist every six months is recommended for routine checkups and professional cleanings. These visits help identify cavities, gum disease, and other oral health issues at an early stage, preventing more serious problems in the future. Your dentist may suggest more frequent visits if you have specific dental concerns.",
  },
  {
    q: "Does teeth whitening hurt?",
    a: "Professional teeth whitening is generally safe and painless. Some patients may experience mild sensitivity during or after the treatment, but this is temporary and usually disappears within a few days. Our clinic uses modern whitening techniques designed to minimize discomfort while delivering effective results.",
  },
  {
    q: "Are dental implants permanent?",
    a: "Dental implants are a long-lasting solution for replacing missing teeth. With proper oral hygiene, regular dental checkups, and a healthy lifestyle, implants can last for many years and often a lifetime. They function like natural teeth and help maintain jawbone health and facial structure.",
  },
  {
    q: "Is dental treatment safe for children?",
    a: "Yes, dental treatments for children are completely safe when performed by trained dental professionals. Pediatric dental care focuses on gentle techniques, preventive treatments, and creating a comfortable environment to help children develop healthy oral habits and positive dental experiences from an early age.",
  },
  {
    q: "What should I do in case of a dental emergency?",
    a: "If you experience a dental emergency such as severe tooth pain, swelling, bleeding, or a knocked-out tooth, contact our clinic immediately. Prompt treatment can relieve pain, prevent further damage, and increase the chances of saving the affected tooth. Until you reach the clinic, avoid chewing on the affected area and follow any first-aid instructions provided by our staff.",
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
