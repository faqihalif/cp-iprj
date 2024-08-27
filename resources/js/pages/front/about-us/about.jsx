import React from 'react'

// front
import Front from '@/layout/front/front'
import AboutUs from '@/pages/front/about-us/index'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function about() {
    return (
        <>
            {/* about */}
            <TabPanel as="div">
                <p className="pb-4 text-xl font-bold text-gray-700">About</p>
                <div className="space-y-2">
                    <p className="text-sm text-justify text-gray-700 md:text-base">Institut Pendidikan dan Riset Jakarta Eye Center (INSPIRE JEC) is an Indonesian Non-Profit Organization under the aegis of Yayasan Pilar Mitra Pendidikan.</p>
                    <p className="text-sm text-justify text-gray-700 md:text-base">Our scope of activities includes education, research, community service, and professional development, which are all integrated with the ophthalmology healthcare activities of the JEC group which owns eye hospitals and eye clinics throughout Indonesia (specifically Jakarta, Java, Bali, and Sulawesi). JEC is a nationally & internationally acclaimed modern eye hospital in Indonesia with state-of-the-art equipment. This is the reason why the JEC group is a highly sought-after institution for attending ophthalmologists and the next generation of ophthalmologists who are looking to improve their medical competence.</p>
                    <p className="text-sm text-justify text-gray-700 md:text-base">INSPIRE JEC has its roots in the long history of JEC group involvement – since 1998 – in providing</p>
                    <ol className="list-disc list-inside">
                        <li className="text-sm text-gray-700 md:text-base">Education & training activities through Clinical Fellowship & Observership Programs to improve local & foreign attending ophthalmologists' medical competence.</li>
                        <li className="text-sm text-gray-700 md:text-base">Improve skills & experience for Residency Program from various national medical faculties, and.</li>
                        <li className="text-sm text-gray-700 md:text-base">Improve the competence of allied healthcare professionals who are involved in ophthalmology.</li>
                    </ol>
                    <p className="text-sm text-justify text-gray-700 md:text-base">In addition to training and education activities, the JEC group is also actively involved in clinical research, which is published in indexed medical journals or presented at national & international scientific conferences. Through these activities, JEC is pushing forward innovations and scientific advances in the field of ophthalmology and its related technologies. As part of the broader international community, JEC is also active on the world stage as one of the founding members of the ASEAN Association of Eye Hospitals (AAEH) and an active member of the World Association of Eye Hospitals (WAEH).</p>
                    <p className="text-sm text-justify text-gray-700 md:text-base">JEC Group is fully committed to improving national well-being & contributing to the Indonesian healthcare system through the founding of Yayasan Pilar Mitra Pendidikan and its subordinate organization – Institut Pendidikan dan Riset JEC – on 1st August 2024. We hope OC that the establishment of INSPIRE JEC will provide a positive, extensive, and lasting impact on Indonesian ophthalmology healthcare services.</p>
                </div>
            </TabPanel>
            {/* end about */}
        </>
    )
}

// Render Layout
about.layout = page => {
    return (
        <Front>
            <AboutUs children={page} />
        </Front>
    )
}

export default about