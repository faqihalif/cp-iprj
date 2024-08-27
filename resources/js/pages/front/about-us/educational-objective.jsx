import React from 'react'

// front
import Front from '@/layout/front/front'
import AboutUs from '@/pages/front/about-us/index'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function educationalObjective() {
    return (
        <>
            {/* educational objectives */}
            <TabPanel as="div">
                <div>
                    <p className="pb-4 text-xl font-bold text-gray-700">Educational Objectives</p>
                    <ul className="pl-5 list-disc">
                        <li className="text-sm text-justify text-gray-700 md:text-base">
                            Improve the quality and quantity of professional and competent eye specialists in eye health services in Indonesia in the Industry 4.0 era.
                        </li>
                        <li className="text-sm text-justify text-gray-700 md:text-base">
                            Improve excellent service to all stakeholders, especially for users of eye IP services both in hospitals and clinics throughout Indonesia.
                        </li>
                        <li className="text-sm text-justify text-gray-700 md:text-base">
                            Foster cooperation between the world of education, government, industry, and business in an effort to develop comprehensive Eye IP education both at the national and international levels.
                        </li>
                        <li className="text-sm text-justify text-gray-700 md:text-base">
                            Educating eye doctors who have an entrepreneurial spirit and understand hospital management along with the ability to initiate partnership programs with networks in eye health services nationally and internationally.
                        </li>
                        <li className="text-sm text-justify text-gray-700 md:text-base">
                            Create eye doctors who are competent in implementing eye health services to reduce the number of blindness in Indonesia, as well as actively contribute to community service.
                        </li>
                    </ul>
                </div>
            </TabPanel>
            {/* end educational objectives */}
        </>
    )
}

// Render Layout
educationalObjective.layout = page => {
    return (
        <Front>
            <AboutUs children={page} />
        </Front>
    )
}

export default educationalObjective