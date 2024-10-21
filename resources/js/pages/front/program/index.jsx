import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, ArrowRight } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// graduation fellowship
import GraduationFellowship from '@/images/programs.jpg'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

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
                        <p className="text-xs">Programs</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Programs</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="space-y-8">
                    {/* about the program */}
                    <div className="grid items-center grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-2">
                        <div className="space-y-4">
                            <div>
                                <p className="pb-1 text-lg font-semibold text-gray-700">About the program</p>
                                <p className="text-sm text-justify text-gray-700 md:text-base">As the leading eye healthcare provider in Indonesia, it is our duty to expand and enrich the knowledge and skills of ophthalmologists both from Indonesia and all over the world. We are committed to give opportunity for ophthalmologists to get professional and experience through our fellowship and observership programs of our Hospitals.</p>
                            </div>
                            <div className="hidden space-y-4 lg:flex lg:flex-col">
                                <div>
                                    <p className="text-sm text-justify text-gray-700 md:text-base"><b>Fellowship</b> - JEC Academy offers fellowship programs in select subspecialties. At JEC Academy, our fellows have opportunity to learn from our experience physicians and many of whom are leaders in their fields. Each program is designed to give the fellow the specialized skills and knowledge needed to excel in his or her area of study.</p>
                                </div>
                                <div>
                                    <p className="text-sm text-justify text-gray-700 md:text-base"><b>Observership</b> - As our commitment, we also offer to observers from outside of JEC (National and International) to feel our experience in handling patients. The programs opened in each year for all sub-specialties, Observers not allowed to “hands-on” patient contact or anything research activities, participants are able to observe only, under supervision our physician.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={GraduationFellowship} alt="About the program" className="w-full rounded-xl" />
                        </div>
                        <div className="flex flex-col space-y-4 lg:hidden">
                            <div>
                                <p className="text-sm text-justify text-gray-700 md:text-base"><b>Fellowship</b> - JEC Academy offers fellowship programs in select subspecialties. At JEC Academy, our fellows have opportunity to learn from our experience physicians and many of whom are leaders in their fields. Each program is designed to give the fellow the specialized skills and knowledge needed to excel in his or her area of study.</p>
                            </div>
                            <div>
                                <p className="text-sm text-justify text-gray-700 md:text-base"><b>Observership</b> - As our commitment, we also offer to observers from outside of JEC (National and International) to feel our experience in handling patients. The programs opened in each year for all sub-specialties, Observers not allowed to “hands-on” patient contact or anything research activities, participants are able to observe only, under supervision our physician.</p>
                            </div>
                        </div>
                    </div>
                    {/* end about the program */}

                    {/* sub specialties */}
                    <div>
                        <div className="space-y-2">
                            <div>
                                <p className="pb-1 text-lg font-semibold text-gray-700">Sub-specialties</p>
                                <p className="text-sm text-gray-700 md:text-base">Find out more about our programs by heading towards our departments below:</p>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* fellowship */}
                                <div>
                                    <p className="pb-2 font-semibold text-gray-700">Fellowship Programs</p>
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1">
                                        {
                                            props.fellowship.map((v, index) => (
                                                <Link key={index} href={`/programs/${v.slug}`} className="flex flex-col space-y-1">
                                                    <p className="text-sm font-semibold text-green-600 md:text-base">{v.name}</p>
                                                    <div className="flex items-center space-x-1">
                                                        <p className="text-xs text-gray-500 md:text-sm">Learn More</p>
                                                        <ArrowRight className="w-3 h-3 text-gray-500" />
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* end fellowship */}

                                {/* observership */}
                                <div>
                                    <p className="pb-2 font-semibold text-gray-700">Observership Programs</p>
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1">
                                        {
                                            props.observership.map((v, index) => (
                                                <Link key={index} href={`/programs/${v.slug}`} className="flex flex-col space-y-1">
                                                    <p className="text-sm font-semibold text-green-600 md:text-base">{v.name}</p>
                                                    <div className="flex items-center space-x-1">
                                                        <p className="text-xs text-gray-500 md:text-sm">Learn More</p>
                                                        <ArrowRight className="w-3 h-3 text-gray-500" />
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* end observership */}

                                {/* residency */}
                                <div>
                                    <p className="pb-2 font-semibold text-gray-700">Residency Programs</p>
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1">
                                        {
                                            props.residency.map((v, index) => (
                                                <Link key={index} href={`/programs/${v.slug}`} className="flex flex-col space-y-1">
                                                    <p className="text-sm font-semibold text-green-600 md:text-base">{v.name}</p>
                                                    <div className="flex items-center space-x-1">
                                                        <p className="text-xs text-gray-500 md:text-sm">Learn More</p>
                                                        <ArrowRight className="w-3 h-3 text-gray-500" />
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* end residency */}
                            </div>
                        </div>
                    </div>
                    {/* end specialties */}
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