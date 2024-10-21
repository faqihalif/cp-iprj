import React, { useState } from 'react'

// front
import Front from '@/layout/front/front'

// inertia
import { Link } from '@inertiajs/react'

// lucide icons
import { ChevronRight, Eye } from 'lucide-react'

// background pattern
import BackgroundPattern from '@/images/background.png'

// react grid gallery
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"

// react lightbox
import "react-image-lightbox/style.css"

function index(props) {
    const images = [
        {
            src: "../storage/images/facility/lasik_4.jpg",
            original: "../storage/images/facility/lasik_4.jpg",
        },
        {
            src: "../storage/images/facility/ot_room3.jpg",
            original: "../storage/images/facility/ot_room3.jpg",
        },
        {
            src: "../storage/images/facility/cdc.jpg",
            original: "../storage/images/facility/cdc.jpg",
        },
        {
            src: "../storage/images/facility/lasik_2.jpg",
            original: "../storage/images/facility/lasik_2.jpg",
        },
        {
            src: "../storage/images/facility/ot_room.jpg",
            original: "../storage/images/facility/ot_room.jpg",
        },
        {
            src: "../storage/images/facility/lasik_3.jpg",
            original: "../storage/images/facility/lasik_3.jpg",
        },
        {
            src: "../storage/images/facility/ot_room_2.jpg",
            original: "../storage/images/facility/ot_room_2.jpg",
        },
        {
            src: "../storage/images/facility/cesc.jpg",
            original: "../storage/images/facility/cesc.jpg",
        },
        {
            src: "../storage/images/facility/ot_room3.jpg",
            original: "../storage/images/facility/ot_room3.jpg",
        },
    ]

    const [index, setIndex] = useState(-1)

    const currentImage = images[index]
    const nextIndex = (index + 1) % images.length
    const nextImage = images[nextIndex] || currentImage
    const prevIndex = (index + images.length - 1) % images.length
    const prevImage = images[prevIndex] || currentImage

    const handleClick = (index, images) => setIndex(index)
    const handleClose = () => setIndex(-1)
    const handleMovePrev = () => setIndex(prevIndex)
    const handleMoveNext = () => setIndex(nextIndex)


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
                        <p className="text-xs">Facility</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-700">Facility</p>
                </div>
                {/* end title */}

                {/* content */}
                <div className="space-y-8">
                    <Gallery
                        images={images}
                        onClick={handleClick}
                        enableImageSelection={false}
                    />
                    {!!currentImage && (
                        /* @ts-ignore */
                        <Lightbox
                            mainSrc={currentImage.original}
                            mainSrcThumbnail={currentImage.src}
                            nextSrc={nextImage.original}
                            nextSrcThumbnail={nextImage.src}
                            prevSrc={prevImage.original}
                            prevSrcThumbnail={prevImage.src}
                            onCloseRequest={handleClose}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}
                </div>
                {/* end content */}
            </div>
        </div>
    )
}

// Render Layout
index.layout = page => {
    return (
        <Front
            children={page}
        />
    )
}

export default index