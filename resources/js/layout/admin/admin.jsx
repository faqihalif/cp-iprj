import React, { useEffect, useState } from 'react'

// inertia
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import { Head } from '@inertiajs/react'

// shadcn/ui
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// lucide icon
import { CircleUser, BellIcon } from "lucide-react"

// layout
import LeftSidebar from "./left-sidebar"

// logo
import User from "@/images/user.png"

// loading
import Loading from '@/components/ui/loading'


const admin = props => {
    let { flash } = usePage().props
    const [loading, setLoading] = useState(false)

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
            {/* Setting Meta Content */}
            <Head>
                <meta content="width=1024" initial-scale="1.0" maximum-scale="1" name="viewport" shrink-to-fit="no" />
            </Head>

            <div className="flex w-full h-full overflow-auto">
                {/* left sidebar */}
                <LeftSidebar />
                {/* end left sidebar */}

                {/* content */}
                <div className="flex flex-col flex-1 w-full h-screen min-h-screen overflow-auto bg-slate-100">
                    {/* header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
                        {/* title page */}
                        <div>
                            <p className="text-xl font-semibold">{props.children.props.page}</p>
                        </div>
                        {/* end title page */}

                        {/* menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center">
                                <img src={User} alt="Faqih Alif Fauzi" className="w-8 h-8" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">Faqih Alif Fauzi, S. Kom</p>
                                        <p className="text-xs leading-none text-muted-foreground">Student</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>My Profile</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {/* end menu */}
                    </div>
                    {/* end header */}

                    {/* main content */}
                    {props.children}
                    {/* end main content */}
                </div>
                {/* end content */}
            </div>

            {/* Loading */}
            {
                loading && <Loading />
            }
        </React.Fragment>
    )
}

export default admin