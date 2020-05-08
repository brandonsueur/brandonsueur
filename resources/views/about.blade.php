@extends('layouts.master')

@section('content')
<header id="intro" class="intro mt-32 sm:mt-32 xl:mt-40">
    <div class="container mx-auto px-4">
        <span class="tracking-wide mt-8 leading-loose text-gray-700">
            En quelques mots ?
        </span>

        <h1 class="text-3xl md:text-4xl xl:text-5xl leading-tight">
            Entrepreneur et passionné <br class="hidden md:block xl:block" /> par le code et puis le design.
        </h1>

        <div class="mt-8">
            @include('components.socials')
        </div>
    </div>
</header>

<section id="about" class="mt-40">
    <div class="container mx-auto px-4">
        <img class="mb-10 mt-10 rounded hidden lg:block xl:block" src="{{ asset('images/a-simple-way-to-recharge-my-batteries-from-time-to-time.jpeg')}}" alt="Un moyen simple de recharger mes batteries de temps en temps">

        <div class="title">
            <span class="tracking-wide mt-8 leading-loose text-gray-700">
                Introduction
            </span>

            <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-4 text-justify">
                Je suis Brandon Sueur, développeur web habitant à Abbeville, en France. Entrepreneur et indépendant depuis 2 ans, je travail pour des grosses entreprises, PME et particuliers.
            </h2>
        </div>

        <div class="flex mt-10 flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:pr-8 xl:pr-8">
                <p class="tracking-wide leading-loose text-gray-700 text-justify">
                    Dès mes 16 ans, j'ai su où je voulais aller, j'ai donc suivi un baccalauréat en vente que j'ai
                    décidé d'arrêté six jours après ma rentrée de terminal pour entreprendre à 100% ayant ouvert la
                    société le jour de ma majorité. J'ai appris grâce à des vidéos, articles et la pratique. J'apprend
                    chaque jour pour progresser et proposer les meilleurs solutions à mes clients.
                </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 xl:pl-8">
                <p class="tracking-wide leading-loose text-gray-700 text-justify">
                    Le monde numérique est mon parc de jeux et j'ai toujours faim de créer de nouveaux produits.
                    Mon objectif est de rendre les sites web et application mobile facile à utiliser et accessible à
                    tous. <b>C'est possible !</b> C'est ce qui me motive le plus dans mon travail, c'est que tout
                    est possible, il suffit juste de réfléchir intélligemment et travailler dur et bien !
                </p>
            </div>
        </div>

        <div class="title mt-16 xl:w-8/12">
            <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-4 text-justify">
                Mes compétences
            </h2>
        </div>

        <div class="flex mt-10 flex-wrap">
            <div class="w-full">
                <p class="tracking-wide leading-loose text-gray-700 text-justify">
                    Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les
                    sites web et les applications mobiles, y compris la communication visuelle et de marque.
                    J'aime créer de nouveaux produits de zéro ou optimiser les produits existants afin
                    qu'ils fonctionnent mieux du point de vue de l'utilisateur et de l'entreprise.
                </p>

                <ul class="tags mt-5">
                    @foreach(["PHP","MySQL","Git","React","Docker","Vue.js", "React Native", "Adobe xd","Redux","MVC", "GraphQL", "SEO","Sketch","Laravel 5","JavaScript", "Redux Saga","Node.js"] as $tag)
                    <li class="bg-black text-white text-sm p-1 px-3 m-1 inline-flex rounded">{{ $tag }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>


@include('sections.malt')
@stop