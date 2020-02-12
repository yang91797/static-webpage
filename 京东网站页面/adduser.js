var flag=true;

$('#register-form :submit').click(function (event) {




    $('#register-form .field').each(function () {





        //验证输入
        if ($(this).val().trim().length==0){
            var this_parent=$(this)[0].parentNode;
            var this_span=this_parent.getElementsByTagName('span');
            if (this_span.length>0){
                this_parent.removeChild(this_span[0]);
                    }


            var span=$('<span>');
            var mark=$(this).attr("mark");
            span.text(mark+"不能为空");
            $(this).after(span);
            flag=false;
            return false;
        }
        else if($('#form-phone').val().trim().length!=0){
            var $phone_number=$('#form-phone').val();
            if(validate_phone($phone_number)){

            }
            else {

                var $phone_parent=$('.form-item-phone')[0];

                var $phone_span=$phone_parent.getElementsByTagName('span');
                if ($phone_span.length>0){
                    $phone_parent.removeChild($phone_span[0])
                }

                var $phone=$('#form-phone');
                var span=$('<span>');
                span.text('格式错误');
                $phone.after(span);
                flag=false;
                return false
            }

        }





        //电话号码验证
        function validate_phone(ph) {
            var pattern=new RegExp(/^[0-9-+]+$/);
            return pattern.test(ph)

        }


    });



    return flag
})


//验证密码是否相同

$('#form-equalTopwd').blur(function () {
    var $parent=$(this).parent();
    $parent.find('span').remove();
    if ($('#form-pwd').val() !=$('#form-equalTopwd').val()){
        var span='两次密码不一致'
        $parent.append('<span>'+span+'</span>');

        flag=false
    }else {
        flag=true
    }
})









