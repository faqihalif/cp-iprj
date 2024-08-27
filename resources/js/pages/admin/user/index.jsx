import React from 'react'

// layout
import Admin from '@/layout/admin/admin'

// shadcn/ui
import DataTable from "@/components/ui/data-table"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// logo
import User from "@/images/user.png"

// inertia
import { Link } from '@inertiajs/react'

function index(props) {
    const columns = [
        {
            Header: () => "Name",
            accessor: 'name',
        },
        {
            Header: () => "Institution",
            accessor: 'institution',
        },
        {
            Header: () => "Service",
            accessor: 'service',
        },
        {
            Header: () => "Program",
            accessor: 'program',
        },
        {
            Header: () => "End Date",
            accessor: 'end_date',
        },
    ]

    const handleDeleteDataTable = (value) => {
        console.log(value)
    }

    return (
        <React.Fragment>
            {/* main */}
            <div className="w-full h-full p-4 overflow-auto">
                {/* <div className="mb-4">
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
                </div> */}

                <DataTable
                    columns={columns}
                    data={props.employees}
                    download
                    filterPerColumn
                    selectable
                    // approve={handleApproveDataTable}
                    delete={handleDeleteDataTable}
                >
                    <Button>
                        Add Alumni
                    </Button>
                </DataTable>
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