$(document).ready(function(){
    var status=[304,200]
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(status.includes(xhr.status)){
            var data=decodeURI(xhr.responseText)
            data=JSON.parse(data);
            console.log(data)
            var $product_list=$('.product_list');
            var $last_total=$('.last_total');
            var price=0;
            
            var num1=0;
            data.map(function(item){
                console.log(price);
                num1++
                
                     price+=parseInt((item.l_price).slice(1))
                if(num1===data.length){
                     return price;
                }
               
                
            });
            

            $last_total.html(price);
            $('.total').html(price)


            $product_list.html(data.map(function(item){
                return'<tr data-index="'+item.num+'"><td><input type="checkbox"></td><td> <img src="../imges/product_'+item.num+'.jpg" id="car_img"></td><td>'+item.name+'</td><td>'+item.l_price+'</td><td>-</td><td>'+item.qty+'</td><td>'+item.l_price+'</td><td class="del"><a href="#">删除</a></td></tr>'
            }));
            $del=$('.del');
            $del.on('click',function(){
                var xhr_d=new XMLHttpRequest();
                xhr_d.onload=function(){
                    if(status.includes(xhr_d.status)){
                        var res=xhr_d.responseText;
                        if(res==='ok'){
                            location.href='../html/shoppingcar.html';
                        }
                       
                    }
                }
                console.log($(this).closest('tr').attr('data-index'))
                xhr_d.open('get','../api/del.php?index='+$(this).closest('tr').attr('data-index'));
                xhr_d.send();

            })


        }
    }
    xhr.open('get','../api/car.php');
    xhr.send();
});