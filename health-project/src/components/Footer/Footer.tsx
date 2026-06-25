import { logo } from '../../assets/images'

const Footer = () => {
  return (
    <div>
        <div className="bg-white px-10 md:px-20 lg:px-30 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-25 items-start">
                    <div className="flex flex-col md:col-span-1">
                        <img src={logo} alt="logo" className="w-35 object-contain" />
                        <div className="mt-5 text-sm font-normal text-gray-600 leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                                pariatur sint numquam, expedita nulla libero unde doloribus quis
                                doloremat quibusdam soluta illo aut ipsa et dicta, ipsum nemo! Quis.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 pt-2">
                        <h3 className="uppercase font-semibold ">
                            Company
                        </h3>
                        <ul className="text-sm text-gray-600 font-medium flex flex-col gap-2">
                            <li className="hover:text-black cursor-pointer">Home</li>
                            <li className="hover:text-black cursor-pointer">About Us</li>
                            <li className="hover:text-black cursor-pointer">Contact Us</li>
                            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 pt-2">
                      <h3 className="uppercase font-semibold ">get in touch</h3>
                      <p className="text-gray-600 font-normal text-sm">+91-82490-01710</p>
                      <p className="text-gray-600 font-normal text-sm">abhijitnanda8249@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mt-10 w-250 mx-auto"/>
            <div className="mt-10 pb-5">
                <p className="text-sm font-medium text-center">Copyright 2024@ Prescripto - All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer;