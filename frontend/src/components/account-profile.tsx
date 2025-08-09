export default function AccountProfile() {
    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* Top Navbar */}
            <header className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
                <h1 className='text-xl font-bold text-gray-800'>
                    📷 Photocamera Manager
                </h1>
                <div className='flex items-center gap-4'>
                    <span className='text-gray-600'>👤 Roman</span>
                    <a
                        href='/logout'
                        className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'
                    >
                        Logout
                    </a>
                </div>
            </header>

            {/* Main Dashboard Area */}
            <main className='p-6'>
                <h2 className='text-2xl font-semibold mb-4'>
                    Welcome back, Roman!
                </h2>

                {/* Static Location Switcher */}
                <div className='mb-6'>
                    <h3 className='text-lg font-medium mb-2'>
                        Current Location:
                    </h3>
                    <div className='flex gap-2 flex-wrap'>
                        <button className='px-4 py-2 rounded bg-blue-600 text-white cursor-default'>
                            Miami
                        </button>
                        <button className='px-4 py-2 rounded bg-gray-200 text-gray-700'>
                            New York
                        </button>
                        <button className='px-4 py-2 rounded bg-gray-200 text-gray-700'>
                            LA
                        </button>
                    </div>
                </div>
                {/* Filter Button */}
                <div className='mb-6'>
                    <button className='bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-700 transition'>
                        🧰 Filter
                    </button>
                </div>

                {/* Stat Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* Total Cameras */}
                    <div className='bg-white rounded-lg shadow p-6'>
                        <h3 className='text-lg font-semibold mb-2'>
                            Total Cameras
                        </h3>
                        <p className='text-3xl font-bold text-blue-600'>14</p>
                    </div>

                    {/* In Repair */}
                    <div className='bg-white rounded-lg shadow p-6'>
                        <h3 className='text-lg font-semibold mb-2'>
                            In Repair
                        </h3>
                        <p className='text-3xl font-bold text-yellow-500'>3</p>
                    </div>

                    {/* Available */}
                    <div className='bg-white rounded-lg shadow p-6'>
                        <h3 className='text-lg font-semibold mb-2'>
                            Available
                        </h3>
                        <p className='text-3xl font-bold text-green-500'>11</p>
                    </div>

                    {/* Condition: Used */}
                    <div className='bg-white rounded-lg shadow p-6'>
                        <h3 className='text-lg font-semibold mb-2'>
                            Condition: Used
                        </h3>
                        <p className='text-3xl font-bold text-orange-500'>6</p>
                    </div>

                    {/* Location: Miami */}
                    <div className='bg-white rounded-lg shadow p-6'>
                        <h3 className='text-lg font-semibold mb-2'>
                            Location: Miami
                        </h3>
                        <p className='text-3xl font-bold text-purple-500'>5</p>
                    </div>

                    {/* Low Stock Models */}
                    <div className='bg-white rounded-lg shadow p-6'>
                        <h3 className='text-lg font-semibold mb-2'>
                            Low Stock Models
                        </h3>
                        <p className='text-3xl font-bold text-red-500'>2</p>
                    </div>
                </div>

                {/* Actions */}
                <div className='mt-10'>
                    <h3 className='text-xl font-semibold mb-4'>
                        Quick Actions
                    </h3>
                    <div className='flex flex-wrap gap-4'>
                        <a
                            href='/cameras'
                            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'
                        >
                            📋 View All Cameras
                        </a>
                        <a
                            href='/add-camera'
                            className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition'
                        >
                            ➕ Add New Camera
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
