$(document).ready(function(){
    // 轮播图
    var $banner_f=$('#banner')
    var $banner=$('.lunbo');
    var $li=$('.first');
    var $clone=$li.clone(true);
    $banner.append($clone);
    var num=0;
    var fn=function(){
        if(num>=5){
            
            $banner[0].style="left=0";
            num=0;
        }
        num++
        var distance=num*(-1423)
        $banner.animate({left:distance},1000)
        // console.log(num) 
    }
    var timer=setInterval(fn,3000)
    $banner_f.on('mouseover',function(){
            // console.log('clear',timer)
            clearInterval(timer); 
    });
    $banner_f.on('mouseout',function(){
            timer=setInterval(fn,3000)
            // console.log('set',timer)
    });
    $btns=$('.btns');
    var k=0;
    $btns.find('li').each(function(){
        this.index=k
        k++
    })
    $btns.on('mouseover','li',function(){
        $banner.animate({left:this.index*(-1423)},1000);
        
        this.style.backgroundColor='yellow';

    })
    $btns.on('mouseout','li',function(){
        num=this.index;
        this.style.backgroundColor='#666';

    })
    // brand轮播
    var $prev=$('.prev');
    var $next=$('.next');
    var $log=$('.log');
    $prev.on('click',function(){

        $log.animate({left:-900},500);
    })
    $next.on('click',function(){
        
        $log.animate({left:0},1000);
    });
    // tab切换
    var $tab=$('.tab');
    var $tab_li=$tab.find('ul li');
    var d=0;
    $tab_li.each(function(){
        this.index=d;
        d++
    })
    $($tab_li.get(0)).css({'background-color':'#fff','border-top':'2px solid #df0011'});
    console.log($tab_li);
    $tab_li.hover(function(){
            this.style.backgroundColor='#fff';
            $(this).css({'border-top':'2px solid #df0011'})
          
                switch(this.index){

                    case 0:
                       
                        $('.same').css({'display':'none'});
                        $('.limit').css({'display':'block'});console.log(this.index);
                        break;
                    case 1:
                        $('.same').css({'display':'none'});
                        $('.hi').css({'display':'block'});console.log(this.index);
                        break;
                    case 2:
                        $('.same').css({'display':'none'});
                        $('.zhuangui').css({'display':'block'});console.log(this.index);
                        break;
                    case 3:
                        $('.same').css({'display':'none'});
                        $('.brandspecial').css({'display':'block'});console.log(this.index);
                        break;
                    
                }
            },function(){
            this.style.backgroundColor='#f0f0f0';
             $(this).css({'border-top':'none'})
    });









    var status=[200,304]
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
        if(status.includes(xhr.status)){
            var data=JSON.parse(xhr.responseText);
            console.log(data);
            $limit=$('.limit');
            $limit.html(data.map(function(item){
                return '<div class="good" data-size="'+item.size+'" data-id="'+item.id+'"><a href="#"><img src="../imges/product_'+item.id+'.jpg" /></a><p><span class="l_p">'+item.l_price+'</span><del>'+item.f_price+'</del></p><p>'+item.name+'</p><p class="_size">尺码：'+item.size+'</p></div>'
            }))



        console.log($('.good'))
    $('.good').on('click',function(){
        console.log($(this).attr('data-id'))
        var _id=$(this).attr('data-id')
        console.log(_id)
        location.href='../html/xiangqing.html?num='+_id;
    });




        }
    }
    xhr.open('get','../api/data/limittime.json');
    xhr.send();

    var xhr_1=new XMLHttpRequest();
    xhr_1.onload=function(){
        if(status.includes(xhr_1.status)){
            var data=JSON.parse(xhr_1.responseText);
            console.log(data);
            $hi=$('.hi');
            $hi.html(data.map(function(item){
                return '<div class="good" data-size="'+item.size+'" data-id="'+item.id+'"><a href="#"><img src="../imges/product_'+item.id+'.jpg" /></a><p><span class="l_p">'+item.l_price+'</span><del>'+item.f_price+'</del></p><p>'+item.name+'</p><p class="_size">尺码：'+item.size+'</p></div>'
            }))
            $('.good').on('click',function(){
                    console.log(this)
                    var _id=$(this).attr('data-id')
                    location.href='../html/xiangqing.html?num='+_id;
            });


        }
    }
    xhr_1.open('get','../api/data/hibuy.json');
    xhr_1.send();


    var xhr_2=new XMLHttpRequest();
    xhr_2.onload=function(){
        if(status.includes(xhr_2.status)){
            var data=JSON.parse(xhr_2.responseText);
            console.log(data);
            $zhuangui=$('.zhuangui');
            $zhuangui.html(data.map(function(item){
                return '<div class="good" data-size="'+item.size+'" data-id="'+item.id+'"><a href="#"><img src="../imges/product_'+item.id+'.jpg" /></a><p><span class="l_p">'+item.l_price+'</span><del>'+item.f_price+'</del></p><p>'+item.name+'</p><p class="_size">尺码：'+item.size+'</p></div>'
            }))
            $('.good').on('click',function(){
                var _id=$(this).attr('data-id')
                location.href='../html/xiangqing.html?num='+_id
            });


        }
    }
    xhr_2.open('get','../api/data/zhuangui.json');
    xhr_2.send();


    var xhr_3=new XMLHttpRequest();
    xhr_3.onload=function(){
        if(status.includes(xhr_3.status)){
            var data=JSON.parse(xhr_3.responseText);
            console.log(data);
            $brandspecial=$('.brandspecial');
            $brandspecial.html(data.map(function(item){
                return '<div class="good" data-size="'+item.size+'" data-id="'+item.id+'"><a href="#"><img src="../imges/product_'+item.id+'.jpg" /></a><p><span class="l_p">'+item.l_price+'</span><del>'+item.f_price+'</del></p><p>'+item.name+'</p><p class="_size">尺码：'+item.size+'</p></div>'
            }))
            $('.good').on('click',function(){
                var _id=$(this).attr('data-id');
                location.href='../html/xiangqing.html?num='+_id;
            });
        }
    }
    xhr_3.open('get','../api/data/brandspecial.json');
    xhr_3.send();





});