<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('..\resources\css\app.css') }}">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src=" {{ asset('..\resources\js\helpers.js') }} "></script>
    <title>Document</title>
</head>
<body class="flex flex-col">
        <header>
            <a class="text-2xl" href="http://localhost/laravel/tpifutbol/public/">Inicio</a>
        </header>
        <div class="w-full m-auto">
            @yield('content')
        </div>

</body>
</html>