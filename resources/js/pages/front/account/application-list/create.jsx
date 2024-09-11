import React, { useState, useEffect } from 'react'

// front
import Front from '@/layout/front/front'
import Account from '@/pages/front/account/index'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

// lucide icons
import { ChevronRight, ArrowLeft, SquarePlus } from 'lucide-react'

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

// inertia
import { Link } from '@inertiajs/react'

// components
import EducationalBackground from "./components/educational-background"
import EducationalBackgroundCreate from "./components/educational-background-create"
import EducationalBackgroundEdit from "./components/educational-background-edit"

import WorkExperience from "./components/work-experience"
import WorkExperienceCreate from "./components/work-experience-create"
import WorkExperienceEdit from "./components/work-experience-edit"

function create(props) {
    // state
    const [submitLoading, setSubmitLoading] = useState(false)
    const [selectedProgram, setSelectedProgram] = useState([])
    const [educationalBackgrounds, setEducationalBackgrounds] = useState([])
    const [educationalBackground, setEducationalBackground] = useState([])
    const [showEducationalBackgroundCreate, setShowEducationalBackgroundCreate] = useState(false)
    const [showEducationalBackgroundEdit, setShowEducationalBackgroundEdit] = useState(false)
    const [workExperiences, setWorkExperiences] = useState([])
    const [workExperience, setWorkExperience] = useState([])
    const [showWorkEXperienceCreate, setShowWorkEXperienceCreate] = useState(false)
    const [showWorkEXperienceEdit, setShowWorkEXperienceEdit] = useState(false)

    // toast
    const { toast } = useToast()

    // validation
    const validation = yup.object({
        fullname: yup.string('Required!').required('Required!').nullable('Required!'),
        gender: yup.string('Required!').required('Required!').nullable('Required!'),
        date_of_birth: yup.string('Required!').required('Required!').nullable('Required!'),
        address: yup.string('Required!').required('Required!').nullable('Required!'),
        email: yup.string().email('Invalid email format').required('Required!').nullable('Required!'),
        phone_number: yup.string('Required!').required('Required!').nullable('Required!'),
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            fullname: '',
            gender: '',
            date_of_birth: '',
            address: '',
            email: '',
            phone_number: '',
        }
    })

    const onSubmit = (values) => {
        let data = {
            fullname: values.fullname,
            gender: values.gender,
            date_of_birth: values.date_of_birth,
            address: values.address,
            email: values.email,
            phone_number: values.phone_number,
            educational_backgrounds: educationalBackgrounds,
            work_experiences: workExperiences,
        }
        console.log(data)
    }

    const handleEditEducationalBackground = value => {
        let a = educationalBackgrounds.find(v => {
            return value == v.id
        })

        setEducationalBackground(a)
        setShowEducationalBackgroundEdit(true)
    }

    const handleDeleteEducationBackground = value => {
        let a = educationalBackgrounds.filter(v => {
            return value != v.id
        })

        setEducationalBackgrounds(a)
    }

    const handleEditWorkExperience = value => {
        let a = workExperiences.find(v => {
            return value == v.id
        })

        setWorkExperience(a)
        setShowWorkEXperienceEdit(true)
    }

    const handleDeleteWorkExperience = value => {
        let a = workExperiences.filter(v => {
            return value != v.id
        })

        setWorkExperiences(a)
    }

    useEffect(() => {
        setSelectedProgram(props.program)
    }, [])

    console.log(props)

    return (
        <div>
            <div className="flex items-center justify-between pb-4">
                <Link href={route('applicationList.index')} className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4 text-gray-700" />
                    <p className="text-lg font-bold text-gray-700">Application List</p>
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                    <p className="text-lg font-bold text-gray-700">New Application</p>
                </Link>
            </div>
            <div className="space-y-4">
                {/* form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* selected program */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Selected Program</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    selectedProgram.length > 0 ? (
                                        selectedProgram.map((v, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <div className="flex flex-col space-y-2">
                                                        <CardTitle className="truncate">{v.name}</CardTitle>
                                                        <p className="text-sm font-semibold text-gray-500">{v.category}</p>
                                                    </div>
                                                    <div className="flex items-center justify-end">
                                                        <Badge className="bg-blue-600">{v.duration}</Badge>
                                                    </div>
                                                </CardHeader>
                                            </Card>
                                        ))
                                    ) : (
                                        null
                                    )
                                }
                            </CardContent>
                        </Card>
                        {/* end selected program */}

                        {/* personal information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                            <FormLabel>Fullname</FormLabel>
                                            <FormControl className="col-span-4">
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                            <FormLabel>Gender</FormLabel>
                                            <FormControl className="col-span-4">
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex items-center space-x-4"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="male" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Male
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="female" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Female
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="date_of_birth"
                                    render={({ field }) => (
                                        <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                            <FormLabel>Date of Birth</FormLabel>
                                            <FormControl className="col-span-2">
                                                <Input {...field} type="date" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                            <FormLabel>Address</FormLabel>
                                            <FormControl className="col-span-4">
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl className="col-span-4">
                                                <Input {...field} type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone_number"
                                    render={({ field }) => (
                                        <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl className="col-span-4">
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                        {/* end personal information */}

                        {/* educational background */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Educational Background</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    educationalBackgrounds.length > 0 ? (
                                        educationalBackgrounds.map((v, index) => (
                                            <EducationalBackground key={index} data={v} edit={handleEditEducationalBackground} delete={handleDeleteEducationBackground} />
                                        ))
                                    ) : (
                                        null
                                    )
                                }
                                <Button className="self-center" type="button" onClick={() => setShowEducationalBackgroundCreate(true)}>
                                    Add Educational Background
                                </Button>
                            </CardContent>
                        </Card>
                        {/* end educational background */}

                        {/* work experience */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Work Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    workExperiences.length > 0 ? (
                                        workExperiences.map((v, index) => (
                                            <WorkExperience key={index} data={v} edit={handleEditWorkExperience} delete={handleDeleteWorkExperience} />
                                        ))
                                    ) : (
                                        null
                                    )
                                }
                                <Button className="self-center" type="button" onClick={() => setShowWorkEXperienceCreate(true)}>
                                    Add Work Experience
                                </Button>
                            </CardContent>
                        </Card>
                        {/* end work experience */}

                        <div className="flex justify-end">
                            {
                                submitLoading == true ? (
                                    <Button disabled>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button type="submit">Submit</Button>
                                )
                            }
                        </div>
                    </form>
                </Form>
                {/* end form */}
            </div>

            {/* educational backgrounds create */}
            {
                showEducationalBackgroundCreate && <EducationalBackgroundCreate
                    show={showEducationalBackgroundCreate}
                    setShow={setShowEducationalBackgroundCreate}
                    size="sm"
                    educationalBackgrounds={educationalBackgrounds}
                    setEducationalBackgrounds={setEducationalBackgrounds}
                />
            }
            {/* educational backgrounds create */}

            {/* educational backgrounds edit */}
            {
                showEducationalBackgroundEdit && <EducationalBackgroundEdit
                    show={showEducationalBackgroundEdit}
                    setShow={setShowEducationalBackgroundEdit}
                    size="sm"
                    educationalBackground={educationalBackground}
                    educationalBackgrounds={educationalBackgrounds}
                    setEducationalBackgrounds={setEducationalBackgrounds}
                />
            }
            {/* educational backgrounds edit */}

            {/* work experience create */}
            {
                showWorkEXperienceCreate && <WorkExperienceCreate
                    show={showWorkEXperienceCreate}
                    setShow={setShowWorkEXperienceCreate}
                    size="sm"
                    workExperiences={workExperiences}
                    setWorkExperiences={setWorkExperiences}
                />
            }
            {/* work experience create */}

            {/* work experience edit */}
            {
                showWorkEXperienceEdit && <WorkExperienceEdit
                    show={showWorkEXperienceEdit}
                    setShow={setShowWorkEXperienceEdit}
                    size="sm"
                    workExperience={workExperience}
                    workExperiences={workExperiences}
                    setWorkExperiences={setWorkExperiences}
                />
            }
            {/* work experience edit */}
        </div>
    )
}

// Render Layout
create.layout = page => {
    return (
        <Front>
            <Account children={page} />
        </Front>
    )
}

export default create