@extends('layouts.master')

@section('content')
    <header id="intro" class="intro mt-32 sm:mt-32 xl:mt-40">
        <div class="container mx-auto px-4">
            {{-- <a href="#" target="_blank" class="bg-teal-200 inline-block py-2  px-4 text-teal-900 rounded text-sm mb-4">
                <span class="not-italic mr-3">🗃</span> Un nouveau projet est sorti
            </a> --}}

            <a href="https://www.malt.fr/profile/brandonsueur" target="_blank" class="bg-yellow-200 inline-block py-2 px-4 text-yellow-900 rounded text-sm mb-4">
                <span class="not-italic mr-3">🎉</span> Disponible pour des missions freelance
            </a>

            <a href="{{ url()->full() . '/articles' }}" target="_blank" class="bg-green-300 inline-flex py-2 px-4 text-green-900 rounded text-sm mb-4">
                <span class="not-italic mr-3">📖</span> Un nouvel article est sorti
            </a>

            <h1 class="text-3xl md:text-4xl xl:text-5xl leading-tight">
                Je réalise de jolis sites web pour<br class="hidden md:block xl:block"/> agences et particuliers !
            </h1>

            <p class="tracking-wide mt-8 leading-loose text-gray-700">
                Ma curiosité et ma motivation pour le monde du web font de moi<br class="hidden md:block xl:block"/>
                quelqu’un de passioné et de travailleur.
            </p>

            <div class="mt-8">
                @include('components.socials')
            </div>
        </div>
    </header>

    @include('sections.about')

    @include('sections.strategy')

    @include('sections.posts')

    @include('sections.projects')

    @include('sections.quotes')
@stop
