import { group, doctor, doc, Gynecologist, dermetologist, Pediatricians, Neurologist, Gastroenterologist, doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10, doc11, doc12 } from "../../assets/images"
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
        <div>
            <div className="mx-[10%]">
                <div className="bg-primary mt-4 rounded-lg flex px-16 pt-30 pb-25 relative">
                    {/* this is the let side of the box */}
                    <div className="w-1/2 flex flex-col items-start justify-center gap-4">
                        <div className="text-4xl font-bold text-white leading-tight">
                            <p>Book Appointment</p>
                            <p>With Trusted Doctors</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <div>
                                <img src={group} alt="group-avatars" className="w-24" />
                            </div>
                            <div className="text-white text-xs font-light max-w-xs leading-tight flex flex-col">
                                <p>Simply browse through our extensive list of trusted</p>
                                <p> doctors,</p>
                                <p>schedule your appointment hassle-free.</p>
                            </div>
                        </div>
                        <a href="/Home">
                            <button className="bg-white text-gray-600 text-sm px-8 py-3 rounded-full mt-4 hover:scale-105 transition-all">
                                Book Appointment →
                            </button>
                        </a>
                    </div>
                    {/*this code will take the image to the right side */}
                    <div className="w-1/2">
                        <img src={doctor} className="w-105 absolute bottom-0 right-19 h-auto" alt="Doctors"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10">
                <h1 className="font-medium text-3xl">Find by Speciality</h1>
                <div className="pt-4 text-xs flex flex-col items-center text-g">
                    <p>Simply browse through our extensive list of trusted</p>
                    <p>doctors, schedule your appointment hassle-free.</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-6 mt-8">
                    {specialties.map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center text-center hover:translate-y-[-10px] transition-all duration-500"
                        >
                            <Link
                                to={`/doctors/${encodeURIComponent(item.name)}`}
                                className="w-20"
                            >
                                <img src={item.image} alt={item.name} />
                            </Link>
                            <p className="text-xs mt-2">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center mt-30">
                    <h2 className="font-medium text-2xl">Top Doctors to Book</h2>
                    <div className="flex flex-col justify-center items-center text-xs ">
                        <p>Simply browse through our extensive list of trusted</p>
                        <p>doctors.</p>
                    </div>
                </div>
                <div className="mx-[10%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {doctors.map((doc) => (
                            <Link
                                to={`/doctor/${doc.id}`}
                                key={doc.id}
                                className="block"
                            >
                                <div className="border border-blue-100 rounded-xl hover:translate-y-[-10px] transition-all duration-500 ease-in-out overflow-hidden bg-white cursor-pointer flex flex-col">
                                    <div className="bg-blue-50/50 flex justify-center items-center p-4">
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="w-full h-48 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 p-4">
                                        <div className={`flex items-center gap-2 text-xs font-medium mb-1 ${doc.available !== false ? 'text-green-500' : 'text-gray-400'}`}>
                                            <span className={`w-2 h-2 rounded-full inline-block ${doc.available !== false ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                            {doc.available !== false ? 'Available' : 'Unavailable'}
                                        </div>
                                        <h3 className="text-gray-900 font-semibold text-base">
                                            {doc.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {doc.specialty || doc.specialty}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-9">
                    <a
                        href="/Doctor"
                        className="bg-blue-100 text-gray-700 font-medium px-8 py-2.5 rounded-full inline-block"
                    >
                        More
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Home