<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        {{-- without clear cache --}}
        <meta http-equiv='cache-control' content='no-cache'>
        <meta http-equiv='expires' content='0'>
        <meta http-equiv='pragma' content='no-cache'>
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
        <script>const global = globalThis;</script>

        <title>JEC Institute for Research & Education</title>

        {{-- vite configuration --}}
        @viteReactRefresh
        @routes
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
