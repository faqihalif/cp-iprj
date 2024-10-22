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
        <div className="mt-4 space-y-16">
            <div className="w-full 2xl:container">
                {/* banner */}
                <Slider {...sliderBanner}>
                    <div>
                        <div
                            className="md:h-[520px] h-[400px] bg-no-repeat bg-cover bg-center"
                            style={{ backgroundImage: `url(../storage/images/banner.jpg)` }}
                        >
                            <div className="flex h-full">
                                <div className="self-end max-w-screen-sm p-4 space-y-1 md:py-8 md:px-16 bg-gradient-to-r from-sky-800 to-black/40">
                                    <p className="text-xl font-semibold text-white md:text-3xl">By Teaching We Learn</p>
                                    <p className="text-sm text-justify text-white md:text-base">Institut Pendidikan dan Penelitian JEC (INSPIRE JEC) is an Indonesian Non-Profit Organization under the aegis of Yayasan Pilar Mitra Pendidikan based at JEC Eye Hospitals and Clinics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* end banner */}
            </div>

            {/* our program */}
            <div className="w-full 2xl:container">
                <div className="max-w-4xl px-4 mx-auto">
                    <div className="mb-8 space-y-4">
                        <p className="text-3xl font-bold text-center text-sky-800">Our Program</p>
                        <p className="mb-8 text-sm text-center text-gray-700 md:text-base">We have been recognized both nationally and internationally as one of the leading eye healthcare providers in Indonesia. We gratefully welcome applicants from in and outside the country.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <Link href="/programs"
                        className="lg:h-[240px] h-[160px] bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url(../storage/images/program-fellowship.jpg)` }}
                    >
                        <div className="flex h-full">
                            <div className="flex w-full bg-gradient-to-r from-black/50">
                                <div className="self-center px-8">
                                    <p className="text-xl font-semibold text-white md:text-3xl">Fellowship</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/programs"
                        className="lg:h-[240px] h-[160px] bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url(../storage/images/program-observership.jpg)` }}
                    >
                        <div className="flex h-full">
                            <div className="flex w-full bg-gradient-to-r from-black/50">
                                <div className="self-center px-8">
                                    <p className="text-xl font-semibold text-white md:text-3xl">Observership</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/programs"
                        className="lg:h-[240px] h-[160px] bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url(../storage/images/program-resident.jpg)` }}
                    >
                        <div className="flex h-full">
                            <div className="flex w-full bg-gradient-to-r from-black/50">
                                <div className="self-center px-8">
                                    <p className="text-xl font-semibold text-white md:text-3xl">Residency</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* end our program */}

            {/* stats */}
            <div className="container space-y-4 md:space-y-8">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg font-bold text-center text-gray-700 md:text-2xl"><span className="text-rediprj">JEC Institute of Research and Education</span> have a programs to support your professional development and enhance your <span className="text-goldiprj">clinical practice</span></p>
                </div>
                <div className="grid max-w-xs grid-cols-1 mx-auto md:max-w-5xl md:grid-cols-3">
                    <div className="p-10 bg-darkblueiprj rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                        <p className="mb-2 text-5xl font-semibold text-center text-goldiprj">1998</p>
                        <p className="text-xs font-semibold text-center text-white">Establishing since</p>
                    </div>
                    <div className="p-10 bg-white">
                        <p className="mb-2 text-5xl font-semibold text-center text-goldiprj">60+</p>
                        <p className="text-xs font-semibold text-center text-gray-700">Physicians Faculty</p>
                    </div>
                    <div className="p-10 bg-darkblueiprj rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                        <p className="mb-2 text-5xl font-semibold text-center text-goldiprj">250+</p>
                        <p className="text-xs font-semibold text-center text-white">Medical Doctor have attended the program</p>
                    </div>
                </div>
            </div>
            {/* end stats */}

            {/* facility */}
            <div className="2xl:container">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
                    <div className="lg:col-span-2">
                        <div
                            className="md:h-[480px] h-[360px] bg-no-repeat bg-cover bg-center"
                        >
                            <div className="flex h-full">
                                <div className="flex w-full bg-gradient-to-r from-goldiprj to-black/50">
                                    <div className="self-center w-full p-4 space-y-4 md:px-8">
                                        <div>
                                            <p className="mb-4 text-lg font-semibold text-white md:text-2xl">Welcoming Message</p>
                                            <p className="mb-8 text-sm text-justify text-white md:text-base">We were born from a noble vision to be actively involved in producing competent eye specialists who are able to overcome global competition in providing eye health services in the community based on clinical evidence and prioritizing patient safety by upholding professional ethics.</p>
                                            <p className="text-sm text-justify text-white md:text-base">Prof. DR. Dr. Widya Artini Wiyogo (Ikke), SpM(K)</p>
                                            <p className="text-base font-semibold text-white md:text-xl">Director / GMEC Chair</p>
                                        </div>
                                        <Link className="inline-flex" href="/about-us">
                                            <Button className="bg-blue-600">
                                                About Us
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div
                            className="md:h-[480px] h-[360px] bg-no-repeat bg-cover bg-center"
                            style={{ backgroundImage: `url(../storage/images/facility.jpg)` }}
                        >
                            <div className="flex h-full">
                                <div className="flex w-full bg-gradient-to-r from-black/70">
                                    <div className="self-center max-w-4xl p-4 space-y-8 md:px-16">
                                        <div className="space-y-2">
                                            <p className="text-xl font-semibold text-white md:text-3xl">Facility</p>
                                            <p className="text-sm text-justify text-white md:text-base">We believe that exceptional facilities are key to exceptional education, we provide high-tech laboratories, interactive classrooms, and an eye clinic with the latest diagnostic equipment.</p>
                                        </div>
                                        <Link className="inline-flex" href="/facility">
                                            <Button className="bg-blue-600">
                                                Explore More
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end facility */}

            {/* news & event */}
            <div className="container space-y-8">
                <div className="space-y-1">
                    <p className="text-3xl font-bold text-center text-sky-800">News & Event</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <Link className="flex flex-col gap-1" href="/under-construction">
                        <div className="relative">
                            <div
                                className="h-[160px] md:h-[240px] bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(../storage/images/news/news3.jpg)` }}
                            ></div>
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">August 15, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Fellowship Presentation</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-1" href="/under-construction">
                        <div className="relative">
                            <div
                                className="h-[160px] md:h-[240px] bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(../storage/images/news/news1.jpeg)` }}
                            ></div>
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">March 15, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Baksos Glaucoma Implant</p>
                        </div>
                    </Link>
                    <Link className="flex flex-col gap-1" href="/under-construction">
                        <div className="relative">
                            <div
                                className="h-[160px] md:h-[240px] bg-no-repeat bg-cover bg-center rounded-2xl"
                                style={{ backgroundImage: `url(../storage/images/news/news2.jpeg)` }}
                            ></div>
                            <div className="absolute px-3 py-1 bg-gray-300 rounded-full top-4 right-4">
                                <p className="text-xs font-medium text-gray-700">January 8, 2024</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Wetlab</p>
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