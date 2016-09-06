<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Registration extends Model {

    public $table = "dsf_conf_registration";
    public $primaryKey = 'dsf_conf_registration_id';
    public $timestamps = false;

}
