import React from 'react'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function educationalBackground(props) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between space-x-4">
                    <CardTitle className="truncate">{props.data.educational_attainment}</CardTitle>
                    <CardTitle className="truncate">{props.data.year_of_passing}</CardTitle>
                </div>
                <CardDescription className="truncate">{props.data.institution}</CardDescription>
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

export default educationalBackground