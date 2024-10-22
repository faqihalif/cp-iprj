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

function forgotPassword(props) {
    // state
    const [submitLoading, setSubmitLoading] = useState(false)

    // validation
    const validation = yup.object({
        email: yup.string().email('Invalid email format').required('Required!').nullable('Required!'),
    }).required()

    // form
    const form = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            email: '',
        }
    })

    const onSubmit = (values) => {
        router.post(
            route('auth.forgetPassword'),
            values
        )
    }

    return (
        <div
            style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "100%", backgroundRepeat: 'no-repeat' }}
        >
            <div className="w-full px-8 pt-8 space-y-4 2xl:container">
                {/* title */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                        <Link href="/" className="text-xs">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <p className="text-xs">Forget Password</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Forget Password</p>
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
                </div>
                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
forgotPassword.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default forgotPassword