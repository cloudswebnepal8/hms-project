import { useParams } from "react-router-dom"; 
import { doctors } from "./doctorsdata";
import DoctorDetail from "./DoctorDetail";

const DoctorPageContainer = () => {
  const { id } = useParams<{ id: string }>();

  // Find the current doctor by ID
  const currentDoctor = doctors.find((doc) => doc.id === id);

  if (!currentDoctor) {
    return <div className="text-center mt-20">Doctor not found.</div>;
  }

  //Match the specialty AND exclude the current doctor's own card
  const related = doctors.filter(
    (doc) => doc.specialty === currentDoctor.specialty && doc.id !== currentDoctor.id
  );

  return (
    <DoctorDetail doctor={currentDoctor} relatedDoctors={related} />
  );
};

export default DoctorPageContainer;