<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Municipality extends Model {

  protected $table = "municipalities";

  /**
  * Reference to County model
  */
  public function county() {
    return $this->hasOne('App\Models\County', 'countyId');
  }

}
