<section id="about" class="mt-48">
    <div class="container mx-auto px-4">
        <div class="title">
            <span class="tracking-wide mt-8 leading-loose text-gray-700">
                Ma vision & qui suis-je ?
            </span>

            <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-4 text-justify">
                Je me forme contituellement et m’inspire tous les jours pour réinveter la vie des sites web et
                applications mobile de mes clients. L’inspiration et le savoir, c’est la clé !
            </h2>
        </div>

        <div class="flex mt-10 flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:pr-8 xl:pr-8">
                <p class="tracking-wide leading-loose text-gray-700 text-justify">
                    J’adore apprendre, chaque jour j’essaye d’apprendre au moins une chose, dans n’importe quel
                    domaine, l'objectif étant d'étendre mes connaissances ! Nous ne pouvons inspirer les autres
                    que si nous sommes inspirés par ce que nous faisons.
                </p>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 xl:pl-8">
                <p class="tracking-wide leading-loose text-gray-700 text-justify">
                    Une fois inspiré par ce que je fais, je peux proposer mes services à des prospects. Je suis
                    capable d'apporter mes conseils, designer et développer un projet. Le plus important étant
                    d'échanger, être à l'écoute et structurer le projet.
                </p>
            </div>
        </div>

        <div class="flex mt-5 flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mt-5 md:pr-8 xl:pr-8">
                <h2 class="text-xl leading-tight mb-10">
                    Mes compétences
                </h2>

                <p class="tracking-wide leading-loose text-gray-700 text-justify">
                    J’ai acquis mes compétences sur plusieurs années de pratique et de perfectionnement au travers
                    différents projets personnels et professionnels.
                </p>

                <ul class="tags mt-5">
                    @foreach(["PHP","MySQL","Git","React","Docker","Vue.js","Adobe xd","MVC","SEO","Sketch","Laravel 5","JavaScript","Node.js"] as $tag)
                        <li class="bg-black text-white text-sm p-1 px-3 m-1 inline-flex rounded">{{ $tag }}</li>
                    @endforeach
                </ul>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mt-5 md:pl-8 xl:pl-8">
                <h2 class="text-xl leading-tight mb-10">
                    Expériences
                </h2>

                <div class="experiences">
                    <div class="mt-4">
                        <div class="flex mb-4">
                            <div class="w-1/2 h-12">
                                <h2 class="mb-2 text-xl">Freelance</h2>
                                <span class="text-gray-700">Développeur Web & UI Designer</span>
                            </div>

                            <div class="w-1/2 h-12">
                                <span class="tracking-wide leading-loose text-gray-700">Janvier 2019 — Maintenant</span>
                            </div>
                        </div>

                        <div class="flex mt-10 mb-4">
                            <div class="w-1/2 h-12">
                                <h2 class="mb-2 text-xl">CGI</h2>
                                <span class="text-gray-700">Analyste Programmeur</span>
                            </div>

                            <div class="w-1/2 h-12">
                                <span class="tracking-wide leading-loose text-gray-700">Février 2017 — Janvier 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
