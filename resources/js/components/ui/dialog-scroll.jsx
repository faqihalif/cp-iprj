import React from 'react'

// HeadlessUI
import { Dialog, DialogPanel } from '@headlessui/react'

const DialogScroll = props => {
    const { show, setShow, size } = props

    return (
        <React.Fragment>
            <Dialog as="div" className="relative z-10" open={show} onClose={() => setShow(true)}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                <div className="fixed inset-0">
                    <div className="flex items-center justify-center h-full p-4">
                        <DialogPanel className={`w-full align-middle bg-white shadow-xl rounded-xl ${size == 'xs' ? ('max-w-xs') : size == 'sm' ? ('max-w-sm') : size == 'md' ? ('max-w-md') : size == 'lg' ? ('max-w-lg') : size == 'xl' ? ('max-w-xl') : ('max-w-[1200px]')}`}>
                            {props.children}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    )
}

export default DialogScroll