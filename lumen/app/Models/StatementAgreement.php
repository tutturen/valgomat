<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatementAgreement extends Model {

  protected $table = "statement_agreements";

  /**
  * Reference to Statement model
  */
  public function statement() {
    return $this->hasOne('App\Models\Statement', 'statementId');
  }

  /**
    * Reference to Party model
  */
  public function party() {
    return $this->hasOne('App\Models\Party', 'partyId');
  }

}
