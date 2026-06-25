import { NavLink } from 'react-router-dom';

const SkillSideBar = () => {
    const specialties = [
        "General physician",
        "Gynecologist",
        "Dermatologist",
        "Pediatricians",
        "Neurologist",
        "Gastroenterologist"
    ];

    return (
        <div className="w-48 flex-shrink-0 text-xs font-sans text-gray-700">
            <ul>
                {specialties.map((specialty) => (
                    <li key={specialty} className="mb-4">
                        <NavLink
                            to={`/doctors/${encodeURIComponent(specialty)}`}
                            className={({ isActive }) =>
                                `block border rounded px-4 py-2 transition-colors ${isActive
                                    ? 'bg-indigo-100 border-indigo-300 text-indigo-900 font-medium'
                                    : 'border-gray-300 hover:bg-gray-50'
                                }`
                            }
                        >
                            {specialty}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillSideBar;