import React, { useState } from 'react'

const DoctorLogin: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setIsPasswordVisible((prevState) => !prevState)
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
            <div className='w-full max-w-md border border-gray-300 shadow-lg rounded-lg bg-white overflow-hidden'>
                <div className='flex flex-col items-stretch p-6 sm:p-10 w-full'>

                    <p className='text-2xl font-bold text-center w-full text-gray-600 mb-6'>
                        <span className='text-blue-600'>Doctor</span> Login
                    </p>

                    <label htmlFor="email" className='text-gray-500 font-normal text-sm sm:text-base'>
                        Email
                    </label>
                    <input
                        type="email"
                        id='email'
                        className='border border-gray-300 rounded-md p-2 w-full mt-1 mb-4 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors duration-500'
                        placeholder='Enter your email'
                    />

                    <label htmlFor="password" className='text-gray-500 font-normal text-sm sm:text-base'>
                        Password
                    </label>
                    <div className='relative w-full mt-1 flex items-center mb-6'>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            className='border border-gray-300 rounded-md p-2 w-full pr-10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors duration-500'
                            placeholder='Enter your password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className='absolute right-3 text-gray-400 hover:text-black focus:outline-none select-none cursor-pointer flex items-center justify-center'
                        >
                            {isPasswordVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                    <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                    <line x1="2" y1="2" x2="22" y2="22" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* 3. Replaced px-33 with full width element centering */}
                    <button className="w-full bg-blue-600 rounded-lg py-2 text-white font-medium hover:bg-blue-700 transition-colors duration-200">
                        Login
                    </button>

                    <p className='mt-4 text-sm text-gray-500 text-center sm:text-left'>
                        Admin Login? <a href="/DoctorLogin" className='text-blue-500 hover:underline'>Click Here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DoctorLogin