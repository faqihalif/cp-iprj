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
                        <p className="text-sm text-justify text-gray-700 md:text-base">Menyelenggarakan pendidikan tenaga kesehatan  mata yang mumpuni dalam pengetahuan dan keterampilan praktik klinis serta penelitian dalam menyelesaikan masalah kesehatan mata di Indonesia di ikuti memiliki kemampuan  untuk bersaing secara global.</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Mission</p>
                        <ul className="pl-5 list-disc">
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Menghasilkan tenaga medis mata yang kompeten dengan berbasis bukti klinis disertai mengedepankan keselamatan pasien (patient’s safety) dan menjunjung tinggi etika profesi.
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Memberi ruang untuk menghasilkan tenaga kesehatan mata yang mempunyai wawasan dan kemampuan untuk mengembangkan diri dalam pembelajaran sepanjang hayat (lifelong learning) serta dapat beradaptasi dalam mencapai kesetaraan dengan perkembangan keilmuan dan teknologi terkini, sehingga dapat memberikan pelayanan Oftalmologi yang memahami konsep pelayanan value based.
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Menyediakan kesempatan peserta didik untuk terjun dalam komunitas dengan berbagai kondisi medis dan ketersediaan pelayanan kesehatan yang bervariasi, yang bertujuan memperkaya pengalaman dan membentuk pemikiran yang komprehensif.
                            </li>
                            <li className="text-sm text-justify text-gray-700 md:text-base">
                                Mendidik tenaga kesehatan mata yang memiliki jiwa entrepreneur dan mengerti manajemen rumah sakit disertai kemampuan menginisiasi program kemitrakerjaan dengan jejaring dalam pelayanan kesehatan mata secara nasional maupun internasional.
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