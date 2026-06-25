import { useState } from "react";
import { useDragScroll } from "./useDragScroll";
import type { Doctor } from "./types";

interface DoctorDetailProps {
  doctor: Doctor;
  relatedDoctors: Doctor[];
}

const DoctorDetail = ({ doctor, relatedDoctors }: DoctorDetailProps) => {
  const dayDrag = useDragScroll();
  const timeDrag = useDragScroll();

  const [activeSlot, setActiveSlot] = useState(0);
  const [activeTimeSlot, setActiveTimeSlot] = useState(0);

  const slots = [
    { day: "Mon", date: 8 }, { day: "Tue", date: 9 }, { day: "Wed", date: 10 },
    { day: "Thu", date: 11 }, { day: "Fri", date: 12 }, { day: "Sat", date: 13 },
    { day: "Sun", date: 14 }, { day: "Mon", date: 15 }, { day: "Tue", date: 16 },
    { day: "Wed", date: 17 }, { day: "Thu", date: 18 }, { day: "Fri", date: 19 },
  ];

  const timeSlots = [
    { time: "10:00 am" }, { time: "10:30 am" }, { time: "11:00 pm" },
    { time: "11:30 pm" }, { time: "12:00 pm" }, { time: "12:30 pm" },
    { time: "1:00 pm" }, { time: "1:30 pm" }, { time: "2:00 pm" },
    { time: "2:30 pm" }, { time: "3:00 pm" },
  ];

  return (
    <div className="mx-10 md:mx-30 mt-10">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative w-full md:w-1/4 h-72 bg-white rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="absolute bottom-0 left-0 w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-6 bg-white">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-semibold text-gray-800">{doctor.name}</h1>
            {doctor.available && <span className="text-blue-600 text-lg">✓</span>}
          </div>
          <div className="flex items-center gap-3 text-medium text-gray-600 mb-4">
            <p>{doctor.specialty}</p>
            <span className="px-2 py-0.5 border border-gray-300 rounded-full text-xs">
              {doctor.experience}
            </span>
          </div>
          <div className="mb-6">
            <h3 className="text-medium font-semibold text-gray-800 flex items-center gap-1 mb-2">
              About <span className="text-xs text-gray-400 cursor-pointer">ⓘ</span>
            </h3>
            <p className="text-medium text-gray-500 leading-relaxed">
              {doctor.about}
            </p>
          </div>
          <div className="text-medium font-medium text-gray-500">
            Appointment Fee: <span className="font-semibold text-medium text-gray-500">$ {doctor.fee}</span>
          </div>
        </div>
      </div>

      <div className="mt-1 rounded-lg p-6 ml-65 flex flex-col gap-4 select-none">
        <p className="text-medium font-semibold text-gray-700">Booking Slots</p>

        <div
          ref={dayDrag.scrollRef}
          {...dayDrag.events}
          className={`flex flex-row gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${dayDrag.isDown ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
          {slots.map((slot, index) => {
            const isActive = activeSlot === index;

            return (
              <div
                key={index}
                onMouseUp={(e) => {
                  if (dayDrag.isClickAction(e)) {
                    setActiveSlot(index);
                  }
                }}
                className={`flex flex-col items-center justify-center w-14 py-4 border rounded-full transition-all flex-shrink-0 cursor-pointer ${isActive
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
              >
                <p className="text-lg font-normal">{slot.day}</p>
                <p className="text-medium font-semibold mt-1">{slot.date}</p>
              </div>
            );
          })}
        </div>

        <div
          ref={timeDrag.scrollRef}
          {...timeDrag.events}
          className={`flex flex-row gap-3 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${timeDrag.isDown ? "cursor-grabbing" : "cursor-grab"
            }`}
        >
          {timeSlots.map((timeSlot, index) => {
            const isActiveTime = activeTimeSlot === index;

            return (
              <div
                key={index}
                onMouseUp={(e) => {
                  if (timeDrag.isClickAction(e)) {
                    setActiveTimeSlot(index);
                  }
                }}
                className={`flex items-center justify-center px-6 py-2 border rounded-full transition-all flex-shrink-0 cursor-pointer text-sm font-light ${isActiveTime
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                  }`}
              >
                <p>{timeSlot.time}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-69 mt-4 bg-primary rounded-full w-50 pl-7 py-3">
        <a href="/Account">
          <button className="text-white">Book an Appointment</button>
        </a>
      </div>
      <div className="mt-15 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold">Related Doctors</p>
          <p className="pt-3 text-sm ">Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="mt-10 w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedDoctors.map((relDoc) => (
              <a href={`/doctor/${relDoc.id}`} key={relDoc.id} className="w-full block">
                <div className="border border-blue-100 rounded-xl hover:translate-y-[-10px] transition-all duration-500 ease-in-out overflow-hidden bg-white cursor-pointer flex flex-col h-full">
                  <div className="bg-blue-50 flex justify-center items-center py-5">
                    <img
                      src={relDoc.image}
                      alt={relDoc.name}
                      className="h-48 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-4 mt-3 pb-3">
                    <div className="flex items-center gap-2 text-xs text-green-500 font-medium mb-1">
                      <span className={`w-2 h-2 rounded-full inline-block ${relDoc.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {relDoc.available ? 'Available' : 'Unavailable'}
                    </div>
                    <h3 className="text-gray-900 font-semibold text-base truncate">{relDoc.name}</h3>
                    <p className="text-gray-500 text-sm">MBBS-{relDoc.specialty}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorDetail;