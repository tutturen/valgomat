<?php

use Illuminate\Database\Seeder;
use App\Models\Statement;
use App\Models\Party;

class StatementAgreementTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // Note that this data is completely random, and does not represent the parties
    $statementsCount = Statement::count();
    $partiesCount = Party::count();

    for ($statementId = 1; $statementId <= $statementsCount; $statementId++) {
      for ($partyId = 1; $partyId <= $partiesCount; $partyId++) {
        DB::table('statement_agreements')->insert([
          'statementId' => $statementId,
          'partyId'     => $partyId,
          'weight'      => rand(-2, 2)
        ]);
      }
    }
  }
}
