<?php namespace App\Models\Game;

use Illuminate\Database\Eloquent\Model;

class User extends Model {

  protected $table = "users";

  /**
  * Reference to municipality model
  */
  public function municipality() {
    return $this->hasOne('App\Models\Municipality', 'municipalityId');
  }

}
