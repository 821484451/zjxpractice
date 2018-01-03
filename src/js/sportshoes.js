$(document).ready(function(){
    var $color=$('.color').find('li');
    console.log($color);
    var color_array=['#FFFFFF','#FFFF00','#FF0000','#007700','#0000CC','#505050','#885500','#660077','#001177','#EE9900','#DD8899','#CCFF99','#33FFEE','#C0C0C0','#AA0000']
    $color.each(function(i){
        this.style.backgroundColor=color_array[i];
    });
    var $div=$('.yincang');
    var $shouqi=$('.shouqi');
    $shouqi.on('click',function(){
        if($div[0].className.indexOf('hide')<0){
            $div.addClass('hide');
            $shouqi.html('<img src="../imges/filter_open_arr.gif"/>&nbsp;更多');
        }else{
            $div.removeClass('hide');
            $div.addClass('show');
            $shouqi.html('<img src="../imges/filter_close_arr.gif"/>&nbsp;收起');
        }
    });
    var $products=$('#products');
    var status=[200,304];

    var xhr=new XMLHttpRequest();

    xhr.onload=function(){
        if(status.includes(xhr.status)){
            var $xhr=JSON.parse(xhr.responseText);
            var data=$xhr.map(function(item){
                return '<div class="good" data-size="'+item.size+'" data-id="'+item.id+'"><a href="#"><img src="../imges/product_'+item.id+'.jpg" /></a><p><span class="l_p">'+item.l_price+'</span><del>'+item.f_price+'</del></p><p>'+item.name+'</p><p class="_size">尺码：'+item.size+'</p></div>'
            })

            $products.html(data);
            var $goods=$('.good');
            console.log($goods)
            $goods.hover(function(){
                this.style.border="4px solid orange"
                $(this).find('._size').show();


            },function(){
                this.style.border="1px solid #ccc"
                $(this).find('._size').hide();
            })
            $goods.on('click',function(){
                var _id=$(this).attr('data-id');
                location.href='../html/xiangqing.html?num='+_id;
            })
        }
    }
    xhr.open('get','../api/data/products.json');
    xhr.send();



});