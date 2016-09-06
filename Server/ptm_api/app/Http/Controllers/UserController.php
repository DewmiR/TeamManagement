<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;

class UserController extends Controller {

    public function index() {
        return view('welcome');
    }

    public function saveRegistration() {

        //Get the values from the form
        $memberId = Input::get('memberid');
        $password = Input::get('password');
        $companyName = Input::get('companyName');
        $email = Input::get('email');
        $mobile = Input::get('mobile');
        $phone = Input::get('phone');
        $fax = Input::get('fax');

        //check whether member id exists
        $member = \App\Member::find($memberId);
        if (count($member) != 0) {
            $memberId = $memberId;
        } else {
            $memberId = "";
        }

        //Save the values in the table
        $registration = new \App\Registration();
        $registration->dsf_member_id = $memberId;
        $registration->dsf_conf_password = $password;
        $registration->dsf_conf_companyname = $companyName;
        $registration->dsf_conf_email = $email;
        $registration->dsf_conf_mobile = $mobile;
        $registration->dsf_conf_phone = $phone;
        $registration->dsf_conf_fax = $fax;
        $registration->dsf_conf_account_status = "Active";
        $registration->save();

        //get the regitration id
        $registrationId = $registration->dsf_conf_registration_id;

        //get Participant Count
        $participantCount = 1;

        //Insert the details into Attendee Table
        for ($i = 0; $i < $participantCount; $i++) {
            $attendee = new \App\Attendee();
            $attendee->desf_conf_registration_id = $registrationId;
            $attendee->dsf_conf_item_id = Input::get('item_' . $i);
            $attendee->dsf_conf_attendee_givenname = Input::get('givename_' . $i);
            $attendee->dsf_conf_attendee_surname = Input::get('surname_' . $i);
            $attendee->dsf_conf_attendee_meal_preference = Input::get('meal_' . $i);
            $attendee->dsf_conf_attendee_email = Input::get('email_' . $i);
            $attendee->dsf_conf_attendee_mobile = Input::get('mobile_' . $i);
            $attendee->dsf_conf_attendee_phone = Input::get('phone_' . $i);
            $attendee->save();

            $item = \App\Member::find($attendee->dsf_conf_item_id);
            $price = $item->desf_conf_item_price;

            if ($memberId != "") {
                $memberType = \App\MemberType::find($memberId);
                $memberDiscount = $memberType->dsf_member_discount;
                $memberAllowance = $memberType->dsf_discount_default_allowance;
                if ($member->dsf_member_discount_allowance_used < $memberAllowance) {
                    if (substr($memberDiscount, -1) == '%') {
                        $discount = substr($memberDiscount, 0, -1);
                        $price = ($discount / 100) * $price;
                    } else {
                        $discount = $memberDiscount;
                        $price = $price - $discount;
                    }
                    
                    
                }
            }
        }



        return $price;
    }

}
