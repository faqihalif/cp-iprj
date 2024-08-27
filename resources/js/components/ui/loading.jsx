import React from 'react'
import Lottie from "lottie-react"
import HorizontalAnimation from '@/lottie/horizontal-animation.json'

const Loading = () => {
    return (
        <React.Fragment>
            <div className="absolute inset-0 z-50">
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                <div className="flex items-center justify-center min-h-full">
                    <Lottie 
                        animationData={HorizontalAnimation}
                        style={{
                            height: 360
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loading