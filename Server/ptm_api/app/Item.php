<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Item extends Model {

    public $table = "desf_conf_item";
    public $primaryKey = 'desf_conf_item_id';
    public $timestamps = false;

}
