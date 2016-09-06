<?php

namespace App\Http\Controllers;

class PricingController extends Controller {

    public function index() {
        return view('home');
    }

    public function calculateDiscount() {
        $price = 500;
        $memberId = 1;
        $member = \App\Member::find($memberId);
        if (!$member->isEmpty()) {
            $memberType = \App\MemberType::find($member->dsf_member_type_id);
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

        return $price;
    }

}
