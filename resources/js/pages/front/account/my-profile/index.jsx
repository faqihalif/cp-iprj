import React, { useState } from 'react'

// front
import Front from '@/layout/front/front'
import Account from '@/pages/front/account/index'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

function index(props) {
    // state
    const [submitLoading, setSubmitLoading] = useState(false)

    // toast
    const { toast } = useToast()

    // validation
    const validation = yup.object({
        email: yup.string().email('Invalid email format').required('Required!').nullable('Required!'),
        password: yup.string('Required!').required('Required!').nullable('Required!'),
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    function onSubmit(values) {
        setSubmitLoading(true)
        axios.post(route('auth.login'), values).then(response => {
            console.log(response.data)
            setSubmitLoading(false)
        }).catch(err => {
            toast({
                title: "Invalid Credentials",
                description: err.response.data,
                variant: 'destructive'
            })
            console.log(err.response.data)
            setSubmitLoading(false)
        })
    }

    return (
        <>
            {/* account information */}
            <div>
                <div className="flex items-center justify-between pb-1 lg:pb-4">
                    <div>
                        <p className="text-lg font-bold text-gray-700">My Profile</p>
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fullname</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end">
                                {
                                    submitLoading == true ? (
                                        <Button disabled>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Please wait
                                        </Button>
                                    ) : (
                                        <Button type="submit">Update</Button>
                                    )
                                }
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
            {/* end account information */}

            {/* change password */}
            <div>
                <p className="pb-4 text-xl font-semibold text-gray-700">Change Password</p>
                <div className="w-full max-w-md">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Old Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end">
                                {
                                    submitLoading == true ? (
                                        <Button disabled>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Please wait
                                        </Button>
                                    ) : (
                                        <Button type="submit">Change Password</Button>
                                    )
                                }
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
            {/* end change password */}
        </>
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