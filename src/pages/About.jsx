import { assets } from "../assets/assets";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";

const About = () => {
  return (
    <div>
      {/* ABOUT US */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt="DentaCare Clinic"
          className="w-full md:max-w-[360px] rounded-lg shadow-sm"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-600">
          <p>
            Welcome to{" "}
            <span className="text-primary font-semibold">DentaCare</span>, a
            modern dental clinic committed to protecting your smile and
            enhancing your confidence. We believe that great dental care goes
            beyond treatment — it’s about trust, comfort, and long-term oral
            health.
          </p>

          <p>
            At DentaCare, we provide a complete range of dental services, from
            routine checkups and preventive care to advanced treatments such as
            cosmetic dentistry, root canals, and orthodontics. Our experienced
            dentists combine clinical expertise with a gentle approach to
            ensure every visit is calm, informative, and stress-free.
          </p>

          <strong className="text-gray-800">Our Vision</strong>

          <p>
            Our vision is to redefine the dental care experience by making it
            accessible, transparent, and patient-centered. We strive to build
            lifelong relationships with our patients by offering personalized
            treatment plans, honest guidance, and continuous support for
            long-term oral wellness.
          </p>
        </div>
      </div>

      <ServicesSection/>

      {/* WHY CHOOSE US */}
      <div className="text-xl my-6 text-gray-400 text-center md:text-left">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {/* Card 1 */}
        <div className="group bg-white border rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-primary">
          <strong className="block mb-3 text-gray-700 group-hover:text-white text-sm tracking-wide">
            EXPERIENCED DENTISTS
          </strong>
          <p className="text-gray-600 group-hover:text-white text-[15px] leading-relaxed">
            Our skilled dental professionals bring years of experience and a
            patient-first approach to every treatment.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white border rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-primary">
          <strong className="block mb-3 text-gray-700 group-hover:text-white text-sm tracking-wide">
            MODERN TECHNOLOGY
          </strong>
          <p className="text-gray-600 group-hover:text-white text-[15px] leading-relaxed">
            We use advanced dental technology and minimally invasive techniques
            to ensure precise, comfortable, and effective care.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white border rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-primary">
          <strong className="block mb-3 text-gray-700 group-hover:text-white text-sm tracking-wide">
            PATIENT-CENTERED CARE
          </strong>
          <p className="text-gray-600 group-hover:text-white text-[15px] leading-relaxed">
            Every smile is unique. We tailor each treatment plan to your
            specific needs, goals, and comfort.
          </p>
        </div>
      </div>
      <FAQSection/>



    </div>
  );
};

export default About;
