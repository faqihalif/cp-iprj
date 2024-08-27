import React, { useState, useEffect } from 'react'

// logo
import Logo from "@/images/logo.png"

// react hook form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

// shadcn/ui
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

// axios
import axios from "axios"

// lucide icon
import { Loader2 } from "lucide-react"

function login() {
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
        <div className="grid w-full h-screen grid-cols-2">
            {/* left */}
            <div className="flex flex-col justify-between p-16 bg-slate-900">
                <a href="/">
                    <img src={Logo} alt="IPRJ" className="w-20 h-auto" />
                </a>

                <div className="space-y-2">
                    <p className="text-2xl font-semibold text-white">
                        Live as if you were to die tomorrow. Learn as if you were to live forever
                    </p>
                    <p className="text-sm text-white">
                        Mahatma Gandhi
                    </p>
                </div>
            </div>
            {/* end left */}

            {/* right */}
            <div className="flex items-center justify-center">
                <div className="space-y-4 w-80">
                    <div>
                        <p className="text-2xl font-semibold text-center text-slate-900">Login</p>
                        <p className="text-center text-slate-500">Login with the account you registered</p>
                    </div>

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
                        </form>
                    </Form>
                </div>
            </div>
            {/* end right */}
        </div>
    )
}

export default login