<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Attendee extends Model {

    public $table = "dsf_conf_attendees";
    public $primaryKey = 'dsf_conf_attendee_id';
    public $timestamps = false;

}
