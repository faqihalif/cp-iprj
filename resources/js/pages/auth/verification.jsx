import React from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// emailt sent
import EmailSent from '@/images/email-sent.png'


function verification(props) {
    return (
        <div
            style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: "100%", backgroundRepeat: 'no-repeat' }}
        >
            <div className="w-full px-8 pt-8 space-y-4 2xl:container">
                {/* title */}
                {/* <div className="space-y-8">
                    <div className="flex items-center space-x-1">
                        <Link href="/" className="text-xs">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                        <p className="text-xs">Lecturer</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Lecturer</p>
                </div> */}
                {/* end title */}

                {/* content */}
                <div className="space-y-8">
                    <div className="py-4 space-y-4">
                        <div className="max-w-screen-lg mx-auto space-y-2">
                            <p className="text-xl font-semibold text-center text-gray-700">
                                Email Verification Sent
                            </p>
                        </div>
                        <img src={EmailSent} alt="Under Construction" className="mx-auto max-w-20" />
                        <div className="flex justify-center max-w-xl mx-auto">
                            <p className="text-center text-gray-700">
                                We have sent a verification email to [user@example.com]. Please check your inbox (and your spam/junk folder) and follow the instructions in the email to verify your account.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
verification.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default verification