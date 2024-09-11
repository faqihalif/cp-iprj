import React from 'react'

// shadcn/ui
import DialogScroll from "@/components/ui/dialog-scroll"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

// lucide icons
import { X } from 'lucide-react'

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

function educationalBackgroundCreate(props) {
    const { size, show, setShow, educationalBackgrounds, setEducationalBackgrounds } = props

    // validation
    const validation = yup.object({
        educational_attainment: yup.string('Required!').required('Required!').nullable('Required!'),
        institution: yup.string('Required!').required('Required!').nullable('Required!'),
        year_of_passing: yup.string('Required!').required('Required!').nullable('Required!'),
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            educational_attainment: '',
            institution: '',
            year_of_passing: '',
        }
    })

    const onSubmit = (values) => {
        let data = {
            id: Math.floor(Math.random() * 100),
            educational_attainment: values.educational_attainment,
            institution: values.institution,
            year_of_passing: values.year_of_passing,
        }
        setEducationalBackgrounds([...educationalBackgrounds, data])
        setShow(false)
    }

    return (
        <DialogScroll
            show={show}
            setShow={setShow}
            size={size}
        >
            <Card className="flex flex-col overflow-auto">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Add Educational Background</CardTitle>
                        <button className="flex" type="button" onClick={() => setShow(false)}>
                            <X className="w-4 h-4"></X>
                        </button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 overflow-auto max-h-[400px] md:max-h-[600px] lg:max-h-[850px]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="educational_attainment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Educational Attainment</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="institution"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Institution</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="year_of_passing"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Year of passing</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end">
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </DialogScroll>
    )
}

export default educationalBackgroundCreate