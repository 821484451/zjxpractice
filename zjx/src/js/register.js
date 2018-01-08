$(function(){
    // 获取元素
    var $username=$('.username');
    var $password=$('.setpassword');
    var $test_p=$('.test_p');
    var $test_v=$('.test_v');
    var $test_u=$('.test_u');
    var $test_c=$('.test_c');
    var $confirmpassword=$('.confirmpassword');
    var $verify=$('.verification');
    var $authCode=$('.authCode');
    var $btn=$('#btn');
   // 设置正则表达式
    var tel_regExp=/^1[3578]{1}[\d]{9}$/;
    var email_regExp=/^[\w]+[\@]{1}[\w\.]+$/i;
    var password_regExp=/^[\S]{1}[\w]{4,18}[\S]{1}$/;
    var confirm_regExp=/[\D]+/;

    $username.on('blur',function(){
        var $_username=$username.val();
        if(tel_regExp.test($_username)||email_regExp.test($_username)){
            $test_u.html('<img src="../imges/icon_ok.gif"/>')
             $test_u.attr('data-set',true);

        }else{
            $test_u.html('<img src="../imges/icon_error.gif" alt="" />请输入正确的用户名');
            $test_u.css({'color':'rgb(255,0,0)'});
            $test_u.attr('data-set',false);

        }
    })
    $password.on('blur',function(){
        var $_password=$password.val();
       
        if(password_regExp.test($_password)){
            $test_p.html('<img src="../imges/icon_ok.gif"/>')
             $test_p.attr('data-set',true);
        }else{
            $test_p.html('<img src="../imges/icon_error.gif" alt="" />密码长度是6-20位，请重新设置密码');
            $test_p.css({'color':'rgb(255,0,0)'});
            $test_p.attr('data-set',false);

        }
    })
    $confirmpassword.on('blur',function(){
        var $_password=$password.val();
        var $_confirm=$confirmpassword.val();
        if(confirm_regExp.test($_confirm)){
            if($_confirm===$_password){
                $test_c.html('<img src="../imges/icon_ok.gif"/>')
                 $test_c.attr('data-set',true);
            }else{
                $test_c.html('<img src="../imges/icon_error.gif" alt="" />两次密码输入不相同');
                $test_c.css({'color':'rgb(255,0,0)'});
                $test_c.attr('data-set',false);

            }
        }else{
            $test_c.html('<img src="../imges/icon_error.gif" alt="" />您设置的密码不够安全请重新设置');
            $test_c.css({'color':'rgb(255,0,0)'});
            $test_c.attr('data-set',false);
        }
       

    });
    $authCode.html(randomNumber(1000,9999));
    $authCode.css({'background-color':randomColor()});
    $verify.on('blur',function(){
        var $_verify=$verify.val();
        if($_verify===$authCode.html()){
            $test_v.html('<img src="../imges/icon_ok.gif"/>');
            $test_v.attr('data-set',true);
        }else{
            $test_v.html('<img src="../imges/icon_error.gif" alt="" />验证码错误');
            $test_v.css({'color':'rgb(255,0,0)'});
            $test_v.attr('data-set',false);
        }
    });
    $btn.on('click',function(){
       
        var value=$username.val()
        console.log(value!='')
       
        if($test_u.attr('data-set')==='true' && $test_p.attr('data-set')==='true' && $test_c.attr('data-set')==='true' && $test_v.attr('data-set')==='true' && value!=''){
           
                var status=[200,304]
                var xhr=new XMLHttpRequest();
                xhr.onload=function(){
                if(status.includes(xhr.status)){
                    var res=xhr.responseText;
                    if(res==='ok'){
                        alert('注册成功');
                        location.href='../html/login.html'
                        
                    }else if(res==='fail'){
                        alert('该用户名已被注册');
                        location.href='../html/register.html';

                    }
                    
                }
            }
            xhr.open('get','../api/reg.php?username='+$username.val()+'&password='+$password.val());
            xhr.send();
        }else{
            alert('对不起，您的注册信息有误');
            // location.href='../html/register.html'
          
        }
    })



})