<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function __construct()
    {
        // your code ...
    }

    public function index()
    {
        $posts = Post::all()->where('display', true)->where('draft', false);

        return view('posts.index', compact('posts'));
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)->first();

        // estime read
        $word = str_word_count(strip_tags($post->content));
        $minute = floor($word / 200);
        $estimate = $minute . ' minute' . ($minute == 1 ? '' : 's');

        return view('posts.show', compact('post', 'estimate'));
    }

    public function edit($id){
        $post = Post::where('id', $id)->first();

        return view('posts.edit', compact('post'));
    }

    public function update(Request $request, $id)
    {
        $this->middleware('auth');

        $post = Post::where('id', $id)->first();

        $this->validate($request, [
            'title'     => 'required',
            'slug'      => 'required',
            'image'     => 'required',
            'content'   => 'required',
            'display'   => 'required',
            'draft'     => 'required'
        ]);

        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->image = $request->image;
        $post->content = $request['content'];

        $post->display = $request->display;
        $post->draft = $request->draft;

        $post->save();

        return redirect()
            ->action('PostsController@show')
            ->with('success', "L'article à été éditer avec succès.");
    }

    public function create()
    {
        $this->middleware('auth');

        return view('posts.add', compact('post'));
    }

    public function store(Request $request)
    {
        // your code ...
    }
}
