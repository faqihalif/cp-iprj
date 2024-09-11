import React from 'react'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function workExperience(props) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between space-x-4">
                    <CardTitle className="truncate">{props.data.job_title}</CardTitle>
                    <CardTitle className="truncate">{props.data.from} - {props.data.to}</CardTitle>
                </div>
                <CardDescription className="truncate">{props.data.company}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-end space-x-4">
                <Button variant="secondary" type="button" onClick={() => props.edit(props.data.id)}>
                    Edit
                </Button>
                <Button variant="destructive" type="button" onClick={() => props.delete(props.data.id)}>
                    Delete
                </Button>
            </CardContent>
        </Card>
    )
}

export default workExperience