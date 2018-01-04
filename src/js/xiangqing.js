$(function(){
    var array=location.search.split('=');
    var num=array[1];
    var status=[200,304]
    var curent_data={};
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(status.includes(xhr.status)){
            var data=JSON.parse(xhr.responseText)
            var i=num-1;

            for(attr in data[i]){
                console.log(attr)
                curent_data[attr]=data[i][attr];

            }
            $image=$('.image');
            $image.html('<img src="../imges/product_'+curent_data.id+'.jpg" alt="" /><div class="smallImg"></div>');
            $introduce=$('.introduce');
            $introduce.html('<p class="mingzi">'+curent_data.name+'</p><p class="price">淘鞋价：<i>'+curent_data.l_price+'</i></p><p>专柜价：<del>'+curent_data.f_price+'</del>(送一鞋币)</p><h4>温馨提示：本鞋不支持顺丰快递和货到付款</h4><p class="star">商品评分：<span><img src="../imges/star.gif" alt="" /></span>5.0(已有0人评价)</p><div class="sizeList"><p class="color">颜色：<img src="" alt="" /></p><p>尺寸：'+curent_data.size+'</p><p class="num">购买数量：<button>-</button><input type="text" value="1"/><button>+</button></p><p>已选商品：您将在淘鞋网购买一双43码的中灰/浅绿色的鞋</p><div class="buy"><a href="#"><img src="../imges/buy.gif" alt="" /></a><a href="shoppingcar.html"> <img src="../imges/addcart.gif" alt="" /></a></div></div><p class="paystyle">支付方式：<a href="#">支付宝</a><a href="#">财付通</a><a href="#">网银支付</a><a href="#">信用卡快捷</a><a href="#">储蓄卡快捷</a><a href="#">支持货到付款</a></p><dl><dt>服务<br />承诺</dt><dd><ul class="clearfix"><li>退换货服务<br /><img src="../imges/promise2.gif" alt="" /></li><li>商品保障<br /><img src="../imges/promise3.gif" alt="" /></li><li>承担运费<br /><img src="../imges/promise4.gif" alt="" /></li></ul></dd></dl>')







        }
    }
    xhr.open('get','../api/data/products.json');
    xhr.send();
    
    var xhr_enjoy=new XMLHttpRequest();
    xhr_enjoy.onload=function(){
        if(status.includes(xhr_enjoy.status)){
            var data=JSON.parse(xhr_enjoy.responseText)
            $enjoy=$('.enjoy');
            var res=data.map(function(item){
                return '<div class="enjoy_list"><img src="../imges/enjoy_'+item.id+'.jpg" alt="" /><p><a href="#">'+item.name+'</a></p><p>专柜价：<del>'+item.f_price+'</del></p><p>淘鞋价<span>'+item.l_price+'</span>元</p></div>'
            })
            $enjoy.append(res);
            
        }
    }
    xhr_enjoy.open('get','../api/data/enjoy.json');
    xhr_enjoy.send();
    

})