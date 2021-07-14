<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <link rel="stylesheet" class="js-stylesheet" id="js-stylesheet" href="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

<body>



<div class="wrapper" id="app">
    @include('layouts.partials.navbar')

    <div class="main">
        @include('layouts.partials.topnav')
        <main class="content">
            @yield('content')
        </main>
    </div>

</div>

<script src="{{mix('js/app.js')}}"></script>
<script src="{{asset('js/settings.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>


</body>
</html>