@extends('layouts.master')

@section('content')
    <div class="container mx-auto px-4 mt-24">
        <form method="POST" action="{{ route('posts.update', $post->id) }}">
            {!! csrf_field() !!}
            {{ method_field('PUT') }}

            <input type="hidden" name="_method" value="PUT">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="w-full md:5/6 px-3 mb-6 md:mb-6">
                <label class="block tracking-wide mb-2" for="grid-state">
                    Titre
                </label>

                <input
                    name="title"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value="{{ $post->title }}"
                >
            </div>

            <div class="w-full md:5/6 px-3 mb-6 md:mb-6">
                <label class="block tracking-wide mb-2" for="grid-state">
                    Slug
                </label>

                <input
                    name="slug"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value="{{ $post->slug }}"
                >
            </div>

            <div class="w-full md:5/6 px-3 mb-6 md:mb-6">
                <label class="block tracking-wide mb-2" for="grid-state">
                    Image
                </label>

                <input
                    name="image"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value="{{ $post->image }}"
                >
            </div>

            <div class="w-full md:1/6 px-3 mb-6 md:mb-6">
                <label class="block tracking-wide mb-2" for="grid-state">
                    Visibilité
                </label>

                <div class="relative">
                    <select name="display" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="1">Oui</option>
                        <option value="2">Non</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>

            <div class="w-full md:1/6 px-3 mb-6 md:mb-6">
                <label class="block tracking-wide mb-2" for="grid-state">
                    Brouillon
                </label>

                <div class="relative">
                    <select name="draft" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option value="1">Oui</option>
                        <option value="0">Non</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>

            <div class="w-full md:1/6 px-3 mb-6 md:mb-6">
                <label class="block tracking-wide mb-2" for="grid-state">
                    Contenu
                </label>

                <textarea name="content" id="post-content">{{ $post->content  }}</textarea>
            </div>

            <button class="bg-black p-4 text-white align-middle text-center content-center justify-center">Sauvegarder</button>
        </form>
    </div>
@stop
