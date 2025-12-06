
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-600">
          <p>
            Welcome to <span className="text-primary font-semibold">DentaCare</span>, your trusted destination for complete dental care and oral health solutions. 
            At DentaCare, we understand the importance of a healthy smile and the confidence it brings to your everyday life. 
            Our clinic is dedicated to providing comfortable, reliable, and stress-free dental treatments for patients of all ages.
          </p>

          <p>
            With a focus on compassionate care and modern dentistry, DentaCare delivers exceptional services ranging from routine checkups 
            and cleanings to advanced procedures like root canals, cosmetic dentistry, and orthodontics. 
            Our mission is to ensure every patient feels relaxed, informed, and confident in their treatment journey.
          </p>

          <strong className="text-gray-800">Our Vision</strong>

          <p>
            Our vision at DentaCare is to make quality dental care accessible, affordable, and personalized. 
            We aim to bridge the gap between patients and professional dental care by offering a seamless experience — 
            from booking your appointment to receiving long-term oral health support. 
            Your smile is our passion, and we’re here to help you protect it with care you can trust.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 text-gray-400">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="hover:text-white hover:bg-primary border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>EXPERT DENTISTS:</strong>
          <p>
            Receive treatment from highly qualified and experienced dental professionals dedicated to your smile.
          </p>
        </div>

        <div className="hover:text-white hover:bg-primary border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>ADVANCED TECHNOLOGY:</strong>
          <p>
            Benefit from modern dental equipment and painless treatment techniques for a more comfortable experience.
          </p>
        </div>

        <div className="hover:text-white hover:bg-primary border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 text-gray-600 cursor-pointer">
          <strong>PERSONALIZED CARE:</strong>
          <p>
            Enjoy customized dental treatment plans designed specifically for your oral health needs and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
