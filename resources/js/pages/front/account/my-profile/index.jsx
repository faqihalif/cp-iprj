import React, { useEffect, useState } from 'react'

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

// inertia
import { router } from '@inertiajs/react'

function index(props) {
    // toast
    const { toast } = useToast()

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // validation my profile
    const validationMyProfile = yup.object({
        name: yup.string('Required!').required('Required!').nullable('Required!'),
        email: yup.string().email('Invalid email format').required('Required!').nullable('Required!'),
    }).required()

    // form my profile
    const formMyProfile = useForm({
        resolver: yupResolver(validationMyProfile),
        defaultValues: {
            name: '',
            email: ''
        }
    })

    // submit my profile
    function onSubmitMyProfile(values) {
        router.put(route('myProfile.updateProfileInformation'), values)
    }
    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // validation change password
    const validationChangePassword = yup.object({
        oldPassword: yup.string('Required!').required('Required!').nullable('Required!'),
        newPassword: yup.string('Required!').required('Required!').nullable('Required!')
    }).required()

    // form change password
    const formChangePassword = useForm({
        resolver: yupResolver(validationChangePassword),
        defaultValues: {
            oldPassword: '',
            newPassword: ''
        }
    })

    // submit change password
    function onSubmitChangePassword(values) {
        router.put(route('myProfile.changePassword'), values)
    }
    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

    useEffect(() => {
        formMyProfile.setValue('name', props.user.name)
        formMyProfile.setValue('email', props.user.email)
    }, [])

    return (
        <div className="space-y-10">
            {/* account information */}
            <div>
                <div className="flex items-center justify-between pb-1 lg:pb-4">
                    <div>
                        <p className="text-lg font-bold text-gray-700">My Profile</p>
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <Form key={1} {...formMyProfile}>
                        <form onSubmit={formMyProfile.handleSubmit(onSubmitMyProfile)} className="space-y-4">
                            <FormField
                                control={formMyProfile.control}
                                name="name"
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
                                control={formMyProfile.control}
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
                                <Button type="submit">Update</Button>
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
                    <Form key={2} {...formChangePassword}>
                        <form onSubmit={formChangePassword.handleSubmit(onSubmitChangePassword)} className="space-y-4">
                            <FormField
                                control={formChangePassword.control}
                                name="oldPassword"
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
                                control={formChangePassword.control}
                                name="newPassword"
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
                                <Button type="submit">Change Password</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
            {/* end change password */}
        </div>
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