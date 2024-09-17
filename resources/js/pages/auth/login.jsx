import React, { useState } from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

// axios
import axios from "axios"

// lucide icon
import { Loader2 } from "lucide-react"

function login(props) {
    // state
    const [submitLoading, setSubmitLoading] = useState(false)

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

    const onSubmit = (values) => {
        setSubmitLoading(true)
        axios.post(route('auth.login'), values).then(response => {
            toast({
                title: "Account not found",
                // description: err.response.data,
                variant: 'destructive'
            })
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
        <div
            style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "100%", backgroundRepeat: 'no-repeat' }}
        >
            <div className="container py-4 space-y-8">
                {/* title */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-1">
                        <Link href="/" className="text-xs">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <p className="text-xs">Login</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Login</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="w-full max-w-xs mx-auto space-y-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" autoComplete='off' />
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
                                        <Button type="submit">Login</Button>
                                    )
                                }
                            </div>
                            <div className="flex flex-col items-center justify-between pt-4">
                                <div>
                                    <Link href={route('auth.register.index')} className="text-sm font-semibold text-blue-600">Doesn't have account? Register here</Link>
                                </div>
                                <div>
                                    <Link className="text-sm font-semibold text-blue-600">Forgot password? Click here</Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
login.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default login