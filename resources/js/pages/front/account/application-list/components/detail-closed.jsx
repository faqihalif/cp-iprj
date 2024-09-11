import React from 'react'

// shadcn/ui
import DialogScroll from "@/components/ui/dialog-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// lucide icons
import { X } from 'lucide-react'

function detailClosed(props) {
    const { size, show, setShow, detail } = props

    return (
        <DialogScroll
            show={show}
            setShow={setShow}
            size={size}
        >
            <Card className="flex flex-col overflow-auto">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Detail Closed</CardTitle>
                        <button className="flex" type="button" onClick={() => setShow(false)}>
                            <X className="w-4 h-4"></X>
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="overflow-auto max-h-[400px] md:max-h-[600px]">
                    <p>{detail}</p>
                </CardContent>
            </Card>
        </DialogScroll>
    )
}

export default detailClosed