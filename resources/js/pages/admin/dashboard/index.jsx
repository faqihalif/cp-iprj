import React from 'react'

// layout
import Admin from '@/layout/admin/admin'

// shadcn/ui
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"

// inertia
import { Link } from '@inertiajs/react'

function index(props) {
    return (
        <React.Fragment>
            {/* main */}
            <div className="w-full h-full p-4 overflow-auto">
                <div className="mb-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link href="/">User</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <Link href="/components">Components</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                </div>
            </div>
            {/* end main */}
        </React.Fragment>
    )
}

// Render Layout
index.layout = page => {
    return (
        <Admin
            children={page}
        />
    )
}

export default index