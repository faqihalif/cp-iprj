import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// shadcn/ui
import DataTable from "@/components/ui/data-table"

function index(props) {
    // Define Column Participants
    const columns = [
        {
            Header: () => "Title",
            accessor: 'title',
        },
        {
            Header: () => "Author",
            accessor: 'author',
        },
        {
            Header: () => "Year",
            accessor: 'year',
        },
        {
            Header: () => "",
            accessor: 'link',
            disableSortBy: true,
            showFilter: false,
            Cell: ({ value }) => (
                <div className="flex items-center justify-center space-x-2">
                    {/* Show */}
                    {
                        value == "" ? (
                            null
                        ) : (
                            <a
                                href={value}
                                className="flex items-center justify-center p-1 text-green-600"
                                target="_blank"
                            >
                                <Eye className="w-5 h-5" />
                            </a>
                        )
                    }
                </div>
            )
        }
    ]

    return (
        <div
            style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "100%", backgroundRepeat: 'no-repeat' }}
        >
            <div className="container py-4 space-y-8">
                {/* title */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-1">
                        <Link href="/" className="text-xs">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <p className="text-xs">Research & Publication</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Research & Publication</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="space-y-8">
                    {/* publication */}
                    <DataTable
                        columns={columns}
                        data={props.data}
                        filterPerColumn
                    >
                    </DataTable>
                    {/* end publication */}
                </div>
                {/* end content */}
            </div>
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