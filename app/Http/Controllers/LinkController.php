<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LinkRequest;

use App\Models\Link;

class LinkController extends Controller
{
    public function show($short) {
        return Link::where('short', $short)->first();
    }

    public function store(LinkRequest $request) {
        $link = Link::create([
            'full' => $request->validated()['link'],
            'short' => \Str::random(5),
        ]);
        return $link;
    }
}
