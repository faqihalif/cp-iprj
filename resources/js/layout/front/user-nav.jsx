import React from 'react'

// shadcn/ui
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

// user image
import User from '@/images/user.png'

// inertia
import { Link } from '@inertiajs/react'

function userNav(props) {
    const handleLogout = () => {

    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={User} alt={props.user.name} />
                        <AvatarFallback>{props.user.name[0]}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{props.user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {props.user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="flex p-0">
                    <Link href="/my-profile" className="w-full py-1.5 px-2">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="flex p-0 focus:bg-red-400 focus:text-white">
                    <Link
                        href={route('auth.logout')}
                        className="w-full py-1.5 px-2"
                        method="get"
                        as="button"
                    >
                        Log out
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default userNav