import { group, doctor, doc, Gynecologist, dermetologist, Pediatricians, Neurologist, Gastroenterologist } from "../../assets/images"
import { Link } from "react-router-dom";
import { doctors } from "../DocDetail/doctorsdata";

const Home = () => {
    const specialties = [
        { name: "General physician", image: doc },
        { name: "Gynecologist", image: Gynecologist },
        { name: "Dermatologist", image: dermetologist },
        { name: "Pediatricians", image: Pediatricians },
        { name: "Neurologist", image: Neurologist },
        { name: "Gastroenterologist", image: Gastroenterologist },
    ];

    return (
        <div className="w-full overflow-x-hidden">
            <div className="mx-4 sm:mx-[10%] mt-4">
                <div className="bg-primary rounded-lg flex flex-col items-center text-center p-6 pt-8 pb-0 sm:flex-row sm:items-start sm:text-left sm:px-16 sm:pt-16 sm:pb-16 relative overflow-hidden min-h-[240px] sm:min-h-[340px]">

                    {/* Left text block side - text aligns left on desktop (`sm:items-start`) */}
                    <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center gap-3 sm:gap-4 pb-6 sm:pb-0 z-10">
                        <div className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                            <p>Book Appointment</p>
                            <p>With Trusted Doctors</p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1 justify-center sm:justify-start">
                            <div className="flex-shrink-0">
                                <img src={group} alt="group-avatars" className="w-16 sm:w-24" />
                            </div>
                            <div className="text-white text-[11px] sm:text-xs font-light max-w-xs leading-tight">
                                Simply browse through our extensive list of trusted doctors.
                            </div>
                        </div>
                        <a href="#speciality-section" className="w-fit block">
                            <button className="w-fit bg-white text-gray-600 text-xs sm:text-sm px-5 py-2.5 sm:px-8 sm:py-3 rounded-full mt-2 hover:scale-105 transition-all font-medium shadow-md whitespace-nowrap">
                                Book Appointment →
                            </button>
                        </a>
                    </div>

                    
                    <div className="w-full sm:w-1/2 sm:absolute sm:bottom-0 sm:right-6 lg:right-19 flex justify-center sm:justify-end items-end h-auto sm:h-full pointer-events-none mt-4 sm:mt-0">
                        <img
                            src={doctor}
                            className="w-[70%] sm:w-full md:w-[95%] lg:w-full h-auto max-h-[200px] sm:max-h-[110%] object-contain object-bottom"
                            alt="Doctors"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mt-12 px-4">
                <h1 id="speciality-section" className="font-medium text-2xl sm:text-3xl text-center">Find by Speciality</h1>
                <div className="pt-2 text-xs text-center text-gray-500 max-w-sm sm:max-w-md">
                    <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 mt-8 w-full max-w-4xl px-2">
                    {specialties.map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300"
                        >
                            <Link
                                to={`/doctors/${encodeURIComponent(item.name)}`}
                                className="w-14 sm:w-20 bg-blue-50/50 p-2 rounded-full hover:bg-blue-50 transition-colors"
                            >
                                <img src={item.image} alt={item.name} className="w-full h-auto object-contain" />
                            </Link>
                            <p className="text-[10px] sm:text-xs mt-2 font-medium text-gray-600 break-words w-full px-1">{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center mt-16 sm:mt-24 text-center px-4">
                    <h2 className="font-medium text-xl sm:text-2xl">Top Doctors to Book</h2>
                    <p className="text-xs text-gray-500 mt-1">Simply browse through our extensive list of trusted doctors.</p>
                </div>

                <div className="w-full max-w-[80%] mx-auto px-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
                        {doctors.map((doc) => (
                            <Link
                                to={`/doctor/${doc.id}`}
                                key={doc.id}
                                className="block group h-full"
                            >
                                <div className="border border-blue-100 rounded-xl hover:translate-y-[-8px] transition-all duration-300 ease-in-out overflow-hidden bg-white cursor-pointer flex flex-col h-full shadow-sm hover:shadow-md">
                                    <div className="bg-blue-50/30 flex justify-center items-center p-4 group-hover:bg-blue-50/60 transition-colors">
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="w-full h-40 sm:h-48 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 p-4 flex-grow">
                                        <div className={`flex items-center gap-1.5 text-[11px] font-medium mb-1 ${doc.available !== false ? 'text-green-500' : 'text-gray-400'}`}>
                                            <span className={`w-2 h-2 rounded-full inline-block animate-pulse ${doc.available !== false ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                            {doc.available !== false ? 'Available' : 'Unavailable'}
                                        </div>
                                        <h3 className="text-gray-900 font-semibold text-sm sm:text-base line-clamp-1">
                                            {doc.name}
                                        </h3>
                                        <p className="text-gray-500 text-xs sm:text-sm">
                                            {doc.specialty}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 mb-12">
                    <a
                        href="/Doctor"
                        className="bg-blue-100 text-gray-700 font-medium px-10 py-2.5 rounded-full inline-block hover:bg-blue-200 transition-colors text-sm"
                    >
                        More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;