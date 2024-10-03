import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// react slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

// shadcn/ui
import { Button } from "@/components/ui/button"

// lucide icons
import { Dot } from 'lucide-react'

function index() {
    const sliderBanner = {
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        dotsClass: "button__bar",
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "40px"
                }}
            >
                <ul>{dots}</ul>
            </div>
        ),
    }

    const sliderFacility = {
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "40px"
                }}
            >
                <ul>{dots}</ul>
            </div>
        ),
    }

    return (
        <div className="mt-4 space-y-10 md:space-y-40">
            <div className="container">
                {/* banner */}
                <Slider {...sliderBanner}>
                    <div>
                        <div
                            className="md:h-[650px] h-[500px] bg-no-repeat bg-cover bg-center rounded-2xl"
                            style={{ backgroundImage: `url(../storage/images/banner1.jpeg)` }}
                        >
                            <div className="container flex h-full py-8 md:py-20">
                                <div className="self-end max-w-screen-sm p-4 space-y-1 md:p-8 bg-black/40 rounded-2xl">
                                    <p className="text-xl font-semibold text-white md:text-3xl">Because We Care</p>
                                    <p className="text-sm text-justify text-white md:text-base">JEC Eye Hospitals as professional eye healthcare and eye care leader in Indonesia have committed to provide opportunities for ophthalmologists and other medical professionals to expand their knowledge and education through fellowship, observership and training programs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* end banner */}
            </div>

            {/* welcoming message */}
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="font-semibold md:text-3xl text-darkblueiprj">Director of JEC Institute of Research & Education</p>
                                <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold md:text-xl">Welcome to the website of the JEC Institute of Education and Research</p>
                                <p className="text-sm text-justify text-gray-700 md:text-base">We were born from a noble vision to be actively involved in producing competent eye specialists who are able to overcome global competition in providing eye health services in the community based on clinical evidence and prioritizing patient safety by upholding professional ethics.</p>
                            </div>
                        </div>
                        <div>
                            <img src="../storage/images/dio&gmec_greeting.png" alt="DIOandGMEC" className="px-10 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end welcoming message */}

            {/* our program mobile */}
            <div className="container block space-y-4 md:hidden">
                <div className="space-y-1">
                    <p className="font-semibold text-darkblueiprj">Our Program</p>
                    <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                </div>
                <div className="relative flex order-last md:justify-end">
                    <img src="../storage/images/our_program.jpg" alt="DIOandGMEC" className="w-full mx-auto rounded-2xl md:mx-0" />
                    <img src="../storage/images/square_gold.png" className="absolute bottom-0 left-0 -mb-20 -ml-8" style={{ zIndex: -1 }} />
                </div>
                <p className="mb-4 text-sm text-justify text-gray-700 md:text-base">JEC Eye Hospitals is recognized both nationally and internationally as one of the leading eye healthcare providers in Indonesia. We gratefully welcome applicants from in and outside the country.</p>
                <Link className="flex">
                    <Button className="bg-blue-600">
                        All Programs
                    </Button>
                </Link>
            </div>
            {/* end our program mobile */}

            {/* our program desktop */}
            <div className="container hidden md:block">
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="relative flex">
                            <img src="../storage/images/our_program.jpg" alt="DIOandGMEC" className="mx-auto rounded-2xl" />
                            <img src="../storage/images/square_gold.png" className="absolute bottom-0 left-0 w-full -mb-10 -ml-3" style={{ zIndex: -1 }} />
                        </div>
                        <div>
                            <div className="mb-4 space-y-2">
                                <p className="text-3xl font-semibold text-darkblueiprj">Our Program</p>
                                <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                            </div>
                            <p className="mb-8 text-sm text-justify text-gray-700 md:text-base">JEC Eye Hospitals is recognized both nationally and internationally as one of the leading eye healthcare providers in Indonesia. We gratefully welcome applicants from in and outside the country.</p>
                            <Link className="flex">
                                <Button className="bg-blue-600">
                                    All Programs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* end our program desktop */}

            {/* stats */}
            <div className="container space-y-4 md:space-y-8">
                <div className="max-w-3xl mx-auto">
                    <p className="font-semibold text-center text-gray-700 md:text-2xl"><span className="text-rediprj">JEC Institute of Research and Education</span> have a programs to support your professional development and enhance your <span className="text-goldiprj">clinical practice</span></p>
                </div>
                <div className="grid max-w-xs grid-cols-1 mx-auto md:max-w-5xl md:grid-cols-3">
                    <div className="p-10 bg-darkblueiprj rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                        <p className="mb-2 text-5xl font-semibold text-center text-goldiprj">1998</p>
                        <p className="text-xs font-semibold text-center text-white">Establishing since</p>
                    </div>
                    <div className="p-10 bg-white">
                        <p className="mb-2 text-5xl font-semibold text-center text-goldiprj">60+</p>
                        <p className="text-xs font-semibold text-center text-gray-700">Clinical Practice</p>
                    </div>
                    <div className="p-10 bg-darkblueiprj rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                        <p className="mb-2 text-5xl font-semibold text-center text-goldiprj">250+</p>
                        <p className="text-xs font-semibold text-center text-white">Medical Doctor have attended the program</p>
                    </div>
                </div>
            </div>
            {/* end stats */}

            {/* our facility mobile */}
            <div className="container block space-y-4 md:hidden">
                <div className="space-y-2">
                    <p className="font-semibold text-darkblueiprj">Facility</p>
                    <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                </div>
                <div className="relative">
                    <Slider {...sliderFacility}>
                        <div>
                            <img src="../storage/images/facility/lasik_4.jpg" alt="image" className="rounded-xl" />
                        </div>
                        <div>
                            <img src="../storage/images/facility/cdc.jpg" alt="image" className="rounded-xl" />
                        </div>
                        <div>
                            <img src="../storage/images/facility/ot_room3.jpg" alt="image" className="rounded-xl" />
                        </div>
                    </Slider>
                    <img src="../storage/images/dot.png" className="absolute bottom-0 left-0 w-auto h-[600] -ml-60 -mb-10" style={{ zIndex: -1 }} />
                </div>
                <p className="mb-4 text-sm text-justify text-gray-700 md:text-base">We believe that exceptional facilities are key to exceptional education, we provide high-tech laboratories, interactive classrooms, and an eye clinic with the latest diagnostic equipment.</p>
                <Link className="flex">
                    <Button className="bg-blue-600">
                        Explore Facility
                    </Button>
                </Link>
            </div>
            {/* end our facility mobile */}

            {/* facility desktop */}
            <div className="container hidden md:block">
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-3xl font-semibold text-darkblueiprj">Facility</p>
                                <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                            </div>
                            <p className="mb-8 text-sm text-justify text-gray-700 md:text-base">We believe that exceptional facilities are key to exceptional education, we provide high-tech laboratories, interactive classrooms, and an eye clinic with the latest diagnostic equipment.</p>
                            <Link className="flex">
                                <Button className="bg-blue-600">
                                    Explore Facility
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <Slider {...sliderFacility}>
                                <div>
                                    <img src="../storage/images/facility/lasik_4.jpg" alt="image" className="rounded-xl" />
                                </div>
                                <div>
                                    <img src="../storage/images/facility/cdc.jpg" alt="image" className="rounded-xl" />
                                </div>
                                <div>
                                    <img src="../storage/images/facility/ot_room3.jpg" alt="image" className="rounded-xl" />
                                </div>
                            </Slider>
                            <img src="../storage/images/dot.png" className="absolute bottom-0 left-0 w-auto h-[600] -ml-60 -mb-10" style={{ zIndex: -1 }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* end facility desktop */}

            {/* news & event */}
            <div className="container space-y-4">
                <div className="space-y-1">
                    <p className="font-semibold md:text-lg text-darkblueiprj">News & Event</p>
                    <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <Link className="flex flex-col gap-4" href="/under-construction">
                        <div className="relative">
                            <img src="../storage/images/news/news1.jpg" alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-4" href="/under-construction">
                        <div className="relative">
                            <img src="../storage/images/news/news1.jpg" alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-4" href="/under-construction">
                        <div className="relative">
                            <img src="../storage/images/news/news1.jpg" alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-4" href="/under-construction">
                        <div className="relative">
                            <img src="../storage/images/news/news1.jpg" alt="image" className="w-full rounded-2xl" />
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">June 12, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis orci eget.</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* end news & event */}
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