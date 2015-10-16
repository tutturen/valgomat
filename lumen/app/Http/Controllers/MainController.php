<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

class MainController extends Controller
{
    public function start() {
      $user = new User;
      $user->save();
      return response()->json(["userId" => $user->id]);
    }

    /**
    * Recieves your demographic data, and gives you all statements
      Example input:
      {
        "userId": 15,
        "gender": 2,
        "ageGroup": 4,
        "lastParty": 9,
        "municipality": 208
      }
    */
    public function getStatements(Request $request) {
      // Get the input
      $userId       = (int) $request->input('userId');
      $gender       = (int) $request->input('gender');
      $ageGroupId   = (int) $request->input('ageGroup');
      $lastPartyId  = (int) $request->input('lastParty');
      $municipality = (int) $request->input('municipality');

      if ($userId < 1) {
        return self::error('Ugyldig valg av bruker-id');
      }
      if ($gender != 1 && $gender != 2) {
        return self::error('Ugyldig valg av kjønn');
      }
      if ($ageGroupId < 1 || $ageGroupId > 8) {
        return self::error('Ugyldig valg av aldersgruppe');
      }
      if ($lastPartyId < 1 || $lastPartyId > 11) {
        return self::error('Ugyldig partivalg ved forrige valg');
      }
      if ($municipality < 1 || $municipality > 428) {
        return self::error('Ugyldig valg av kommune');
      }

      $user = User::find($userId);
      if (!$user) {
        return self::error('Ugyldig bruker-id');
      }

    }

    public function getResult() {
      return response()->json(["unimplemented" => true]);
    }

    private static function error($message) {
      return response()->json(['success' => false, 'error' => true, 'message' => $message]);
    }
}
