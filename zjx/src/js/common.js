/**
 * [输出某个范围的随机正整数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回值]
 */
function randomNumber(min,max){
    return parseInt(Math.random()*(max-min+1)+min) ;

}
/**
 * [随机颜色]
 * @return {string} [返回值]
 */
function randomColor(){
    return 'rgb('+randomNumber(0,255)+','+randomNumber(0,255)+','+randomNumber(0,255)+')';
    
}
/**
 * [计算某个数的平方]
 * @param  {Number} num [参数]
 * @return {Number}     [返回值]
 */
function pf(num){
            return num*num;
        }
/**
 * [计算某个数的立方]
 * @param  {Number} n [参数]
 * @return {Number}   [返回值]
 */
 function lf(n){
            return n*n*n ;
        }
/**
  * [得到几行几列的表格]
  * @param  {Number} _row [表格的行]
  * @param  {Number} _col [表格的列]
  * @return {string}      [返回值]
  */
 function table(_row,_col){
    document.write('<table style="border-collapse:collapse;margin:50px auto;">');
        for(var i =1;i<=_row;i++){
            document.write('<tr>');
            for(var j=1;j<=_col;j++){
                document.write('<td style="border:1px solid #000;width:80px;height:50px;text-align:center;line-height:50px;">我是表格</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
}
/**
 * [16进制随机颜色]
 * @return {string} [随机的16进制]
 */
function getColor(){
            var color='0123456789abcdef';
             var zhi ='#';
            for(var i=0;i<6;i++){
                zhi+=color.charAt(randomNumber(0,15));
            }
            return zhi;

        }