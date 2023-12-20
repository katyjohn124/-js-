
var calculate=document.getElementById('calculate');
calculate.addEventListener('click',function(){
    var shenGao=document.getElementById('shenGao').value;
    var tiZhong=document.getElementById('tiZhong').value;
    let BMI=tiZhong/(shenGao*shenGao);
    BMI=Math.round(BMI)//对值进行四舍五入取整数
    alert('您的BMI值是:'+BMI);
    console.log(BMI);
})







