import React from 'react'

// front
import Front from '@/layout/front/front'
import AboutUs from '@/pages/front/about-us/index'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

// logo
import Logo from '@/images/logo-footer.png'

function philosophy() {
    return (
        <>
            {/* philosophy */}
            <TabPanel as="div">
                <p className="pb-4 text-xl font-bold text-gray-700">Philosophy</p>
                <img src={Logo} className="w-56 mx-auto" />
                <div className="space-y-2">
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Root</p>
                        <p className="text-sm text-justify text-gray-700 md:text-base">Have the knowledge, diagnostic ability and safe operator skills, as well as appropriate professional ethics to become an ophthalmology service practitioner in the region.</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Wings</p>
                        <p className="text-sm text-justify text-gray-700 md:text-base">Insight and ability to develop oneself, and adapt in achieving equality with the latest scientific and technological developments, so as to provide complete Ophthalmology services and understand the concept of valuebased services.</p>
                    </div>
                </div>
            </TabPanel>
            {/* end philosophy */}
        </>
    )
}

// Render Layout
philosophy.layout = page => {
    return (
        <Front>
            <AboutUs children={page} />
        </Front>
    )
}

export default philosophy