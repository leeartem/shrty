<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Link extends Model
{
    protected $collection = 'links';
    protected $guarded = [];
}
