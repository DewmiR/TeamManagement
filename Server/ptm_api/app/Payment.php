<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Payment extends Model {

    public $table = "dsf_conf_payment";
    public $primaryKey = 'conf_payment_id';
    public $timestamps = false;

}
