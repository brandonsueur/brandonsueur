<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8" />

        <meta http-equiv="expires" content="0" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Content SEO -->
        <meta name="subject" content="website" />
        <meta name="description" content="{{ $ogdescription ?? $description ?? "Je conçois de jolis sites web pour agences et particuliers ! Ma curiosité et ma motivation pour le monde du web font de moi quelqu’un de passioné et de travailleur." }}" />

        <!-- Rating level and Langage -->
        <meta name="rating" content="General" />
        <meta name="language" content="fr" />
        <meta name="robots" content="index,follow,noodp" />
        <meta name="googlebot" content="index,follow" />

        <!-- Author -->
        <meta name="copyright" content="Brandon Sueur" />
        <meta name="publisher" content="Brandon Sueur" />
        <meta name="author" content="Brandon Sueur" />
        <meta name="DC.creator" content="Brandon Sueur — https://brandonsueur.fr" />

        <!-- Google Bot -->
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />

        <!-- Mobile Data -->
        <meta name="apple-mobile-web-app-title" content="Brandon Sueur" />
        <meta name="application-name" content="Brandon Sueur" />
        <meta name="theme-color" content="#000" />

        <!-- Twitter Card Data -->
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_brandonsueur" />
        <meta name="twitter:creator" content="@_brandonsueur" />
        <meta name="twitter:title" content="{{ $ogtitle ?? $title ?? "Brandon Sueur" }}" />
        <meta name="twitter:description" content="{{ $ogdescription ?? $description ?? "Je conçois de jolis sites web pour agences et particuliers ! Ma curiosité et ma motivation pour le monde du web font de moi quelqu’un de passioné et de travailleur." }}"/>
        <meta name="twitter:domain" content="{{ Request::url() }}" />
        <meta name="twitter:dnt" content="on">
        <!-- change image path -->
        <meta name="twitter:image:src" content="https://brandonsueur.fr/the-most-beautiful-person-its-me.jpg" />

        <!-- Open Graph Data -->
        <meta property="og:image" content="https://brandonsueur.fr/the-most-beautiful-person-its-me.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:description" content="{{ $ogdescription ?? $description ?? "Je conçois de jolis sites web pour agences et particuliers ! Ma curiosité et ma motivation pour le monde du web font de moi quelqu’un de passioné et de travailleur."}} "/>
        <meta property="og:title" content="{{ $ogtitle ?? $title ?? "Brandon Sueur" }}" />
        <meta property="og:site_name" content="Brandon Sueur" />
        <meta property="og:url" content="{{ Request::url() }}" />
        <meta property="article:author" content="Brandon Sueur" />

        <link rel="index" href="https://brandonsueur.fr" />
        <link rel="me" href="https://brandonsueur.fr" type="text/html" />
        <link rel="me" href="mailto:contact@brandonsueur.fr" />

        <title>{{ isset($title) ? $title . " | Brandon Sueur" : "Brandon Sueur" }}</title>

        @if (request()->is('articles/edit/*'))
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"></script>

            <script defer src="https://use.fontawesome.com/releases/v5.4.1/js/all.js" integrity="sha384-L469/ELG4Bg9sDQbl0hvjMq8pOcqFgkSpwhwnslzvVVGpDjYJ6wJJyYjvG3u8XW7" crossorigin="anonymous"></script>

            <link rel="stylesheet" href="https://unpkg.com/easymde@2.9.0/dist/easymde.min.css">
            <script src="https://unpkg.com/easymde@2.9.0/dist/easymde.min.js"></script>
        @endif

        <script src="{{ asset('js/app.js') }}" defer></script>

        <link rel="stylesheet" href="{{ asset('style.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        @yield('style')
    </head>

    <body>
        @include('components.navbar')

        <main>
            @yield('content')
        </main>

        @include('components.footer')
    </body>

    @if (request()->is('articles/edit/*'))
        <script>
            new EasyMDE({
                autoDownloadFontAwesome: false,
                element: document.getElementById('post-content')
            });
        </script>
    @endif
</html>
