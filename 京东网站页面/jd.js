
//搜索框下的动态热词
var i=0;
function time_replace() {

    var hotwordlist=['音箱低至99','领千元礼券','立减500元'];
    var number=hotwordlist.length;
    if (i==number-1){
        i=-1
    }
    i++;
    var hotword=hotwordlist[i];
    var s=$('#specHotWord').text(hotword);
    // console.log(s)
}

setInterval(time_replace,2000);


//定位搜索框
window.onscroll=function(){
    if($(window).scrollTop()>300){
        $("#search").addClass("search-fix")
    }else {
        $('#search').removeClass("search-fix")
    }

};



//图片滚动
var m=0;
var radius_list=$(".slider_indicators i");
var img_list=$(".slider_wrapper li");
function time_show() {
    m++;

    if (m==img_list.length-1){
        m=-1
    }

    radius_list.eq(m).addClass("slider_indicators_btn_active").siblings().removeClass("slider_indicators_btn_active")
    radius_list.eq(m).removeClass("slider_indicators_btn1").addClass("slider_indicators_btn2");
    radius_list.eq(m).siblings().addClass("slider_indicators_btn1").removeClass("slider_indicators_btn2");
    // $('.slider_indicators i').eq(m).siblings().removeClass("slider_indicators_btn2");
    img_list.eq(m).fadeIn(300).siblings().fadeOut(300);


}


var ID=setInterval(time_show,2000);

function show_left() {
    if(m==0){
        m=7
    }
    m--;
    radius_list.eq(m).addClass("slider_indicators_btn_active").siblings().removeClass("slider_indicators_btn_active")
    radius_list.eq(m).removeClass("slider_indicators_btn1").addClass("slider_indicators_btn2");
    radius_list.eq(m).siblings().addClass("slider_indicators_btn1").removeClass("slider_indicators_btn2");
    img_list.eq(m).fadeIn(300).siblings().fadeOut(300);
}

$(".slider_control_prev").click(show_left);
$(".slider_control_next").click(time_show);


$(".focus_list").hover(function () {
    clearInterval(ID)
},function () {
    ID=setInterval(time_show,2000)
});

$(".slider_indicators i").mousemove(function () {
    m=$(this).index();
    radius_list.eq(m).addClass("slider_indicators_btn_active").siblings().removeClass("slider_indicators_btn_active");
    radius_list.eq(m).removeClass("slider_indicators_btn1").addClass("slider_indicators_btn2");
    radius_list.eq(m).siblings().addClass("slider_indicators_btn1").removeClass("slider_indicators_btn2");
    img_list.eq(m).fadeIn(300).siblings().fadeOut(300);
});





//右侧的促销，公告栏
var mod_children=$(".mod_tab_content").children();

$(".mod_tab_head .news_first").mousemove(function () {
    mod_children.eq(0).css('display','block').siblings().css('display','none');
    $(this).addClass("mod_tab_head_item_on").siblings().removeClass("mod_tab_head_item_on");

});

$(".mod_tab_head .news_last").mousemove(function () {
    mod_children.eq(1).css('display','block').siblings().css('display','none');
    $(this).addClass("mod_tab_head_item_on").siblings().removeClass("mod_tab_head_item_on");
})



//秒杀倒计时

var $cd=$('.cd').children();


function count_down() {

    var $hour=$cd.eq(1).children().text();
    var $minute=$cd.eq(2).children().text();
    var $second=$cd.eq(3).children().text();

    switch (true){
        case $second>0:$cd.eq(3).children().text($second-1);break;
        case $minute>0:$cd.eq(2).children().text($minute-1),$cd.eq(3).children().text(59);break;

        case $hour>0:$cd.eq(1).children().text($hour-1),$cd.eq(2).children().text(59),$cd.eq(3).children().text(59);break;


        case $second<=0:clearInterval(md);break;

    }


}

var md=setInterval(count_down,1000);







var $slider_turn=$('.slider_turn').children();
var $slider_indicator=$('.slider_indicator').children();
var sn=0;
function time_turn() {
    if (sn==2){
        sn=-1;
    }
    sn++;
    $slider_indicator.eq(sn).addClass("slider_indicator_btn_active").siblings().removeClass("slider_indicator_btn_active");
    $slider_turn.eq(sn).fadeIn(500).siblings().fadeOut(500);

}

setInterval(time_turn,3000)



//添加购物车效果
var $addcart=$('.gl-item .addcart');
for (ad=0;ad<$addcart.length;ad++){
    $addcart.eq(ad).click(function () {
        var $shopping_amount=parseInt($('#shopping-amount').text());
        var $shopping_amountR=parseInt($('.J-count').text());
        $('#shopping-amount').text($shopping_amount+1);
        $('.J-count').text($shopping_amountR+1);
        $('.hide').css('display','inline-block');

        // var $goods=$(this).parent().parent()[0];
        // var name=$goods.getElementsByClassName("p-name")[0];
        $(".dropdown-layer .cart_empty").empty();
        setTimeout(hide_none,3000)




    })
}

function hide_none() {
    $('.hide').css('display','none');
}


function loginuser() {
    document.getElementById('shadow').classList.remove('hide1');
    document.getElementById('modal').classList.remove('hide1');
}
// document.getElementById('shadow').classList.remove('hide');
// document.getElementById('modal').classList.remove('hide');



function cancle() {
    document.getElementById('shadow').classList.add('hide1');
    document.getElementById('modal').classList.add('hide1');
}

$('#loginsubmit').click(function () {
    var flag=true;

    $("form :input.itxt").each(function () {
        var $parent=$(this).parent();
        $parent.find('.formtips').remove();
        if ($(this).val().trim().length==0){
            var textl=$(this).prop('placeholder');
            console.log(textl)
            var errorMsg='请输入';
            $parent.append('<span class="formtips">'+errorMsg+' '+textl+ '</span>');
            flag=false;
            return false;
        }
    })
    return flag;
})


