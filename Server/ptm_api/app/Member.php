<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Member extends Model {

    public $table = "dsf_members";
    public $primaryKey = 'dsf_memeber_id';
    public $timestamps = false;

}
