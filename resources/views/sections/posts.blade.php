<section id="posts" class="mt-32">
    <div class="container mx-auto px-4">
        <div class="flex mt-10 flex-wrap">
            <div class="w-full lg:w-1/2 xl:w-1/2 mb-6 xl:pr-8 flex self-center">
                <div class="title">
                    <span class="tracking-wide mt-8 leading-loose text-gray-700">
                        Mes derniers articles
                    </span>

                    <h2 class="text-3xl md:text-4xl xl:text-3xl leading-tight mt-4 text-justify">
                        Concernant le développement,<br>
                        ma vie et puis le design.
                    </h2>
                </div>
            </div>

            <div class="w-full flex flex-wrap -mx-4 mb-4">
                @foreach($posts as $post)
                    <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4 mt-10">
                        @if (\Request::is('articles'))
                            <a href="{{ url()->full() . '/' . $post->slug }}">
                        @else
                            <a href="{{ url()->full() . '/articles/' . $post->slug }}">
                        @endif

                            @php
                                $to = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $post->created_at);
                                $from = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', Carbon::now());

                                $diff_in_days = $to->diffInDays($from);
                            @endphp

                            @if($diff_in_days < 5)
                                <p class="bg-green-200 absolute mt-3 ml-3 py-1 px-3 text-green-900 rounded text-sm mb-4 shadow-lg">
                                    <span class="not-italic mr-1">🔥</span> Nouveau !
                                </p>
                            @endif

                            <div class="post-img" style="background-image: url({{ $post->image }});"></div>
                            <h2 class="text-xl leading-tight mb-2 | post-title">{{ $post->title }}</h2>
                        </a>

                        <span class="tracking-wide leading-loose text-gray-700">
                            <time datetime="{{ date('d-m-Y', strtotime($post->created_at)) }}">{{ $post->created_at }}</time>
                        </span>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
