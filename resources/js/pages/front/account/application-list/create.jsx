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
import { Link, router } from '@inertiajs/react'

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
        application_letter: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        cv: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        kk_ktp: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        kta_id: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        npwp: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        gp_specialist_diplomas: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        str: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        sip: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        photo: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        certificate_competence_collegium: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        logbook: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        pns_last_decree: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
        letter_of_recommendation: yup.mixed().required('Required!').test('name', 'Required!', value => {
            return value != '' && value.length != 0
        }),
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
            prp_argon_equipment: '',
            oct_equipment: '',
            str_kt_medical_retina: '',
            vitrectomy_equipment: '',
            practice_area_plan: '',
            certificate_agree_take_retina_fellowship: '',
            certificate_laser_oct: '',
            certificate_laser_vitrectomy: '',
            application_letter: '',
            cv: '',
            kk_ktp: '',
            kta_id: '',
            npwp: '',
            gp_specialist_diplomas: '',
            str: '',
            sip: '',
            photo: '',
            certificate_competence_collegium: '',
            logbook: '',
            pns_last_decree: '',
            letter_of_recommendation: '',
        }
    })

    const onSubmit = (values) => {
        if (educationalBackgrounds.length == 0 || workExperiences.length == 0) {
            alert('Please input your educational background and work experience')
        } else {
            let confirmation = confirm('Are you sure want to apply this program?')
            if (confirmation) {
                if (selectedProgram[0]?.name == 'Medical Retina') {
                    let data = {
                        selected_program: selectedProgram,
                        fullname: values.fullname,
                        gender: values.gender,
                        date_of_birth: values.date_of_birth,
                        address: values.address,
                        email: values.email,
                        phone_number: values.phone_number,
                        educational_backgrounds: educationalBackgrounds,
                        work_experiences: workExperiences,
                        requirements: {
                            prp_argon_equipment: values.prp_argon_equipment,
                            oct_equipment: values.oct_equipment,
                            practice_area_plan: values.practice_area_plan,
                            certificate_agree_take_retina_fellowship: values.certificate_agree_take_retina_fellowship,
                            certificate_laser_oct: values.certificate_laser_oct,
                            application_letter: values.application_letter,
                            cv: values.cv,
                            kk_ktp: values.kk_ktp,
                            kta_id: values.kta_id,
                            npwp: values.npwp,
                            gp_specialist_diplomas: values.gp_specialist_diplomas,
                            str: values.str,
                            sip: values.sip,
                            photo: values.photo,
                            certificate_competence_collegium: values.certificate_competence_collegium,
                            logbook: values.logbook,
                            pns_last_decree: values.pns_last_decree,
                            letter_of_recommendation: values.letter_of_recommendation,
                        }
                    }
                    // router.post(route('applicationList.store', data))
                    console.log(data)
                } else if (selectedProgram[0]?.name == 'Surgical Retina') {
                    let data = {
                        selected_program: selectedProgram,
                        fullname: values.fullname,
                        gender: values.gender,
                        date_of_birth: values.date_of_birth,
                        address: values.address,
                        email: values.email,
                        phone_number: values.phone_number,
                        educational_backgrounds: educationalBackgrounds,
                        work_experiences: workExperiences,
                        requirements: {
                            str_kt_medical_retina: values.str_kt_medical_retina,
                            vitrectomy_equipment: values.vitrectomy_equipment,
                            practice_area_plan: values.practice_area_plan,
                            certificate_agree_take_retina_fellowship: values.certificate_agree_take_retina_fellowship,
                            certificate_laser_vitrectomy: values.certificate_laser_vitrectomy,
                            application_letter: values.application_letter,
                            cv: values.cv,
                            kk_ktp: values.kk_ktp,
                            kta_id: values.kta_id,
                            npwp: values.npwp,
                            gp_specialist_diplomas: values.gp_specialist_diplomas,
                            str: values.str,
                            sip: values.sip,
                            photo: values.photo,
                            certificate_competence_collegium: values.certificate_competence_collegium,
                            logbook: values.logbook,
                            pns_last_decree: values.pns_last_decree,
                            letter_of_recommendation: values.letter_of_recommendation,
                        }
                    }
                    // router.post(route('applicationList.store', data))
                    console.log(data)
                } else {
                    let data = {
                        selected_program: selectedProgram,
                        fullname: values.fullname,
                        gender: values.gender,
                        date_of_birth: values.date_of_birth,
                        address: values.address,
                        email: values.email,
                        phone_number: values.phone_number,
                        educational_backgrounds: educationalBackgrounds,
                        work_experiences: workExperiences,
                        requirements: {
                            application_letter: values.application_letter,
                            cv: values.cv,
                            kk_ktp: values.kk_ktp,
                            kta_id: values.kta_id,
                            npwp: values.npwp,
                            gp_specialist_diplomas: values.gp_specialist_diplomas,
                            str: values.str,
                            sip: values.sip,
                            photo: values.photo,
                            certificate_competence_collegium: values.certificate_competence_collegium,
                            logbook: values.logbook,
                            pns_last_decree: values.pns_last_decree,
                            letter_of_recommendation: values.letter_of_recommendation,
                        }
                    }
                    // router.post(route('applicationList.store', data))
                    console.log(data)
                }
            }
        }
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

    const handleUploadFile = () => {
        console.log(value)
    }

    useEffect(() => {
        setSelectedProgram(props.program)
    }, [])

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

                        {/* requirements */}
                        {
                            selectedProgram[0]?.name == 'Medical Retina' ? (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Requirements</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="prp_argon_equipment"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Does the hospital/clinic have laser PRP/ARGON equipment?</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex items-center space-x-4"
                                                        >
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="ya" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    Ya
                                                                </FormLabel>
                                                            </FormItem>
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="tidak" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    Tidak
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
                                            name="oct_equipment"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Does the hospital/clinic have OCT equipment?</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex items-center space-x-4"
                                                        >
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="ya" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    Ya
                                                                </FormLabel>
                                                            </FormItem>
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="tidak" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    Tidak
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
                                            name="practice_area_plan"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Practice Area Plan after Retina Fellowship (City / Regency / Province)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_agree_take_retina_fellowship"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate from employer how long you have worked and agree to take Retina Fellowship</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_laser_oct"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate of Availability of laser & OCT equipment</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="application_letter"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Application letter to Director of Development and Education</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="cv"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Curriculum Vitae</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="kk_ktp"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Family Card (KK) and Identity Card (KTP)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="kta_id"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">IDI KTA</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="npwp"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">NPWP</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="gp_specialist_diplomas"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">General practitioner and specialist diplomas</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="str"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Registration Certificate (STR)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="sip"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Practice License (SIP)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="photo"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Photo Pass (Formal)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_competence_collegium"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate of Competence from Collegium</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="logbook"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Logbook of the number of operations performed</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="pns_last_decree"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">For civil servants: Photo Copy of Last Decree and Certificate from Direct Supervisor</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="letter_of_recommendation"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Letter of recommendation from the Director of the place of work</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>
                            ) : selectedProgram[0]?.name == 'Surgical Retina' ? (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Requirements</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="str_kt_medical_retina"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">STR KT Medical Retina?</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="vitrectomy_equipment"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Does the hospital/clinic have vitrectomy equipment?</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex items-center space-x-4"
                                                        >
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="ya" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    Ya
                                                                </FormLabel>
                                                            </FormItem>
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="tidak" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    Tidak
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
                                            name="practice_area_plan"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Practice Area Plan after Retina Fellowship (City / Regency / Province)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_agree_take_retina_fellowship"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate from employer how long you have worked and agree to take Retina Fellowship</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_laser_vitrectomy"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate of Availability of laser & vitrectomy</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="application_letter"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Application letter to Director of Development and Education</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="cv"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Curriculum Vitae</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="kk_ktp"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Family Card (KK) and Identity Card (KTP)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="kta_id"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">IDI KTA</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="npwp"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">NPWP</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="gp_specialist_diplomas"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">General practitioner and specialist diplomas</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="str"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Registration Certificate (STR)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="sip"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Practice License (SIP)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="photo"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Photo Pass (Formal)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_competence_collegium"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate of Competence from Collegium</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="logbook"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Logbook of the number of operations performed</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="pns_last_decree"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">For civil servants: Photo Copy of Last Decree and Certificate from Direct Supervisor</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="letter_of_recommendation"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Letter of recommendation from the Director of the place of work</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>
                            ) : (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Requirements</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="application_letter"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Application letter to Director of Development and Education</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="cv"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Curriculum Vitae</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="kk_ktp"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Family Card (KK) and Identity Card (KTP)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="kta_id"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">IDI KTA</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="npwp"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">NPWP</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="gp_specialist_diplomas"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">General practitioner and specialist diplomas</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="str"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Registration Certificate (STR)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="sip"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Practice License (SIP)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="photo"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Photo Pass (Formal)</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="certificate_competence_collegium"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Certificate of Competence from Collegium</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="logbook"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Logbook of the number of operations performed</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="pns_last_decree"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">For civil servants: Photo Copy of Last Decree and Certificate from Direct Supervisor</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="letter_of_recommendation"
                                            render={({ field }) => (
                                                <FormItem className="grid items-center grid-cols-1 gap-1 md:grid-cols-7">
                                                    <FormLabel className="col-span-5">Letter of recommendation from the Director of the place of work</FormLabel>
                                                    <FormControl className="col-span-2">
                                                        <Input type="file" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>
                            )
                        }
                        {/* end requirements */}

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