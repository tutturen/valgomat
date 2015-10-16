<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Statement extends Model {

  protected $table = "statements";

  /**
  * Reference to Topic model
  */
  public function topic() {
    return $this->hasOne('App\Models\Topic', 'topicId');
  }

}
