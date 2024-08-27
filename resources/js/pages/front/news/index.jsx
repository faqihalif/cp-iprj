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
import News1 from '@/images/news/news1.jpg'
import News2 from '@/images/news/news2.jpg'
import News3 from '@/images/news/news3.jpg'

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
                        <p className="text-xs">News & Event</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">News & Event</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <Link className="flex flex-col space-y-1" href="#">
                        <div className="relative">
                            <img src={News1} alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div> 
                            <p className="text-sm font-medium text-gray-700 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col space-y-1" href="#">
                        <div className="relative">
                            <img src={News2} alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div> 
                            <p className="text-sm font-medium text-gray-700 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col space-y-1" href="#">
                        <div className="relative">
                            <img src={News3} alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div> 
                            <p className="text-sm font-medium text-gray-700 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
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