<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model {

  protected $table = "users";

  /**
  * Reference to municipality model
  */
  public function municipality() {
    return $this->hasOne('App\Models\Municipality', 'municipalityId');
  }

  /**
  * Reference to Statement
  */
  public function statementsAnswers() {
    return $this->hasMany('App\Models\Statement', 'userId');
  }

}
