<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function home(){
        $posts = Post::all()->take(6)->where('draft', false)->where('display', true);

        return view('home', compact('posts'));
    }

    public function about()
    {
        return view('about');
    }

    public function article()
    {
        return view('article');
    }

    public function environnement()
    {
        return view('environnement');
    }
}
