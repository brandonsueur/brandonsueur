@extends('layouts.master')

@section('content')
    <div class="container mx-auto px-4 mt-32 sm:mt-32 xl:mt-40  text-gray-700">
        <header>
            <div class="title">
                <span class="tracking-wide mt-8 leading-loose text-gray-700">
                    Qu'est-ce que j'utilise… et pourquoi ?
                </span>

                <h2 class="text-3xl md:text-4xl xl:text-5xl leading-tight text-black">
                    Mon environnement
                </h2>
            </div>
            <div class="flex mt-8 flex-wrap">
                <div class="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mb-4 md:pr-8 xl:pr-8">
                    <p class="tracking-wide leading-loose text-gray-700 text-justify">
                        Parfois, on me demande ma configuration de développement et les applications que j'utilise pour
                        mon travail quotidien. Il s'agit d'une page vivante destinée à contenir tout cela. En ce sens,
                        voici ma configuration !
                    </p>
                </div>
            </div>
        </header>

        <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-32 text-justify mb-8 text-black">Mon matériel 🎒</h2>

        <ul class="ml-8">
            <li class="list-disc mb-3">💻 MacBook Pro 13" 2019 (i5, 16gb, 512gb)</li>
            <li class="list-disc mb-3">⌨️ Apple Magic Trackpad 2 and Keyboard space grey</li>
            <li class="list-disc mb-3">⌚️ Apple Watch series 3</li>
            <li class="list-disc mb-3">📱 iPhone X</li>
            <li class="list-disc mb-3">🎧 AirPods 2</li>
            <li class="list-disc mb-3">🎧 Casque Sony wh-1000xm3</li>
        </ul>

        <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-16 text-justify mb-8 text-black">Éditeur et terminal 👨🏻‍💻</h2>
        <div class="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mb-8 md:pr-8 xl:pr-8">
            <p class="tracking-wide leading-loose text-gray-700 text-justify">
                Les éditeurs et les terminaux changent beaucoup, en ce moment j'utilise VSCode, PHPStorm et Terminal, mais
                cela pourrait changer à tout moment.
            </p>
        </div>

        <ul class="ml-8">
            <li class="list-disc mb-3"><a href="https://code.visualstudio.com/" class="font-semibold text-black hover:underline" target="_blank">Visual Studio Code</a> est mon éditeur actuel pour presque tout.</li>
            <li class="list-disc mb-3">J'utilise <a class="font-semibold text-black hover:underline" href="https://www.jetbrains.com/fr-fr/phpstorm/" target="_blank">PHPStorm</a> pour des gros projets sous Laravel et Symfony.</li>
            <li class="list-disc mb-3">La font de mon VS Code et PHPStorm, c'est <a class="font-semibold text-black hover:underline" href="https://dank.sh/" target="_blank">Dank Mono</a> et <a class="font-semibold text-black hover:underline" href="https://www.cufonfonts.com/font/menlo" target="_blank" rel="noopener noreferrer" class="sc-13igclc-0 kUbCRG">Menlo</a> pour mon Terminal.</li>
            <li class="list-disc mb-3">Vous pouvez voir mes paramètres (VS Code, PHPStorm, Terminal) sur le référentiel <a href="https://github.com/brandonsueur/configuration" class="font-semibold text-black hover:underline" target="_blank">.dotfiles</a> sur Github.</li>
        </ul>

        <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-16 text-justify mb-8 text-black">Applications 🖥</h2>
        <div class="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mb-8 md:pr-8 xl:pr-8">
            <p class="tracking-wide leading-loose text-gray-700 text-justify">
                J'essaye d'être le plus minimaliste possible concernant les applications(même sur mon iPhone).
                Vous ne verrez donc pas beaucoup d'application mais elle sont essentiel pour mon workflow.
            </p>
        </div>

        <ul class="ml-8">
            <li class="list-disc mb-3"><a class="font-semibold text-black hover:underline" href="" target="_blank">Chrome</a> comme navigateur par défaut, sinon j'utilise
                <a href="https://www.mozilla.org/fr/firefox/developer/" class="font-semibold text-black hover:underline" href="#">Firefox Developer Edition</a> et <span class="font-semibold text-black hover:underline">Safari</span>.</li>
            <li class="list-disc mb-3">Pour les tâches, les notes, les planifications et pour tout le reste, j'utilise <a class="font-semibold text-black hover:underline" href="https://www.notion.so/" target="_blank">Notion</a>.</li>
            <li class="list-disc mb-3">J'utilise <a class="font-semibold text-black hover:underline" href="https://www.dropbox.com/fr/pro" target="_blank">Dropbox</a> avec l'offre Pro pour sauvegarder mes documents.</li>
            <li class="list-disc mb-3"><a class="font-semibold text-black hover:underline" href="https://sketch.com" target="_blank">Sketch</a> pour réaliser des maquettes magnifiques !</li>
            <li class="list-disc mb-3"><a class="font-semibold text-black hover:underline" href="https://desktop.github.com/" target="_blank">Github Desktop</a> car je préfère depuis peu utiliser une interface graphique.</li>
            <li class="list-disc mb-3">J'utilise <a class="font-semibold text-black hover:underline" href="https://slack.com/intl/fr-fr/" target="_blank">Slack</a> et <a class="font-semibold text-black hover:underline" href="https://products.office.com/fr-fr/microsoft-teams/group-chat-software" target="_blank">Microsoft Teams</a> pour la communication avec mes clients.</li>
        </ul>
    </div>
@stop
