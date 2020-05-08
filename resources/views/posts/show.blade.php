@extends('layouts.master', [
    'title' => $post->title,
    'ogtitle' => $post->title,
    'ogdescription' => Str::words($post->content,20)
])

@section('content')
    <article class="container mx-auto px-4">
        <header class="mt-32 mb-16 sm:mt-32 xl:mt-24 text-center">
            <h1 class="text-3xl md:text-4xl xl:text-5xl leading-tigh">
                {{ $post->title }}
            </h1>

            <time class="tracking-wide leading-loose text-gray-700" datetime="{{ date('d-m-Y', strtotime($post->created_at)) }}">il y a 2 ans</time> <span class="mx-2">•</span> ☕️ {{ $estimate }}
        </header>

        <img class="mb-16 rounded" src="{{ $post->image }}" alt="{{ $post->title }}">

        <article class="tracking-wide leading-loose text-gray-700 text-justify post-content">
            @php
                $Parsedown = new Parsedown();
                echo $Parsedown->text($post->content);
            @endphp

            <hr class="mt-12">
        </article>

        <?php

        function share($name, $post)
        {
            switch($name) {
                case 'twitter':
                    return 'https://twitter.com/share?text='. urlencode($post->title) . '&url=' . urlencode(url()->full());
                    break;
                case 'linkedin':
                    return 'https://www.linkedin.com/shareArticle?mini=true&url=' . urlencode(url()->full()) . '&title=' . urlencode($post->title);
                    break;
                default:
                    return null;
                    break;
            }
        }

        ?>

        <footer class="mt-12 tracking-wide leading-loose text-gray-700 text-center">
            <p>Merci d'avoir lu jusqu'au bout ! 😊 Hésite surtout pas à partager l'article sur
                <a href="<?= share('twitter', $post) ?>" class="hover:underline" style="color: #00aced">Twitter</a>
                ou
                <a href="<?= share('linkedin', $post)?>" class="hover:underline" style="color: #0e76a8">LinkedIn</a>.</p>
        </footer>
    </article>
@stop
