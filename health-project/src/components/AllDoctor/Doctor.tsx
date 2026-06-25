import { Link } from "react-router-dom";
import { doctors } from "../DocDetail/doctorsdata"; 

const Doctor = () => {
    return (
        <div className="flex flex-col px-31 mt-5">
            <div className="text-sm font-medium text-gray-500">
                <p>Browse through the doctors specialist.</p>
            </div>

            <div className="flex flex-row items-start mt-4">
                <ul className="text-xs font-sans text-gray-700 w-48 flex-shrink-0">
                    <div className="border border-gray-300 rounded mb-4 px-18 py-2 pl-2">
                        <a href="/RelatedDoctorLink"><li>General physician</li></a>
                    </div>
                    <div className="border border-gray-300 rounded px-18 py-2 pl-1 mb-4">
                        <a href="/RelatedDoctorLink"><li>Gynecologist</li></a>
                    </div>
                    <div className="border border-gray-300 rounded px-18 py-2 pl-1 mb-4">
                        <a href="/RelatedDoctorLink"><li>Dermatologist</li></a>
                    </div>
                    <div className="border border-gray-300 rounded px-18 py-2 pl-1 mb-4">
                        <a href="/RelatedDoctorLink"><li>Pediatricians</li></a>
                    </div>
                    <div className="border border-gray-300 rounded px-18 py-2 pl-1 mb-4">
                        <a href="/RelatedDoctorLink"><li>Neurologist</li></a>
                    </div>
                    <div className="border border-gray-300 rounded px-18 py-2 pl-1 mb-4">
                        <a href="/RelatedDoctorLink"><li>Gastroenterologist</li></a>
                    </div>
                </ul>

                <div className="flex-1 ml-4 grid grid-cols-4 gap-4">
                    {doctors.map((doc) => (
                        <Link
                            to={`/doctor/${doc.id}`}
                            key={doc.id}
                            className="block group"
                        >
                            <div className="border border-blue-100 rounded-xl hover:translate-y-[-10px] transition-all duration-500 ease-in-out overflow-hidden bg-white cursor-pointer flex flex-col h-full">

                                <div className="bg-blue-50 flex justify-center items-center ">
                                    <img
                                        src={doc.image}
                                        alt={doc.name}
                                        className="w-full h-48 object-contain"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 px-4 mt-3 pb-3">
                                    <div className={`flex items-center gap-2 text-xs font-medium mb-1 ${doc.available ? 'text-green-500' : 'text-gray-400'}`}>
                                        <span className={`w-2 h-2 rounded-full inline-block ${doc.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                        {doc.available ? 'Available' : 'Unavailable'}
                                    </div>

                                    <h3 className="text-gray-900 font-semibold text-base group-hover:text-blue-600 transition-colors">
                                        {doc.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {doc.specialty}
                                    </p>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctor;