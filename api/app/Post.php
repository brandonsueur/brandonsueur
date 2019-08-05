<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'title', 'content', 'display', 'category', 'created_at', 'updated_at'
    ];
}
