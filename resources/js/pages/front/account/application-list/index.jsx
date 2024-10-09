import React, { useState } from 'react'

// front
import Front from '@/layout/front/front'
import Account from '@/pages/front/account/index'

// lucide icons
import { ChevronRight, PanelLeftOpen } from 'lucide-react'

// inertia
import { Link, usePage } from '@inertiajs/react'

// shadcn/ui
import DataTable from "@/components/ui/data-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"

// dialog body
import NewApplication from './components/new-application'

function index(props) {
    const [showNewApplication, setShowNewApplication] = useState(false)

    console.log(props)

    return (
        <div>
            <div className="flex items-center justify-between pb-4">
                <div>
                    <p className="text-lg font-bold text-gray-700">Application List</p>
                </div>
                <div>
                    <Button type="button" onClick={() => setShowNewApplication(true)}>
                        New Application
                    </Button>
                </div>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Program Category</TableHead>
                            <TableHead>Subspecialties</TableHead>
                            <TableHead>Submit Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            props.application_list.map((v, index) => (
                                <TableRow key={index}>
                                    <TableCell>{v.selected_program[0].category}</TableCell>
                                    <TableCell>{v.selected_program[0].name}</TableCell>
                                    <TableCell>{v.created_at}</TableCell>
                                    <TableCell>
                                        {
                                            v.status == 'Waiting' ? (
                                                <Badge className="bg-blue-600">On Review</Badge>
                                            ) : (
                                                null
                                            )
                                        }
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center p-1 text-green-600"
                                            target="_blank"
                                        >
                                            <PanelLeftOpen className="w-5 h-5" />
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

            {/* select program */}
            {
                showNewApplication && <NewApplication
                    show={showNewApplication}
                    setShow={setShowNewApplication}
                    programApplication={props.program_application}
                />
            }
            {/* end select program */}
        </div>
    )
}

// Render Layout
index.layout = page => {
    return (
        <Front>
            <Account children={page} />
        </Front>
    )
}

export default index