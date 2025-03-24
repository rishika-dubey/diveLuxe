import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="web">
            <div className="w-full bg-white font-sans">
                <header className="p-4 flex justify-between items-center border-b border-gray-200">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                        </svg>
                        <h1 className="text-xl font-bold text-blue-600 ml-2">DriveLuxe</h1>
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="https://webcrumbs.cloud/placeholder" className="font-medium hover:text-blue-600">
                            Home
                        </a>
                        <a href="https://webcrumbs.cloud/placeholder" className="font-medium hover:text-blue-600">
                            Models
                        </a>
                        <a href="https://webcrumbs.cloud/placeholder" className="font-medium hover:text-blue-600">
                            Features
                        </a>
                        <a href="https://webcrumbs.cloud/placeholder" className="font-medium hover:text-blue-600">
                            About
                        </a>
                        <a href="https://webcrumbs.cloud/placeholder" className="font-medium hover:text-blue-600">
                            Contact
                        </a>
                    </nav>

                    <details className="md:hidden relative">
                        <summary className="list-none cursor-pointer">
                            <span className="material-symbols-outlined text-2xl">menu</span>
                        </summary>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md py-2 z-10 border border-gray-200">
                            <a href="https://webcrumbs.cloud/placeholder" className="block px-4 py-2 hover:bg-gray-100">
                                Home
                            </a>
                            <a href="https://webcrumbs.cloud/placeholder" className="block px-4 py-2 hover:bg-gray-100">
                                Models
                            </a>
                            <a href="https://webcrumbs.cloud/placeholder" className="block px-4 py-2 hover:bg-gray-100">
                                Features
                            </a>
                            <a href="https://webcrumbs.cloud/placeholder" className="block px-4 py-2 hover:bg-gray-100">
                                About
                            </a>
                            <a href="https://webcrumbs.cloud/placeholder" className="block px-4 py-2 hover:bg-gray-100">
                                Contact
                            </a>
                        </div>
                    </details>

                    <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Book a Test Drive
                    </button>
                </header>

                <main>
                    <section className="py-8 px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4">
                                <h2 className="text-3xl font-bold">
                                    Experience Luxury <br />
                                    <span className="text-blue-600">Redefined</span>
                                </h2>
                                <p className="text-gray-600 max-w-lg">
                                    Discover our premium collection of high-performance vehicles designed for the modern
                                    driver. Elegance meets power.
                                </p>
                                <div className="flex space-x-4 pt-4">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center">
                                        <span>Explore Models</span>
                                        <span className="material-symbols-outlined ml-2">arrow_forward</span>
                                    </button>
                                    <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">
                                        View Features
                                    </button>
                                </div>
                            </div>

                            <div className="md:w-1/2 mt-8 md:mt-0 relative">
                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Luxury Sports Car"
                                        className="rounded shadow-lg hover:shadow-xl"
                                    />
                                </div>
                                <div className="absolute bottom-4 right-4 bg-white rounded shadow p-3">
                                    <div className="flex items-center">
                                        <div className="rounded-full bg-blue-100 p-2">
                                            <span className="material-symbols-outlined text-blue-600">speed</span>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-500">Top Speed</p>
                                            <p className="font-bold">320 km/h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-white rounded shadow p-3">
                                    <div className="flex items-center">
                                        <div className="rounded-full bg-purple-100 p-2">
                                            <span className="material-symbols-outlined text-purple-600">bolt</span>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-gray-500">0-100 km/h</p>
                                            <p className="font-bold">3.2 seconds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-100 py-8 px-4">
                        <h2 className="text-2xl font-bold text-center mb-8">Featured Models</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded overflow-hidden shadow hover:shadow-md">
                                <div className="relative h-48 bg-gray-200">
                                    <img
                                        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Sports Car Model"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        NEW
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Velocity GT</h3>
                                    <p className="text-gray-600 mb-4">
                                        The pinnacle of speed and elegance with cutting-edge technology.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">$120,000</span>
                                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                                            View Details
                                            <span className="material-symbols-outlined ml-1">arrow_right_alt</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded overflow-hidden shadow hover:shadow-md">
                                <div className="relative h-48 bg-gray-200">
                                    <img
                                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Luxury Sedan"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        POPULAR
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Executive S</h3>
                                    <p className="text-gray-600 mb-4">
                                        Luxury comfort meets performance in this refined sedan.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">$85,000</span>
                                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                                            View Details
                                            <span className="material-symbols-outlined ml-1">arrow_right_alt</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded overflow-hidden shadow hover:shadow-md">
                                <div className="relative h-48 bg-gray-200">
                                    <img
                                        src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Electric SUV"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        ECO
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Eco Explorer</h3>
                                    <p className="text-gray-600 mb-4">
                                        Sustainable luxury with zero emissions and uncompromised performance.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">$95,000</span>
                                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                                            View Details
                                            <span className="material-symbols-outlined ml-1">arrow_right_alt</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </>
  )
}

export default App
