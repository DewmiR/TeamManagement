<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class MemberType extends Model {

    public $table = "dsf_member_type";
    public $primaryKey = 'dsf_member_type_id';
    public $timestamps = false;

}
