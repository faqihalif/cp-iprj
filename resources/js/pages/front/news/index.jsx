import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// news
import News1 from '@/images/news/news1.jpg'
import News2 from '@/images/news/news2.jpg'
import News3 from '@/images/news/news3.jpg'

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
                        <p className="text-xs">News & Event</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">News & Event</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Link className="flex flex-col gap-1" href="/under-construction">
                        <div className="relative">
                            <div
                                className="h-[160px] md:h-[240px] bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(../storage/images/news/news3.jpg)` }}
                            ></div>
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">August 15, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Fellowship Presentation</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-1" href="/under-construction">
                        <div className="relative">
                            <div
                                className="h-[160px] md:h-[240px] bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(../storage/images/news/news1.jpeg)` }}
                            ></div>
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">March 15, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Baksos Glaucoma Implant</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-1" href="/under-construction">
                        <div className="relative">
                            <div
                                className="h-[160px] md:h-[240px] bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(../storage/images/news/news2.jpeg)` }}
                            ></div>
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">January 8, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Wetlab</p>
                        </div>
                    </Link>
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