import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Doctors = () => {
  const { speciality } = useParams();
  const [fillerDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-gray-600">Browse through the dental specialists.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 p-3 border rounded text-md transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {/* General Dentist */}
          <p
            onClick={() =>
              speciality === "General Dentist"
                ? navigate("/doctors")
                : navigate("/doctors/General Dentist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General Dentist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            General Dentist
          </p>

          {/* Orthodontist */}
          <p
            onClick={() =>
              speciality === "Orthodontist"
                ? navigate("/doctors")
                : navigate("/doctors/Orthodontist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Orthodontist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Orthodontist
          </p>

          {/* Endodontist */}
          <p
            onClick={() =>
              speciality === "Endodontist"
                ? navigate("/doctors")
                : navigate("/doctors/Endodontist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Endodontist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Endodontist
          </p>

          {/* Periodontist */}
          <p
            onClick={() =>
              speciality === "Periodontist"
                ? navigate("/doctors")
                : navigate("/doctors/Periodontist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Periodontist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Periodontist
          </p>

          {/* Prosthodontist */}
          <p
            onClick={() =>
              speciality === "Prosthodontist"
                ? navigate("/doctors")
                : navigate("/doctors/Prosthodontist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Prosthodontist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Prosthodontist
          </p>

          {/* Oral Surgeon */}
          <p
            onClick={() =>
              speciality === "Oral Surgeon"
                ? navigate("/doctors")
                : navigate("/doctors/Oral Surgeon")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Oral Surgeon" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Oral Surgeon
          </p>

          {/* Pediatric Dentist */}
          <p
            onClick={() =>
              speciality === "Pediatric Dentist"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatric Dentist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatric Dentist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Pediatric Dentist
          </p>

          {/* Cosmetic Dentist */}
          <p
            onClick={() =>
              speciality === "Cosmetic Dentist"
                ? navigate("/doctors")
                : navigate("/doctors/Cosmetic Dentist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Cosmetic Dentist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Cosmetic Dentist
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {fillerDoc.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              onClick={() => navigate(`/appointment/${item._id}`)}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    } rounded-full`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
