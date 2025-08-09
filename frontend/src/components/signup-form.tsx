export default function SignupForm() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-6 text-center'>
                    Create an account
                </h2>
                <form className='space-y-4'>
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Full Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Your name'
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            placeholder='you@example.com'
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            placeholder='********'
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor='confirm-password'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            id='confirm-password'
                            placeholder='********'
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
                    >
                        Register
                    </button>
                </form>

                <p className='mt-4 text-center text-sm text-gray-600'>
                    Already have an account?{' '}
                    <a href='/login' className='text-blue-600 hover:underline'>
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
}
