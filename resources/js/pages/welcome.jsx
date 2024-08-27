import React from 'react'

// layout
import Admin from '@/layout/admin/admin'

function welcome(props) {
    console.log(props)
    return (
        <React.Fragment>
            {/* main */}
            <div className="w-full h-full px-4 py-2 overflow-auto">
                <div className="mb-2">
                    <p className="text-xl font-semibold text-slate-900">Jadwal</p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                    <div className="w-full h-64 border rounded-lg"></div>
                </div>
            </div>
            {/* end main */}
        </React.Fragment>
    )
}

// Render Layout
welcome.layout = page => {
    return (
        <Admin
            children={page}
        />
    )
}

export default welcome