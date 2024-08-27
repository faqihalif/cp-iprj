import React from 'react'

// logo
import Logo from "@/images/logo.png"

// inertia
import { Link, usePage } from '@inertiajs/react'

// lucide icon
import { LayoutDashboard, Users } from "lucide-react"

function leftSidebar() {
    const { component } = usePage()

    return (
        <React.Fragment>
            {/* left sidebar */}
            <div className="w-[240px] border-r p-4 overflow-auto bg-white">
                <Link href="/" className="block mt-4 mb-6">
                    <img src={Logo} alt="IPRJ" className="w-32 h-auto mx-auto" />
                </Link>
                <div className="flex flex-col mt-4 space-y-2">
                    <Link href="/admin/dashboard" className={`px-4 py-2 flex items-center font-medium rounded-lg ${component.startsWith('admin/dashboard/') ? 'bg-slate-200 text-slate-900' : 'text-slate-900 hover:bg-slate-200'}`}>
                        <LayoutDashboard className="w-4 h-4 mr-4" />
                        Dashboard
                    </Link>
                    <Link href="/admin/user" className={`px-4 py-2 flex items-center font-medium rounded-lg ${component.startsWith('admin/user/') ? 'bg-slate-200 text-slate-900' : 'text-slate-900 hover:bg-slate-200'}`}>
                        <Users className="w-4 h-4 mr-4" />
                        User
                    </Link>
                </div>
            </div>
            {/* end left sidebar */}
        </React.Fragment>
    )
}

export default leftSidebar