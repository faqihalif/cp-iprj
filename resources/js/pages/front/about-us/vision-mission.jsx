import React from 'react'

// front
import Front from '@/layout/front/front'
import AboutUs from '@/pages/front/about-us/index'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function visionMission() {
    return (
        <>
            {/* vision & mission */}
            <TabPanel as="div">
                <p className="pb-4 text-xl font-bold text-gray-700">Vision & Mission</p>
                <div className="space-y-2">
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Vision</p>
                        <p className="text-sm text-justify text-gray-700 md:text-base">To produce competent eye specialists who are able to overcome global competition in providing eye health services in the community based on clinical evidence and prioritizing patient safety by upholding professional ethics.</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Mission</p>
                        <ul className="pl-5 list-disc">
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Organizing the education of eye specialist doctors who master the knowledge and skills to carry out clinical practice in terms of promotive, preventive, diagnostic, curative, and rehabilitative by upholding professional ethics in serving the community and being able to compete in global competition.
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Providing space to produce eye doctors who have insight and the ability to develop themselves, and adapt in achieving equality with the latest scientific and technological developments, so that they can provide complete Ophthalmology services and also understand the concept of value based services (prioritizing prevention efforts and utilizing digitalization so that the burden of health costs can be reduced).
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Providing opportunities for students to dive into communities with various medical conditions and the availability of varying health services, which aims to enrich experience and form comprehensive thinking.
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Educating eye doctors who have an entrepreneurial spirit and understand hospital management along with the ability to initiate partnership programs with networks in eye health services nationally and internationally.
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Motivating lifelong learning by opening wide and fair access to the latest eye health knowledge and skills.
                            </li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
            {/* end vision & mission */}
        </>
    )
}

// Render Layout
visionMission.layout = page => {
    return (
        <Front>
            <AboutUs children={page} />
        </Front>
    )
}

export default visionMission