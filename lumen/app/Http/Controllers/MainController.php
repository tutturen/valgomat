<?php

namespace App\Http\Controllers;

class MainController extends Controller
{
    public function start() {
      // TODO: Create new user, return id
      return response()->json(["userId" => 12]);
    }

    public function getStatements() {
      return response()->json(["unimplemented" => true]);
    }

    public function getResult() {
      return response()->json("unimplemented" => true]);
    }
}
