// TailwindCSS
import '../css/app.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    id: 'app',
    progress: {
        delay: 250,
        color: '#1e3a8a',
    },
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})

