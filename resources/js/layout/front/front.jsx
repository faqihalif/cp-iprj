import React, { useEffect, useState } from 'react'

// inertia
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

// loading
import Loading from '@/components/ui/loading'

// lucide icons
import { Menu, X } from 'lucide-react'

// logo
import Logo from '@/images/logo-iprj.png'
import LogoFooter from '@/images/logo-footer.png'

// headless ui
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from '@headlessui/react'

const admin = props => {
    let { flash } = usePage().props
    const [loading, setLoading] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    // Start Loading
    router.on('start', () => {
        setLoading(true)
    })

    // Progress Loading
    router.on('progress', () => {
        setLoading(true)
    })

    // Finish Loading
    router.on('finish', () => {
        setLoading(false)
    })

    useEffect(() => {
        return () => {
            setLoading(false)
        }
    }, [])

    return (
        <React.Fragment>
            <div className="flex flex-col h-screen overflow-auto antialiased bg-white">
                <div className="bg-white shadow ">
                    {/* header desktop */}
                    <div className="hidden xl:flex">
                        <div className="container flex items-center justify-between py-3">
                            {/* logo */}
                            <div className="flex items-center">
                                <Link href="/">
                                    <img src={Logo} alt="IPRJ" className="w-auto h-16" />
                                </Link>
                            </div>
                            {/* end logo */}

                            {/* menu */}
                            <div className="flex items-center space-x-8">
                                <Link href="/" className="text-sm font-medium">Home</Link>
                                <Link href="/programs" className="text-sm font-medium">Programs</Link>
                                <Link href="/research-and-publication" className="text-sm font-medium">Research & Publication</Link>
                                <Link href="/lecturer" className="text-sm font-medium">Lecturer</Link>
                                <Link href="/facility" className="text-sm font-medium">Facility</Link>
                                <Link href="/about-us" className="text-sm font-medium">About Us</Link>
                                <Link href="/news" className="text-sm font-medium">News & Event</Link>
                            </div>
                            {/* end menu */}
                        </div>
                    </div>
                    {/* end header desktop */}
                    
                    {/* header mobile */}
                    <div className="flex flex-col xl:hidden">
                        <Popover as="div" className="container flex items-center justify-between py-3 mx-auto">
                            {/* logo */}
                            <div className="flex items-center">
                                <Link href="/">
                                    <img src={Logo} alt="IPRJ" className="w-auto h-16" />
                                </Link>
                            </div>
                            {/* end logo */}

                            {/* button menu */}
                            <div className="flex items-center">
                                <PopoverButton className="w-6 h-6 text-darkblueiprj">
                                    {
                                        openMenu ? (
                                            <X />
                                        ) : (
                                            <Menu />

                                        )
                                    }
                                </PopoverButton>
                            </div>
                            {/* end button menu */}

                            {/* panel menu */}
                            <PopoverPanel as="div" anchor="bottom" className="w-full mt-8 bg-white rounded-b shadow">
                                {({ close }) => (
                                    <div className="container flex flex-col w-full pb-4 space-y-4">
                                        <Link href="/" className="text-sm font-medium" onClick={() => close()}>Home</Link>
                                        <Link href="/programs" className="text-sm font-medium" onClick={() => close()}>Programs</Link>
                                        <Link href="/research-and-publication" className="text-sm font-medium" onClick={() => close()}>Research & Publication</Link>
                                        <Link href="/lecturer" className="text-sm font-medium" onClick={() => close()}>Lecturer</Link>
                                        <Link href="/facility" className="text-sm font-medium" onClick={() => close()}>Facility</Link>
                                        <Link href="/about-us" className="text-sm font-medium" onClick={() => close()}>About Us</Link>
                                        <Link href="/news" className="text-sm font-medium" onClick={() => close()}>News & Event</Link>
                                    </div>
                                )}
                            </PopoverPanel>
                            <PopoverBackdrop className="fixed inset-0" />
                            {/* end panel menu */}
                        </Popover>
                    </div>
                    {/* end header mobile */}
                </div>

                <div className="flex flex-col justify-between h-full overflow-auto">
                    {/* main */}
                    {props.children}
                    {/* end main */}

                    {/* footer */}
                    <div className="mt-20 bg-gray-900">
                        <div className="container py-10">
                            <div className="grid items-center grid-cols-1 gap-8 sm:grid-cols-2">
                                <div className="flex flex-col space-y-2">
                                    <img src={LogoFooter} alt="Logo IPRJ" className="w-32 mx-auto sm:mx-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-center text-white sm:text-left md:text-base">Institut Pendidikan & Riset JEC</p>
                                        <p className="text-sm text-center text-white sm:text-left md:text-base">Jl. Terusan Arjuna Utara No. 1</p>
                                        <p className="text-sm text-center text-white sm:text-left md:text-base">Jakarta Barat - 11520</p>
                                    </div>
                                </div>
                                <div className="flex md:justify-end">
                                    <div className="grid grid-cols-2 gap-4 mx-auto md:mx-0">
                                        <div className="flex flex-col space-y-4">
                                            <Link href="/programs" className="text-sm font-medium text-white">Fellowship</Link>
                                            <Link href="/programs" className="text-sm font-medium text-white">Observership</Link>
                                            <Link href="/programs" className="text-sm font-medium text-white">Resident</Link>
                                            <Link href="/facility" className="text-sm font-medium text-white">Facility</Link>
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <Link href="/programs" className="text-sm font-medium text-white">Curriculum</Link>
                                            <Link href="/lecturer" className="text-sm font-medium text-white">Lecturer</Link>
                                            <Link href="/about-us" className="text-sm font-medium text-white">About Us</Link>
                                            <Link href="/news" className="text-sm font-medium text-white">News & Event</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end footer */}
                </div>
            </div>

            {/* Loading */}
            {
                loading && <Loading />
            }
        </React.Fragment>
    )
}

export default admin