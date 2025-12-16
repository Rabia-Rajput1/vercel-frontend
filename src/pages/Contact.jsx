
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10  text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-md">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR CLINIC</p>
          <p className="text-gray-500">
            DentaCare Clinic <br />
            Lahore, Pakistan
          </p>

          <p className="text-gray-500">
            Tel: +92300-1234567<br />
            Email: dentacare@example.com
          </p>

          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT DENTACARE
          </p>
          <p className="text-gray-500">
            Join our team of professional dentists and staff dedicated to excellent patient care.
          </p>

          <span className="text-gray-700 text-sm md:text-base">
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:careers.dentacare@example.com"
              className="text-primary hover:underline"
            >
              careers.dentacare@example.com
            </a>
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
