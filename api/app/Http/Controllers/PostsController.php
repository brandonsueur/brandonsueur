<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Post;

class PostsController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('created_at','desc')->get();
        $data = $posts->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Posts retrieved successfully.'
        ];

        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = post::find($id);
        $data = $post->toArray();
        if (is_null($post)) {
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'Post not found.'
            ];
            return response()->json($response, 404);
        }
        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Post retrieved successfully.'
        ];
        return response()->json($response, 200);
    }
}
