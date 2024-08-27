import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// react slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

// patter our programs
import PatternOurPrograms from '@/images/pattern-our-programs.png'
import Banner1 from '@/images/banner1.jpg'
import Banner2 from '@/images/banner2.jpg'
import Banner3 from '@/images/banner3.jpg'
import Facility1 from '@/images/facility/facility1.jpg'
import Facility2 from '@/images/facility/facility2.jpg'
import Facility3 from '@/images/facility/facility3.jpg'
import News1 from '@/images/news/news1.jpg'

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
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "40px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
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
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "40px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    }

    return (
        <div className="space-y-16 md:space-y-20">
            {/* banner */}
            <Slider {...sliderBanner}>
                <div>
                    <div
                        className="h-[600px] bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${Banner1})` }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="h-[600px] bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${Banner2})` }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="h-[600px] bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${Banner3})` }}
                    >
                    </div>
                </div>
            </Slider>
            {/* end banner */}

            {/* welcoming message */}
            <div className="container">
                <div className="grid items-center grid-cols-1 gap-4 md:gap-20 md:grid-cols-2">
                    <div className="flex md:justify-end">
                        <div className="md:w-[500px] space-y-2">
                            <p className="font-semibold text-darkblueiprj">Director of JEC Institute of Research & Education</p>
                            <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                            <p className="text-xl font-semibold">Welcome to the website of the JEC Institute of Education and Research</p>
                            <p className="text-justify text-gray-700">We were born from a noble vision to be actively involved in producing competent eye specialists who are able to overcome global competition in providing eye health services in the community based on clinical evidence and prioritizing patient safety by upholding professional ethics.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-gray-600 w-[400px] h-[400px] rounded-3xl mx-auto md:mx-0"></div>
                    </div>
                </div>
            </div>
            {/* end welcoming message */}

            {/* our programs */}
            <div
                className="py-20 bg-darkblueiprj"
                style={{ backgroundImage: `url(${PatternOurPrograms})` }}
            >
                <div className="container max-w-screen-md pb-10 mx-auto space-y-2">
                    <p className="text-3xl font-semibold text-center text-white">Our Programs</p>
                    <div className="flex-grow w-24 mx-auto border-t-2 border-white"></div>
                    <p className="text-center text-white">JEC Eye Hospitals is recognized both nationally and internationally as one of the leading eye healthcare providers in Indonesia. We gratefully welcome applicants from in and outside the country.</p>
                </div>

                <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
                    <Link className="flex justify-center p-4 shadow bg-goldiprj rounded-xl" href="/under-construction">
                        <p className="self-center text-xl font-semibold text-center text-gray-900">Fellowship Program</p>
                    </Link>
                    <Link className="flex justify-center p-4 shadow bg-goldiprj rounded-xl" href="/under-construction">
                        <p className="self-center text-xl font-semibold text-center text-gray-900">Observership Program</p>
                    </Link>
                    <Link className="flex justify-center p-4 shadow bg-goldiprj rounded-xl" href="/under-construction">
                        <p className="self-center text-xl font-semibold text-center text-gray-900">Residency Program</p>
                    </Link>
                    <Link className="flex justify-center p-4 shadow bg-goldiprj rounded-xl" href="/under-construction">
                        <p className="self-center text-xl font-semibold text-center text-gray-900">Ophthalmic Nurse</p>
                    </Link>
                </div>
            </div>
            {/* end our programs */}

            {/* facility */}
            <div className="container">
                <div className="grid items-center grid-cols-1 gap-4 md:gap-20 md:grid-cols-2">
                    <div className="flex md:justify-end">
                        <div className="lg:w-[500px] w-full">
                            <Slider {...sliderFacility}>
                                <div>
                                    <img src={Facility1} alt="image" className="rounded-xl" />
                                </div>
                                <div>
                                    <img src={Facility2} alt="image" className="rounded-xl" />
                                </div>
                                <div>
                                    <img src={Facility3} alt="image" className="rounded-xl" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[500px] space-y-2">
                            <p className="text-3xl font-semibold text-darkblueiprj">Facility</p>
                            <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                            <p className="text-justify text-gray-700">We believe that exceptional facilities are key to exceptional education, we provide high-tech laboratories, interactive classrooms, and an eye clinic with the latest diagnostic equipment</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end facility */}

            {/* news & event */}
            <div className="container">
                <div className="pb-6 space-y-2">
                    <p className="text-3xl font-semibold text-darkblueiprj">News & Event</p>
                    <div className="flex-grow w-24 border-t-2 border-goldiprj"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <Link className="flex flex-col gap-4" href="/under-construction">
                        <div className="relative">
                            <img src={News1} alt="image" className="w-full rounded-2xl" />
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
                            <img src={News1} alt="image" className="w-full rounded-2xl" />
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
                            <img src={News1} alt="image" className="w-full rounded-2xl" />
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
                            <img src={News1} alt="image" className="w-full rounded-2xl" />
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