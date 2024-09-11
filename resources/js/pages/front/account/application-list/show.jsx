import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link, usePage } from '@inertiajs/react'

// lucide icons
import { ChevronRight } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// headless ui
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

// shadcn/ui
import DataTable from "@/components/ui/data-table"

function show(props) {
    const { component } = usePage()

    // Define Column Participants
    const columns = [
        {
            Header: () => "Program",
            accessor: 'program',
        },
        {
            Header: () => "Submit Date",
            accessor: 'submit_date',
        },
        {
            Header: () => "Status",
            accessor: 'status',
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
                        <p className="text-xs">Application List</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Application List</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="flex flex-col space-y-4 lg:w-auto lg:space-x-4 lg:flex-row lg:space-y-0">
                    <div className="flex flex-col self-start w-full p-2 space-y-1 bg-gray-200 rounded lg:w-auto">
                        <Link href="/my-profile" className="px-3 py-1 text-sm font-semibold text-center text-gray-700 rounded">
                            My Profile
                        </Link>
                        <Link href="/application-list" className="px-3 py-1 text-sm font-semibold text-center text-gray-700 bg-white rounded shadow">
                            Application List
                        </Link>
                    </div>
                    <div className="flex-1 w-full lg:pl-4">
                        <TabGroup className="w-full space-y-4">
                            <TabList className="flex w-full grid-cols-4 gap-4">
                                <Tab as="div" className="flex items-center justify-center w-full">
                                    <Link href="#" className="w-full p-4 text-sm font-semibold text-gray-700 bg-white border rounded-lg border-gray-150">
                                        <div className="flex-grow w-full my-2 border-t-4 border-blue-600 rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-semibold text-green-600">STEP 1</p>
                                        </div>
                                        Personal Information
                                    </Link>
                                </Tab>
                                <Tab as="div" className="flex items-center justify-center w-full">
                                    <Link href="#" className="w-full p-4 text-sm font-semibold text-gray-400 bg-white border rounded-lg border-gray-150">
                                        <div className="flex-grow w-full my-2 border-t-4 border-blue-200 rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-semibold text-green-300">STEP 2</p>
                                        </div>
                                        Select Program
                                    </Link>
                                </Tab>
                                <Tab as="div" className="flex items-center justify-center w-full">
                                    <Link href="#" className="w-full p-4 text-sm font-semibold text-gray-400 bg-white border rounded-lg border-gray-150">
                                        <div className="flex-grow w-full my-2 border-t-4 border-blue-200 rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-semibold text-green-300">STEP 3</p>
                                        </div>
                                        Requirement Files
                                    </Link>
                                </Tab>
                                <Tab as="div" className="flex items-center justify-center w-full">
                                    <Link href="#" className="w-full p-4 text-sm font-semibold text-gray-400 bg-white border rounded-lg border-gray-150">
                                        <div className="flex-grow w-full my-2 border-t-4 border-blue-200 rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-semibold text-green-300">STEP 4</p>
                                        </div>
                                        Schedule Program
                                    </Link>
                                </Tab>
                            </TabList>
                            <TabPanels>
                                {props.children}
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
show.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default show