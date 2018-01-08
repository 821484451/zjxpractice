$(document).ready(function(){
    var $username=$('.username');
    var $password=$('.pword');
    var $submit=$('#btn');
    $submit.on('click',function(){
        var $_username=$username.val();
        var $_password=$password.val();
        
        var status=[200,304];
        var xhr_login=new XMLHttpRequest();
        xhr_login.onload=function(){
            if(status.includes(xhr_login.status)){
                var res=xhr_login.responseText;
                if(res==='ok'){
                    alert('登录成功');
                    location.href='../index.html';

                }else if(res==='fail'){
                    alert('登陆失败');
                    location.href='../html/login.html';

                }

            }
        }
        xhr_login.open('get','../api/login.php?username='+$_username+'&password='+$_password );
        xhr_login.send();
    })
});