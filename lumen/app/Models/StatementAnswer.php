<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatementAnswer extends Model {

  protected $table = "statement_answers";

  /**
  * Reference to Topic model
  */
  public function user() {
    return $this->hasOne('App\Models\User', 'userId');
  }

  /**
  * Reference to Statement model
  */
  public function statement() {
    return $this->hasOne('App\Models\Statement', 'statementId');
  }

}
