<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class County extends Model {

  protected $table = "counties";

  /**
  * Reference to municipality model
  */
  public function municipalites() {
    return $this->hasMany('App\Models\Municipality', 'countyId');
  }

}
