import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, GraduationCap, MapPin, Calendar, Users } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'



function show(props) {
    return (
        <div
            style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "100%", backgroundRepeat: 'no-repeat' }}
        >
            <div className="w-full px-8 pt-8 space-y-4 2xl:container">
                {/* title */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                        <Link href="/" className="text-xs">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <Link href="/programs" className="text-xs">Programs</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <p className="text-xs">{props.data.name}</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">{props.data.name}</p>
                </div>
                {/* end title */}

                {/* content */}
                {
                    props.data.data ? (
                        <div className="space-y-8">
                            {/* overview */}
                            <div>
                                <p className="pb-4 text-xl font-semibold text-gray-700">Overview</p>
                                <div className="space-y-2">
                                    {
                                        props.data.data.overview.map((v, index) => (
                                            <p key={index} className="text-sm text-justify text-gray-700 md:text-base">{v}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* end overview */}

                            {/* lecturer */}
                            <div>
                                <p className="pb-4 text-xl font-semibold text-gray-700">Lecturer</p>
                                <div className="space-y-2">
                                    {
                                        props.data.data.lecturer.map((v, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <div>
                                                    <GraduationCap className="flex w-4 h-4 text-gray-700" />
                                                </div>
                                                <div className="flex-1">
                                                    <p key={index} className="text-sm text-justify text-gray-700 md:text-base">{v}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* end lecturer */}

                            {/* location */}
                            <div>
                                <p className="pb-4 text-xl font-semibold text-gray-700">Location</p>
                                <div className="space-y-2">
                                    {
                                        props.data.data.location.map((v, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <div>
                                                    <MapPin className="flex w-4 h-4 text-gray-700" />
                                                </div>
                                                <div className="flex-1">
                                                    <p key={index} className="text-sm text-justify text-gray-700 md:text-base">{v}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* end location */}

                            {/* duration */}
                            <div>
                                <p className="pb-4 text-xl font-semibold text-gray-700">Duration</p>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <Calendar className="flex w-4 h-4 text-gray-700" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-justify text-gray-700 md:text-base">{props.data.data.duration}</p>
                                    </div>
                                </div>
                            </div>
                            {/* end duration */}

                            {/* number of position */}
                            <div>
                                <p className="pb-4 text-xl font-semibold text-gray-700">Number of position / year</p>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <Users className="flex w-4 h-4 text-gray-700" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-justify text-gray-700 md:text-base">{props.data.data.numberOfPosition}</p>
                                    </div>
                                </div>
                            </div>
                            {/* end number of position */}
                        </div>
                    ) : (
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
                                <img src="../storage/images/under-construction.webp" alt="Under Construction" className="mx-auto" />
                                <div className="flex justify-center">
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded">
                                        Back to home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }

                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
show.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default show