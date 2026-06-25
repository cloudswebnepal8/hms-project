import { useParams, Link } from 'react-router-dom'; 
import { doctors } from './doctorsdata';
import SkillSideBar from '../DocDetail/SkillSideBar';

const RelatedDoctorLink = () => {
    const { specialty } = useParams<{ specialty: string }>();
    const decodedSpecialty = decodeURIComponent(specialty || '');

    // Filter the doctors matching the active specialty
    const filteredDoctors = doctors.filter(
        (doc) => doc.specialty.toLowerCase() === decodedSpecialty.toLowerCase()
    );

    return (
        <div className="flex flex-col mt-4 ml-10 md:ml-20 px-10">
            <h2 className="text-gray-600 mb-6 font-medium">Browse through the doctors specialist.</h2>

            <div className="flex flex-row items-start gap-3">
                <SkillSideBar />
                <div className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor) => (
                            <Link
                                to={`/doctor/${doctor.id}`}
                                key={doctor.id}
                                className="border border-blue-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white flex flex-col justify-between h-75 w-full max-w-[240px] mx-3 hover:-translate-y-1 block"
                            >
                                <div className="bg-blue-50 h-52 flex items-center justify-center overflow-hidden relative">
                                    {doctor.image.length === 2 ? (
                                        <div className="bg-indigo-500 text-white font-bold text-5xl w-full h-full flex items-center justify-center mt-3">
                                            {doctor.image}
                                        </div>
                                    ) : (
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </div>

                                <div className="p-2 flex-1 flex flex-col justify-start">
                                    <div className="flex items-center gap-2 text-green-500 text-xs font-medium mb-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        {doctor.available}
                                        Available
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-base leading-tight mb-1">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs font-sans">
                                        {doctor.specialty}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-gray-400 py-10 text-center">
                            No doctors found for this specialty.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RelatedDoctorLink;