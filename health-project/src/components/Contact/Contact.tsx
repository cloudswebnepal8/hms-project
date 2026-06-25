import { checkup } from "../../assets/images"

const Contact = () => {
  return (
    <div className="flex flex-col mx-30 mb-20 ">
        <div className=" flex items-center justify-center mt-15 text-2xl font-medium ">
            <h1 className="uppercase"><span className="text-gray-500">contact</span> <span className="text-gray-800">us</span></h1>
        </div>
        <div className="flex items-start  mt-10 mx-40 gap-10">
          <img src={checkup} alt="image" className="w-83 h-83" />
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold uppercase text-gray-600 pb-4">our office</h2>
            <p className="text-gray-500 text-sm font-semibold">Chndrasekharpur</p>
            <p className="text-gray-500 text-sm font-semibold mb-6">Bhubaneswar,Odisha-751024</p>
            <p className="text-gray-500 text-sm font-semibold">Tel:+91 82490-01710</p>
            <p className="text-gray-500 text-sm font-semibold mb-7">Email: abhijitnanda8249@gmail.com</p>
            <h2 className="text-lg font-semibold uppercase text-gray-600 pb-4">careers at prescripto</h2>
            <p className="text-gray-500 text-sm font-medium ">Learn more about our teams and job openings.</p>
           <div className="flex items-center mt-4 ">
             <p className=" border border-black px-8 py-4 capitalize text-sm font-semibold hover:bg-black hover:text-white transition duration-300 cursor-pointer">explore jobs</p>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Contact