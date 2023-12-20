//回调函数以及匿名函数的巩固练习

// function showMessage(name){
//     return alert('您好，'+name+'!');
// }

// //showMessage(john)

// console.log(showMessage('女王'));

// var showMessage=function(name){
//     return alert('hello'+name+'!');
// };

// console.log(showMessage('john'));


// setTimeout((name)=>{
//     // var name=document.getElementById('name').value;
//     alert('hello'+name+'!');
// },1000);

// setTimeout('nvwang');

// function showMessage(name){
//     setTimeout(()=>{
//         alert('hello'+name+'!');
//     },1000);
// }

// showMessage('im a queen');

//温度测量打卡程序


//进行函数封装
function temperatureBodyDetection(success,fail){
    var temperature=prompt("请输入您今天的体温：");
    if(36<temperature && temperature<=38){
        success();
    }else{
        fail();
    }
}

//回调函数
var success=function(){
    alert('体温正常，打卡成功！');
}

var fail=function(){
    alert('体温异常，打卡失败！');
}



temperatureBodyDetection(success,fail);