

var item=document.getElementsByClassName("item");
for (var i=0;i<item.length;i++){
    item[i].onmouseover=function () {
    var share_site_to=this.getElementsByClassName("share-site-to")[0];
    share_site_to.style.display="inline-block";

    // 添加评论
    var pub_icons = this.getElementsByClassName('pub-icons')[0];


    if(pub_icons != undefined){
        pub_icons.onclick=function () {
            var text = this.parentNode.previousElementSibling.getElementsByTagName('textarea')[0];
            var value = text.value;
            var ul = this.parentNode.parentNode.previousElementSibling;
            var li = ul.getElementsByTagName('li');
            var liValue = li[0].getElementsByClassName('p3')[0].innerText;
            var date = new Date();
            var discussA= this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.getElementsByClassName('discus-a')[0];
            var count=discussA.getElementsByTagName('b')[0].innerText;    //评论数
            var newcount = parseInt(count)+1;

            if(li.length==1 && liValue==''){
                li[0].getElementsByClassName('p3')[0].innerText=value;
                li[0].getElementsByClassName('into-time')[0].innerText=date.toLocaleString();
                discussA.getElementsByTagName('b')[0].innerText=newcount;
                text.value='';
            }else {
                var cloneLi = li[0].cloneNode(true);
                ul.insertBefore(cloneLi,li[0]);
                li[0].getElementsByClassName('p3')[0].innerText=value;
                li[0].getElementsByClassName('into-time')[0].innerText=date.toLocaleString();
                discussA.getElementsByTagName('b')[0].innerText=newcount;
                text.value='';
            }

        };


         // 关闭评论区域
        var close = this.getElementsByClassName('close-comt')[0];
        var commentBox = this.getElementsByClassName('comment-box')[0];

        close.onclick = function () {
            $(commentBox).hide();
        }

            };
    };





    item[i].onmouseout=function () {
    var share_site_to=this.getElementsByClassName("share-site-to")[0];
    share_site_to.style.display="none";
};


    // 点赞效果
    var digg_a=item[i].getElementsByClassName("digg-a")[0];

    console.log(digg_a.value);
    digg_a.onclick=function () {
            var value=this.getAttribute("value");
            value=++value;
            this.setAttribute("value",value);

            if (value<2){
                var text=this.getElementsByTagName("b")[0];
                var number=text.innerHTML;
                var icon_digg=this.getElementsByTagName("span")[0];
                new_number=++number;
                text.innerHTML=new_number;
                icon_digg.style.background='url("images/dianzan.png") no-repeat 0 0';
                text.style.color='#369';
    }
};

    // 收藏效果
    var collect_a=item[i].getElementsByClassName("collect-a")[0];
    collect_a.onclick=function () {
        var collect=this.getElementsByTagName("span")[0];
        var collect_b=this.getElementsByTagName("b")[0];
        collect_b.style.color='#369';
        collect.style.background=' url("images/dianzan.png") no-repeat 0 -140px'
    };




    
}


// 返回顶部
window.onscroll=function () {
    var current = $(window).scrollTop();

    if(current>200){
        $('#gotop').show(500)
    }else {
        $('#gotop').hide(500)
    }
};



// 评论
var discus_a = document.getElementsByClassName('discus-a');

for(var i=0;i<discus_a.length;i++){

    discus_a[i].onclick = function () {
        var news_content = this.parentNode.parentNode;
        var discuss_box = document.getElementById('discuss-box');
        var discussSon = discuss_box.children[0];
        var newDiscuss = discussSon.cloneNode(true);

        var commentBox = news_content.getElementsByClassName('comment-box');


        if(commentBox.length == 0){
            var p=news_content.appendChild(newDiscuss);
        }else {
            $(commentBox).show();
        }


}

}



var btn_close = document.getElementById('btn-close');
btn_close.onclick=function () {
    var $module = $('.module-login-mask').hide();

};

$('.login-btn-a').each(function () {
    $(this).click(function () {
        $('.module-login-mask').show();
    })
});



// 发帖功能
$('.publish-btn').click(function () {
    $('#news').show();
    $('.comment-first').show();

});


$('#close-publish').click(function () {
     $('#news').hide();
    $('.comment-first').hide()
});


$('#publish').click(function () {
    var $news = $('.item')[0].cloneNode(true);
    var $publishText = $('#text').val();
    $news.getElementsByClassName('show-content')[0].innerHTML=$publishText;
    $news.getElementsByClassName('time-a')[0].getElementsByTagName('b')[0].innerHTML='1分钟';
    var contentList = document.getElementsByClassName('content-list')[0];
    contentList.insertBefore($news,$('.item')[0]);
     $('#news').hide();
    $('.comment-first').hide();
    $('#text').val('');

});