import React, { useEffect, useState } from 'react'

// inertia
import { router } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import { Head } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

// loading
import Loading from '@/components/ui/loading'

// lucide icons
import { Menu as MenuIcon, X } from 'lucide-react'

// headless ui
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"

// components
import UserNav from "./user-nav"

const admin = props => {
    let { flash, user } = usePage().props
    const { toast } = useToast()
    const [showNotification, setShowNotification] = useState(true)

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

    useEffect(() => {
        if (flash.notification != null) {
            toast({
                title: flash.notification.type,
                description: flash.notification.message,
                variant: flash.notification.type == 'Error' ? 'destructive' : 'success',
                duration: 2000
            })
        }
    }, [flash])

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="antialiased bg-white">
                <div className="fixed z-10 w-full bg-white shadow">
                    {/* header desktop */}
                    <div className="hidden lg:flex lg:flex-col">
                        <div className="flex items-center justify-between w-full px-8 py-4 border-b 2xl:container">
                            {/* logo */}
                            <div className="flex items-center">
                                <Link href="/">
                                    <img src="https://inspire.jec.co.id/storage/images/logo-iprj.png" alt="IPRJ" className="w-auto h-16" />
                                </Link>
                            </div>
                            {/* end logo */}

                            {/* menu */}
                            <div className="flex items-center space-x-8">
                                <Input type="text" placeholder="Search Program" className="w-80" />

                                {
                                    user == null ? (
                                        <Link href="/auth/login" className="flex">
                                            <Button className="bg-green-600">
                                                Login/Register
                                            </Button>
                                        </Link>
                                    ) : (
                                        <UserNav user={user} />
                                    )
                                }
                            </div>
                            {/* end menu */}
                        </div>
                        <div className="w-full px-8 2xl:container">
                            {/* menu */}
                            <div className="flex items-center py-4 space-x-8">
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
                    <div className="relative flex flex-col lg:hidden">
                        <Popover as="div" className="container flex items-center justify-between py-3 mx-auto">
                            {({ open }) => (
                                <>
                                    {/* logo */}
                                    <div className="flex items-center">
                                        <Link href="/">
                                            <img src="https://inspire.jec.co.id/storage/images/logo-iprj.png" alt="IPRJ" className="w-auto h-16" />
                                        </Link>
                                    </div>
                                    {/* end logo */}

                                    {/* button menu */}
                                    <div className="flex items-center">
                                        <PopoverButton className="w-6 h-6 text-darkblueiprj">
                                            {
                                                open ? (
                                                    <X />
                                                ) : (
                                                    <MenuIcon />
                                                )
                                            }
                                        </PopoverButton>
                                    </div>
                                    {/* end button menu */}

                                    {/* panel menu */}
                                    <PopoverPanel as="div" anchor="bottom" className="w-full mt-8 bg-white rounded-b shadow">
                                        {({ close }) => (
                                            <div className="container flex flex-col w-full pt-4 pb-4 space-y-4">
                                                <Link href="/" className="text-sm font-medium" onClick={() => close()}>Home</Link>
                                                <Link href="/programs" className="text-sm font-medium" onClick={() => close()}>Programs</Link>
                                                <Link href="/research-and-publication" className="text-sm font-medium" onClick={() => close()}>Research & Publication</Link>
                                                <Link href="/lecturer" className="text-sm font-medium" onClick={() => close()}>Lecturer</Link>
                                                <Link href="/facility" className="text-sm font-medium" onClick={() => close()}>Facility</Link>
                                                <Link href="/about-us" className="text-sm font-medium" onClick={() => close()}>About Us</Link>
                                                <Link href="/news" className="text-sm font-medium" onClick={() => close()}>News & Event</Link>
                                                {
                                                    user == null ? (
                                                        <Link href="/auth/login" className="flex">
                                                            <Button className="bg-green-600">
                                                                Login/Register
                                                            </Button>
                                                        </Link>
                                                    ) : (
                                                        <UserNav user={user} />
                                                    )
                                                }
                                            </div>
                                        )}
                                    </PopoverPanel>
                                    {/* end panel menu */}
                                </>
                            )}
                        </Popover>
                    </div>
                    {/* end header mobile */}
                </div>

                <div className="xl:pt-[134px] pt-[74px] flex flex-col justify-between h-screen">
                    {/* main */}
                    {props.children}
                    {/* end main */}

                    {/* footer */}
                    <div className="mt-20 bg-darkblueiprj">
                        <div className="w-full px-8 py-10 space-y-10 2xl:container">
                            <div className="grid items-center grid-cols-1 gap-8 sm:grid-cols-2">
                                <div className="flex flex-col items-center space-x-4 space-y-2 lg:flex-row">
                                    <img src="https://inspire.jec.co.id/storage/images/logo-footer.png" alt="Logo IPRJ" className="w-32 mx-auto sm:mx-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-center text-white sm:text-left md:text-base">Institut Pendidikan & Riset JEC</p>
                                        <p className="text-sm text-center text-white sm:text-left md:text-base">Jl. Terusan Arjuna Utara No. 1</p>
                                        <p className="text-sm text-center text-white sm:text-left md:text-base">Jakarta Barat - 11520</p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="grid grid-cols-2 gap-4 mx-auto md:mx-0">
                                        <div className="flex flex-col space-y-4">
                                            <Link href="/programs" className="text-sm font-medium text-white">Fellowship</Link>
                                            <Link href="/programs" className="text-sm font-medium text-white">Observership</Link>
                                            <Link href="/programs" className="text-sm font-medium text-white">Resident</Link>
                                            <Link href="/facility" className="text-sm font-medium text-white">Facility</Link>
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <Link href="/research-and-publication" className="text-sm font-medium text-white">Publication</Link>
                                            <Link href="/lecturer" className="text-sm font-medium text-white">Lecturer</Link>
                                            <Link href="/about-us" className="text-sm font-medium text-white">About Us</Link>
                                            <Link href="/news" className="text-sm font-medium text-white">News & Event</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center text-white">© 2024 Institut Pendidikan & Riset JEC</p>
                            </div>
                        </div>
                    </div>
                    {/* end footer */}
                </div>
                <Toaster />
            </div >

            {/* Loading */}
            {
                loading && <Loading />
            }
            {/* end loading */}
        </React.Fragment >
    )
}

export default admin