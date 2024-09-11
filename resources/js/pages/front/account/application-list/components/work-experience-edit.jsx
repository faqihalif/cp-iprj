import React, { useEffect } from 'react'

// shadcn/ui
import DialogScroll from "@/components/ui/dialog-scroll"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

// lucide icons
import { X } from 'lucide-react'

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

function workExperience(props) {
    const { size, show, setShow, workExperience, workExperiences, setWorkExperiences } = props

    // validation
    const validation = yup.object({
        job_title: yup.string('Required!').required('Required!').nullable('Required!'),
        from: yup.string('Required!').required('Required!').nullable('Required!'),
        to: yup.string('Required!').required('Required!').nullable('Required!'),
        company: yup.string('Required!').required('Required!').nullable('Required!'),
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            id: '',
            job_title: '',
            from: '',
            to: '',
            company: '',
        }
    })

    const onSubmit = (values) => {
        let data = workExperiences.map(v => {
            if (v.id == values.id) {
                return {
                    ...workExperience,
                    id: values.id,
                    job_title: values.job_title,
                    from: values.from,
                    to: values.to,
                    company: values.company,
                }
            }

            return v
        })
        setWorkExperiences(data)
        setShow(false)
    }

    useEffect(() => {
        form.setValue('id', workExperience.id)
        form.setValue('job_title', workExperience.job_title)
        form.setValue('from', workExperience.from)
        form.setValue('to', workExperience.to)
        form.setValue('company', workExperience.company)
    }, [])

    return (
        <DialogScroll
            show={show}
            setShow={setShow}
            size={size}
        >
            <Card className="flex flex-col overflow-auto">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Edit Work Experience</CardTitle>
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
                                name="job_title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="from"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>From (year)</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="to"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>To (year)</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company</FormLabel>
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

export default workExperience