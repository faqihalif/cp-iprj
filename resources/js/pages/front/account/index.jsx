import React, { useState } from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link, usePage } from '@inertiajs/react'

// lucide icons
import { ChevronRight } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

function index(props) {
    const { component } = usePage()

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
                        <p className="text-xs">Account</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Account</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="flex flex-col space-y-8 lg:w-auto lg:space-x-4 lg:flex-row lg:space-y-0">
                    <div className="flex flex-col self-start w-full p-2 space-y-1 bg-gray-200 rounded lg:w-auto">
                        <Link href="/my-profile" className={`px-3 py-1 text-sm font-semibold text-center text-gray-700 rounded ` + (component.startsWith('front/account/my-profile') && "shadow bg-white")}>
                            My Profile
                        </Link>
                        <Link href="/application-list" className={`px-3 py-1 text-sm font-semibold text-center text-gray-700 rounded ` + (component.startsWith('front/account/application-list') && "shadow bg-white")}>
                            Application List
                        </Link>
                    </div>

                    <div className="flex-1 w-full lg:pl-4">
                        {props.children}
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