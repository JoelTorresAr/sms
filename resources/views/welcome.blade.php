<!DOCTYPE html>
<html lang="en">

<head>
    <title> {{ config('app.name') }} </title>

    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <!-- Favicon icon -->
    <link rel="icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon">
    {{-- Styles --}}
    <link rel="stylesheet" href="{{ asset('css/plantilla.css') }}">
</head>

<body>
    <div id="app"></div>

    <script src="{{ asset('js/plantilla.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
