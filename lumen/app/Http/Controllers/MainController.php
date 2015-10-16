<?php

namespace App\Http\Controllers;
use App\Models\User;

class MainController extends Controller
{
    public function start() {
      $user = new User;
      $user->save();
      return response()->json(["userId" => $user->id]);
    }

    public function getStatements() {
      return response()->json(["unimplemented" => true]);
    }

    public function getResult() {
      return response()->json(["unimplemented" => true]);
    }
}
