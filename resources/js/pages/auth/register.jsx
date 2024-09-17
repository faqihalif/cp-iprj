import React, { useState } from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'
import { router } from '@inertiajs/react'

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

// lucide icon
import { Loader2 } from "lucide-react"

function register(props) {
    // state
    const [submitLoading, setSubmitLoading] = useState(false)
    
    // validation
    const validation = yup.object({
        name: yup.string('Required!').required('Required!').nullable('Required!'),
        email: yup.string().email('Invalid email format').required('Required!').nullable('Required!'),
        password: yup.string('Required!').required('Required!').nullable('Required!'),
        confirmationPassword: yup.string('Required!').required('Required!').nullable('Required!').oneOf([yup.ref("password")], "Passwords do not match"),
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmationPassword: ''
        }
    })

    const onSubmit = (values) => {
        router.post(
            route('auth.register'),
            values
        )
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
                        <p className="text-xs">Register</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Register</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="w-full max-w-xs mx-auto space-y-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fullname</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="text" autoComplete='off' />
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
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmationPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password Confirmation</FormLabel>
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
                                        <Button type="submit">Register</Button>
                                    )
                                }
                            </div>
                            <div className="flex flex-col items-center justify-between pt-4">
                                <div>
                                    <Link href={route('auth.index')} className="text-sm font-semibold text-blue-600">Have account? Login here</Link>
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
register.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default register