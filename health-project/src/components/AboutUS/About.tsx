import { staff } from "../../assets/images";

const About = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div className='flex justify-center items-center mt-12 uppercase'>
                <h1 className='text-2xl font-normal'><span className="text-gray-500 ">about</span> <span className="text-gray-700">us</span></h1>
            </div>
            <div className='flex flex-col md:flex-row items-start gap-10 mt-10 mx-30  '>
                <div className='w-full md:w-2/5 flex-shrink-0'>
                    <img
                        src={staff} alt="staff" className="w-full h-auto max-h-[450px] object-cover rounded-lg"
                    />
                </div>
                <div className='flex flex-col items-start w-full  gap-4'>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Welcome to Prescripto, your trusted partner in managing your
                        healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
                    </p>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    </p>

                    <h3 className="font-semibold text-lg text-gray-800 mt-2">Our Vision</h3>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                    </p>
                </div>
            </div>
            <div className='flex items-start mt-6 mx-30'>
                <div className='flex flex-col items-start font-medium'>
                    <h2 className='text-gray-800 text-lg uppercase'><span className="text-gray-400">why</span> choose us</h2>
                </div>
            </div>
            <div className='flex-1 flex-row items-start grid grid-cols-3 mt-6 mx-30 gap-1 hover:cursor-pointer'>
                <div className="flex flex-col items-start hover:bg-blue-700 text-gray-700 hover:text-white transition-colors duration-300 p-4 border border-gray-300 gap-4 p-12">
                    <p className="text-sm font-medium ">EFFICIENCY:</p>
                    <p className="text-sm">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                 <div className="flex flex-col items-start hover:bg-blue-700 text-gray-700 hover:text-white transition-colors duration-300 p-4 border border-gray-300 gap-4 p-12">
                    <p className="text-sm font-medium ">CONVENIENCE:</p>
                    <p className="text-sm ">Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className="flex flex-col items-start hover:bg-blue-700 text-gray-700 hover:text-white transition-colors duration-300 p-4 border border-gray-300 gap-4 p-12">
                    <p className="text-sm font-medium ">PERSONALIZATION:</p>
                    <p className="text-sm">Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
    )
}

export default About;