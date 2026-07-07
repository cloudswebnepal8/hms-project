import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
    // 1. Define Local States for Form Inputs & Feedback
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<string>('')

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setIsPasswordVisible((prevState) => !prevState)
    }

    // 2. Registration API Submission Handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

        try {
            console.log("Sending registration data to Django...")
            // Note: If /api/register/ gives a 404 later, check accounts/urls.py for the exact path string
            const response = await axios.post(`${BASE_URL}/api/register/`, {
                full_name: name,
                email: email,
                password: password
            })

            console.log("Registration successful!", response.data)
            setSuccess('Account created successfully! Redirecting to login...')

            // Redirect to login view after a short delay
            setTimeout(() => {
                window.location.href = '/Account'
            }, 2000)

        } catch (err: any) {
            console.error("Registration failed:", err)
            setError(err.response?.data?.message || 'Failed to create account. Please check your details.')
        }
    }

    return (
        <div className='mx-31 mt-17'>
            <form
                onSubmit={handleSubmit}
                className='justify-start items-start flex h-119 mx-80 w-100 border border-gray-300 shadow-lg rounded-lg mb-20 bg-white'
            >
                <div className='flex flex-col items-start p-10 w-full'>
                    <p className='text-2xl font-bold text-gray-600'>Create Account</p>
                    <p className='pt-3 font-semibold text-sm text-gray-500'>Please sign up to book appointment</p>

                    {/* Status Feedback Messages */}
                    {error && <p className='mt-2 text-sm text-red-500 font-medium'>{error}</p>}
                    {success && <p className='mt-2 text-sm text-green-500 font-medium'>{success}</p>}

                    <label htmlFor='name' className='pt-4 text-gray-500 font-normal text-medium'>Full Name</label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='border border-gray-300 rounded-md p-2 w-75 mt-1 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors duration-500'
                        placeholder='Enter your full name'
                    />

                    <label htmlFor="email" className='pt-4 text-gray-500 font-normal text-medium'>Email</label>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='border border-gray-300 rounded-md p-2 w-75 mt-1 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-colors duration-500'
                        placeholder='Enter your email'
                    />

                    <label htmlFor="password" className='pt-4 text-gray-500 font-normal text-medium'>Password</label>
                    <div className='relative w-75 mt-1 flex items-center'>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
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

                    <button type="submit" className="mt-4 bg-blue-600 px-26 py-4 items-start rounded-lg text-sm text-white hover:bg-blue-700 transition-colors">
                        Create Account
                    </button>

                    <p className='mt-4 text-sm text-gray-500'>Already have an account ? <a href="/Account" className='text-blue-500'>Login Here</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;