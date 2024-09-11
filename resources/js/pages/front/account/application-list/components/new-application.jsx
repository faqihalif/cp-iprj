import React, { useState } from 'react'

// Inertia
import { router } from '@inertiajs/react'

// shadcn/ui
import DialogScroll from "@/components/ui/dialog-scroll"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

// lucide icons
import { X } from 'lucide-react'

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

// components
import DetailClosed from "./detail-closed"

function newApplication(props) {
    const { size, show, setShow } = props

    const [showDetailClosed, setShowDetailClosed] = useState(false)
    const [detailClosed, setDetailClosed] = useState('')

    // validation
    const validation = yup.object({
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            program: ''
        }
    })

    const onSubmit = (values) => {
        if (values.program == '') {
            alert('please select the program')
        } else {
            router.post(route('applicationList.newApplication', values))
        }
    }

    const handleShowDetailClosed = (value) => {
        setDetailClosed(value)
        setShowDetailClosed(true)
    }

    return (
        <DialogScroll
            show={show}
            setShow={setShow}
            size={size}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className="flex flex-col overflow-auto">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>New Application</CardTitle>
                                <button className="flex" type="button" onClick={() => setShow(false)}>
                                    <X className="w-4 h-4"></X>
                                </button>
                            </div>
                        </CardHeader>
                        <CardContent className="overflow-auto max-h-[400px] md:max-h-[600px] py-0">
                            <Label>Select Program</Label>
                            <div className="space-y-2">
                                <div>
                                    <Label>Fellowship</Label>
                                    <FormField
                                        control={form.control}
                                        name="program"
                                        render={() => (
                                            <FormItem>
                                                <div className="grid grid-cols-1 gap-2 pb-2 space-y-0 border-b-2 md:grid-cols-2 xl:grid-cols-3">
                                                    {props.programApplication.map((v) => (
                                                        v.category == "Fellowship" && <FormField
                                                            key={v.id}
                                                            control={form.control}
                                                            name="program"
                                                            render={({ field }) => {
                                                                return (
                                                                    v.status == 'open' ? (
                                                                        <FormItem
                                                                            key={v.id}
                                                                            className="p-2 space-y-0 border border-gray-300 rounded-lg"
                                                                        >
                                                                            <div className="flex justify-between space-x-4">
                                                                                <FormLabel className="truncate cursor-pointer">
                                                                                    <p className="text-xs font-semibold text-gray-700 md:text-sm">{v.name}</p>
                                                                                    <p className="text-xs text-gray-500">{v.category}</p>
                                                                                </FormLabel>
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes(v.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, v.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== v.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                    />
                                                                                </FormControl>
                                                                            </div>
                                                                            <div className="flex items-center justify-end space-x-2">
                                                                                <Badge className="bg-blue-600">{v.duration}</Badge>
                                                                                <Badge className="bg-green-600">Active</Badge>
                                                                            </div>
                                                                        </FormItem>
                                                                    ) : (
                                                                        <FormItem
                                                                            key={v.id}
                                                                            className="p-2 space-y-0 border border-gray-300 rounded-lg cursor-pointer"
                                                                            onClick={() => handleShowDetailClosed(v.detail)}
                                                                        >
                                                                            <div className="flex justify-between space-x-4">
                                                                                <FormLabel className="truncate cursor-pointer">
                                                                                    <p className="text-xs font-semibold text-gray-700 md:text-sm">{v.name}</p>
                                                                                    <p className="text-xs text-gray-500">{v.category}</p>
                                                                                </FormLabel>
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes(v.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, v.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== v.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                        disabled
                                                                                    />
                                                                                </FormControl>
                                                                            </div>
                                                                            <div className="flex justify-end">
                                                                                <Badge className="bg-gray-300">Closed</Badge>
                                                                            </div>
                                                                        </FormItem>
                                                                    )
                                                                )
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label>Observership</Label>
                                    <FormField
                                        control={form.control}
                                        name="program"
                                        render={() => (
                                            <FormItem>
                                                <div className="grid grid-cols-1 gap-2 pb-2 space-y-0 border-b-2 md:grid-cols-2 xl:grid-cols-3">
                                                    {props.programApplication.map((v) => (
                                                        v.category == "Observership" && <FormField
                                                            key={v.id}
                                                            control={form.control}
                                                            name="program"
                                                            render={({ field }) => {
                                                                return (
                                                                    v.status == 'open' ? (
                                                                        <FormItem
                                                                            key={v.id}
                                                                            className="p-2 space-y-0 border border-gray-300 rounded-lg"
                                                                        >
                                                                            <div className="flex justify-between space-x-4">
                                                                                <FormLabel className="truncate cursor-pointer">
                                                                                    <p className="text-xs font-semibold text-gray-700 md:text-sm">{v.name}</p>
                                                                                    <p className="text-xs text-gray-500">{v.category}</p>
                                                                                </FormLabel>
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes(v.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, v.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== v.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                    />
                                                                                </FormControl>
                                                                            </div>
                                                                            <div className="flex items-center justify-end space-x-2">
                                                                                <Badge className="bg-blue-600">{v.duration}</Badge>
                                                                                <Badge className="bg-green-600">Active</Badge>
                                                                            </div>
                                                                        </FormItem>
                                                                    ) : (
                                                                        <FormItem
                                                                            key={v.id}
                                                                            className="p-2 space-y-0 border border-gray-300 rounded-lg cursor-pointer"
                                                                            onClick={() => handleShowDetailClosed('')}
                                                                        >
                                                                            <div className="flex justify-between space-x-4">
                                                                                <FormLabel className="truncate cursor-pointer">
                                                                                    <p className="text-xs font-semibold text-gray-700 md:text-sm">{v.name}</p>
                                                                                    <p className="text-xs text-gray-500">{v.category}</p>
                                                                                </FormLabel>
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes(v.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, v.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== v.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                        disabled
                                                                                    />
                                                                                </FormControl>
                                                                            </div>
                                                                            <div className="flex justify-end">
                                                                                <Badge className="bg-gray-300">Closed</Badge>
                                                                            </div>
                                                                        </FormItem>
                                                                    )
                                                                )
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Label>Residency Program</Label>
                                    <FormField
                                        control={form.control}
                                        name="program"
                                        render={() => (
                                            <FormItem>
                                                <div className="grid grid-cols-1 gap-2 pb-2 space-y-0 border-b-2 md:grid-cols-2 xl:grid-cols-3">
                                                    {props.programApplication.map((v) => (
                                                        v.category == "Residency" && <FormField
                                                            key={v.id}
                                                            control={form.control}
                                                            name="program"
                                                            render={({ field }) => {
                                                                return (
                                                                    v.status == 'open' ? (
                                                                        <FormItem
                                                                            key={v.id}
                                                                            className="p-2 space-y-0 border border-gray-300 rounded-lg"
                                                                        >
                                                                            <div className="flex justify-between space-x-4">
                                                                                <FormLabel className="truncate cursor-pointer">
                                                                                    <p className="text-xs font-semibold text-gray-700 md:text-sm">{v.name}</p>
                                                                                    <p className="text-xs text-gray-500">{v.category}</p>
                                                                                </FormLabel>
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes(v.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, v.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== v.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                    />
                                                                                </FormControl>
                                                                            </div>
                                                                            <div className="flex items-center justify-end space-x-2">
                                                                                <Badge className="bg-blue-600">{v.duration}</Badge>
                                                                                <Badge className="bg-green-600">Active</Badge>
                                                                            </div>
                                                                        </FormItem>
                                                                    ) : (
                                                                        <FormItem
                                                                            key={v.id}
                                                                            className="p-2 space-y-0 border border-gray-300 rounded-lg cursor-pointer"
                                                                            onClick={() => handleShowDetailClosed('')}
                                                                        >
                                                                            <div className="flex justify-between space-x-4">
                                                                                <FormLabel className="truncate cursor-pointer">
                                                                                    <p className="text-xs font-semibold text-gray-700 md:text-sm">{v.name}</p>
                                                                                    <p className="text-xs text-gray-500">{v.category}</p>
                                                                                </FormLabel>
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes(v.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, v.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== v.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                        disabled
                                                                                    />
                                                                                </FormControl>
                                                                            </div>
                                                                            <div className="flex justify-end">
                                                                                <Badge className="bg-gray-300">Closed</Badge>
                                                                            </div>
                                                                        </FormItem>
                                                                    )
                                                                )
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end pt-6">
                            <Button type="submit">Submit</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>

            {/* detail closed */}
            {
                showDetailClosed && <DetailClosed
                    show={showDetailClosed}
                    setShow={setShowDetailClosed}
                    size="sm"
                    detail={detailClosed}
                />
            }
            {/* end detail closed */}
        </DialogScroll>
    )
}

export default newApplication