<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'title', 'content', 'display', 'category', 'created_at', 'updated_at'
    ];
}
