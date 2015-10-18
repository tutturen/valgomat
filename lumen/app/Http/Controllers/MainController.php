<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Statement;
use App\Models\StatementAnswer;

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

      // Save data to the user
      $user->gender = $gender;
      $user->ageGroup = $ageGroupId;
      $user->partyLastElection = $lastPartyId;
      $user->municipality = $municipality;
      $user->save();

      // Return all the questions with topic attached
      $statements = Statement::with('topic')->get();

      return response()->json(['statements' => $statements]);

    }

    public function getResult(Request $request) {
      $userId =     (int) $request->input('userId');
      $statements = $request->input('statements');

      if ($userId < 1) {
        return self::error('Mangler bruker-id');
      }

      $user = User::find($userId);
      if (!$user) {
        return self::error('Ugyldig bruker-id');
      }

      if (!is_array($statements)) {
        return self:error('Ugyldig liste');
      }

      $statementsCount = Statement::count();

      foreach ($statements as $statement) {
        $id     = (int) $statement->statement_id;
        $answer = (int) $statement->answer;
        $weight = (int) $statement->weight;
        if ($id < 1 || $id > $statementsCount || $answer < 1 || $answer > 5 || $weight < 1 || $weight > 3) {
          continue;
        }
        
        $statementAnswer = new StatementAnswer;
        $statementAnswer->userId = $userId;
        $statementAnswer->statementId = $id;
        $statementAnswer->statementWeight = $answer;
        $statementAnswer->importanceWeight = $weight;
        $statementAnswer->save();

        // Calculate the result
      }




      return response()->json(["unimplemented" => true]);
    }

    private static function error($message) {
      return response()->json(['success' => false, 'error' => true, 'message' => $message]);
    }
}
