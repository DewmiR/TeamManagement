<html>
    <head>
        <title>Laravel</title>

        <link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="script.js"></script>

        <style>
            body {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                color: #B0BEC5;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
                margin-bottom: 40px;
            }

            .quote {
                font-size: 24px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="col-xs-12 col-sm-2 col-md-2 passenger-info-field">

                <input type="hidden" name="memberid" id="memberid" value="1">
                <input type="hidden" name="password" id="password" value="asdasd">
                <input type="hidden" name="companyName" id="companyName" value="Kabali">
                <input type="hidden" name="email" id="email" value="kabali@gmail.com">
                <input type="hidden" name="mobile" id="mobile" value="0112222232">
                <input type="hidden" name="phone" id="phone" value="0775116763">
                <input type="hidden" name="fax" id="fax" value="01123232322">
                <input type="hidden" name="item_0" id="item_0" value="1">
                <input type="hidden" name="givename_0" id="givename_0" value="kabali">
                <input type="hidden" name="surname_0" id="surname_0" value="super star">
                <input type="hidden" name="meal_0" id="meal_0" value="Non-Vegetrian">
                <input type="hidden" name="email_0" id="email_0" value="kabali@gmail.com">
                <input type="hidden" name="mobile_0" id="mobile_0" value="0112121211">
                <input type="hidden" name="phone_0" id="phone_0" value="0775116763">


                <button class="btn btn-success-outline" type="button" id="register" value="Register" style="color: #fff;border:none !important;">Register</button>
            </div>
        </div>
    </body>
</html>

<script>
    $(document).ready(function () {
        $("#register").click(function () {

         

            var memberid = $("#memberid").val();
            var password = $("#password").val();
            var companyName = $("#companyName").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var phone = $("#phone").val();
            var fax = $("#fax").val();
            var item_0 = $("#item_0").val();
            var givename_0 = $("#givename_0").val();
            var surname_0 = $("#surname_0").val();
            var meal_0 = $("#meal_0").val();
            var email_0 = $("#email_0").val();
            var mobile_0 = $("#mobile_0").val();
            var phone_0 = $("#phone_0").val();
            
            var data = {
                memberid: memberid,
                password:password,
                companyName:companyName,
                email:email,
                mobile:mobile,
                phone:phone,
                fax:fax,
                item_0:item_0,
                givename_0:givename_0,
                surname_0:surname_0,
                meal_0:meal_0,
                email_0:email_0,
                mobile_0:mobile_0,
                phone_0:phone_0,

            };
            $.ajax({
                url: "register",
                type: "GET",
                data: data,
               
                success: function (data) {
                   console.log(data);

                }
            });

        });
    });
</script>