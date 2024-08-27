import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// under construction
import UnderConstruction from '@/images/under-construction.webp'

function index(props) {
    return (
        <div
            style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "100%", backgroundRepeat: 'no-repeat' }}
        >
            <div className="container py-4 space-y-8">
                {/* title */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-1">
                        <Link href="/" className="text-xs">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <p className="text-xs">Lecturer</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Lecturer</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="space-y-8">
                    <div className="py-4 space-y-4">
                        <div className="max-w-screen-lg mx-auto space-y-2">
                            <p className="text-xl font-semibold text-center text-gray-700">
                                Something Big is Coming!
                            </p>
                            <p className="text-center text-gray-700">
                                We are under construction right now, but we are working on something great just for you. Stay tuned, and thank you for your understanding as we make things even better.
                            </p>
                        </div>
                        <img src={UnderConstruction} alt="Under Construction" className="mx-auto" />
                        <div className="flex justify-center">
                            <Link href="/" className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded">
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
index.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default index