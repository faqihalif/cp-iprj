import React from 'react'

// front
import Front from '@/layout/front/front'
import AboutUs from '@/pages/front/about-us/index'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

// our teams
import ProfTDG from '@/images/our-teams/Prof._Dr._Tjahjono_D._Gondhowiardjo_SpMK_PhD.webp'
import ProfIkke from '@/images/our-teams/Prof.DR.Dr.Widya_Artini_Wiyogo_Ikke_SpM_K.webp'
import DrNina from '@/images/our-teams/Dr.Nina_Asrini_Noor_SpM.webp'
import DrElviz from '@/images/our-teams/DR.Dr._Elvioza_SpM_K.webp'
import DrEmma from '@/images/our-teams/Dr.Emma_Rusmayani_SpM_K.webp'
import DrAlia from '@/images/our-teams/Dr._Alia_Arianti_SpM.webp'
import DrNing from '@/images/our-teams/DR NING-ec1e84aa91.webp'
import DrZeiras from '@/images/our-teams/Dr.Zeiras_Eka_Djamal_SpM_K.webp'
import Ine from '@/images/our-teams/Ine_Indriani_M.Psi.webp'
import DrMartin from '@/images/our-teams/Dr.Martin_Hertanto_SpM.webp'
import DrOce from '@/images/our-teams/Dr.Muhammad_Yoserizal_SpM.webp'
import DrRinta from '@/images/our-teams/Dr.Paramastri_Arintawati_SpM.webp'
import Widyarsih from '@/images/our-teams/widyarsih.jpg'

function ourTeams() {
    return (
        <>
            {/* our teams */}
            <TabPanel>
                <p className="pb-4 text-xl font-bold text-gray-700">Our Teams</p>
                <div className="space-y-2">
                    <div className="space-y-8">
                        <div className="flex flex-col space-y-2">
                            <div className="flex">
                                <img src={ProfTDG} className="w-56 mx-auto rounded-xl" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-sm font-semibold text-center text-gray-700">Prof. Dr. Tjahjono D. Gondhowiardjo, SpM(K), PhD</p>
                                <p className="text-xs text-center text-gray-700">Ketua Pengurus YAYASAN PILAR MITRA PENDIDIKAN</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex">
                                <img src={ProfIkke} className="w-56 mx-auto rounded-xl" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-sm font-semibold text-center text-gray-700">Prof. DR. Dr. Widya Artini Wiyogo, SpM(K)</p>
                                <p className="text-xs text-center text-gray-700">Direktur / GMEC Chair</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrNina} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Nina Asrini Noor, SpM</p>
                                    <p className="text-xs text-center text-gray-700">Research Division Head</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrElviz} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">DR. Dr. Elvioza, SpM(K)</p>
                                    <p className="text-xs text-center text-gray-700">Education Program Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrEmma} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">DR. Dr. Emma Rusmayani, SpM(K)</p>
                                    <p className="text-xs text-center text-gray-700">Fellowship Program Head</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrAlia} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Alia Arianti, SpM</p>
                                    <p className="text-xs text-center text-gray-700">Residency Program Head</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrNing} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Ni Retno Setyoningrum, SpM (K), MMedEdu</p>
                                    <p className="text-xs text-center text-gray-700">Curriculum Committee</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrZeiras} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Zeiras Eka Djamal, SpM(K)</p>
                                    <p className="text-xs text-center text-gray-700">Learning Environment Committee</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={Ine} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Ine Indriani, M.Psi., Psikolog</p>
                                    <p className="text-xs text-center text-gray-700">Learning Environment Committee</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrMartin} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Martin Hertanto, SpM</p>
                                    <p className="text-xs text-center text-gray-700">Core Physician Faculty Coordinator</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrOce} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Muhammad Yoserizal, SpM</p>
                                    <p className="text-xs text-center text-gray-700">Clinical Competency Committee Coordinator</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <img src={DrRinta} className="w-56 mx-auto rounded-xl" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold text-center text-gray-700">Dr. Paramastri Arintawati, SpM</p>
                                    <p className="text-xs text-center text-gray-700">Program Evaluation Committee Coordinator</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex">
                                <img src={Widyarsih} className="w-56 mx-auto rounded-xl" />
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-sm font-semibold text-center text-gray-700">Widyarsih Oktaviana, SKM, MKM</p>
                                <p className="text-xs text-center text-gray-700">Secretariat Program Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            {/* end our teams */}
        </>
    )
}

// Render Layout
ourTeams.layout = page => {
    return (
        <Front>
            <AboutUs children={page} />
        </Front>
    )
}

export default ourTeams