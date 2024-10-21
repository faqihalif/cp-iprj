import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link, usePage } from '@inertiajs/react'

// lucide icons
import { ChevronRight } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function index(props) {
    const { component } = usePage()

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
                        <p className="text-xs">About Us</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">About Us</p>
                    {/* <div className="flex-grow w-full mx-auto border-t-2 border-goldiprj"></div> */}
                </div>
                {/* end title */}

                {/* content */}
                <div>
                    <TabGroup className="w-full space-y-4">
                        <TabList className="flex flex-col w-full pb-2 space-y-2 border-b-2 md:flex-row md:space-x-8 md:space-y-0">
                            <Tab as="div" className="flex items-center justify-center">
                                <Link href={route('aboutUs.index')} className={`text-center rounded-t pb-1 text-sm font-semibold text-gray-700 focus:outline-none ` + (component.startsWith('front/about-us/about') && "border-b-2 border-goldiprj")}>
                                    About
                                </Link>
                            </Tab>
                            <Tab as="div" className="flex items-center justify-center">
                                <Link href={route('aboutUs.philosophy')} className={`text-center rounded-t pb-1 text-sm font-semibold text-gray-700 focus:outline-none ` + (component.startsWith('front/about-us/philosophy') && "border-b-2 border-goldiprj")}>
                                    Philosophy
                                </Link>
                            </Tab>
                            <Tab as="div" className="flex items-center justify-center">
                                <Link href={route('aboutUs.visionMission')} className={`text-center rounded-t pb-1 text-sm font-semibold text-gray-700 focus:outline-none ` + (component.startsWith('front/about-us/vision-mission') && "border-b-2 border-goldiprj")}>
                                    Vision and Mission
                                </Link>
                            </Tab>
                            <Tab as="div" className="flex items-center justify-center">
                                <Link href={route('aboutUs.ourTeams')} className={`text-center rounded-t pb-1 text-sm font-semibold text-gray-700 focus:outline-none ` + (component.startsWith('front/about-us/our-teams') && "border-b-2 border-goldiprj")}>
                                    Our Teams
                                </Link>
                            </Tab>
                            <Tab as="div" className="flex items-center justify-center">
                                <Link href={route('aboutUs.educationalObjective')} className={`text-center rounded-t pb-1 text-sm font-semibold text-gray-700 focus:outline-none ` + (component.startsWith('front/about-us/educational-objective') && "border-b-2 border-goldiprj")}>
                                    Educational Objective
                                </Link>
                            </Tab>
                        </TabList>
                        <TabPanels>
                            {props.children}
                        </TabPanels>
                    </TabGroup>
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