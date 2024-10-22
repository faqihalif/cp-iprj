import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// image doctors
import ProfTDG from '@/images/our-teams/Prof._Dr._Tjahjono_D._Gondhowiardjo_SpMK_PhD.webp'
import ProfIkke from '@/images/our-teams/Prof.DR.Dr.Widya_Artini_Wiyogo_Ikke_SpM_K.webp'

function index(props) {
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
                        <p className="text-xs">Lecturer</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Lecturer</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="pt-8 space-y-10">
                    {/* stats */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div>
                            <p className="text-5xl font-bold text-center text-gray-700">6</p>
                            <p className="text-xl font-semibold text-center text-gray-700">Professor</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-center text-gray-700">5</p>
                            <p className="text-xl font-semibold text-center text-gray-700">Doctorate / PhD</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-center text-gray-700">5</p>
                            <p className="text-xl font-semibold text-center text-gray-700">Ophthalmologist</p>
                        </div>
                    </div>
                    {/* end stats */}

                    {/* list doctor */}
                    {/* <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <p className="text-xl font-bold text-gray-700">Professor</p>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <div className="flex items-center p-4 space-x-4 bg-white border shadow rounded-xl">
                                    <div>
                                        <img src={ProfTDG} className="w-16 mx-auto rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Prof. Dr. Tjahjono D. Gondhowiardjo, SpM(K), Ph.D</p>
                                        <p className="text-sm text-gray-700">Lens, Refractive Surgery and Cornea</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 space-x-4 bg-white border shadow rounded-xl">
                                    <div>
                                        <img src={ProfIkke} className="w-16 mx-auto rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">Prof. DR. Dr. Widya Artini Wiyogo, SpM(K)</p>
                                        <p className="text-sm text-gray-700">Glaucoma Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* end list doctor */}
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