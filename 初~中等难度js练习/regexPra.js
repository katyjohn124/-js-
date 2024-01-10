//regexpe object
// var Reg = /\bis\b/g;
// var result = 'he is a good boy,and wanna practise English speaking! he is my friend!'.replace(Reg, 'Is')
// console.log(result);

//元字符
// var result = 'a1b2c3d4'.replace(/[abc]/g, 'X');
//[]元字符的类，分类
// var result = 'a1b2c3d4'.replace(/[^abc]/g, 'X');
// //^元字符取反
// console.log(result);

//范围类

// var result = 'a1b2c3d4g5z6'.replace(/[a-g]/g, 'L');
// var result = 'a1b2c3d4g5z6ABCDPJSIFZ'.replace(/[a-gA-I]/g, 'L');
// var result = '2000-10-09'.replace(/[0-9-]/g, 'L');


//js正则贪婪或非贪婪模式

// var result = '12345678'.replace(/\d{3,6}/g, 'X');
// var result = '12345678'.replace(/\d{3,6}?/g, 'X');
// console.log(result);


//分组，()是正则分组符号

// var result = '12345678'.replace(/\d([1-4])/g, 'X');
// console.log(result);


//正则表达练习

// 判断是否为邮箱地址,返回一个布尔值
function isEmail(emailStr) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //返回一个布尔值
    return regex.test(emailStr);
}
//测试用例
console.log(isEmail("123456789@qq.com")); //-> true
console.log(isEmail("jack@baidu.com")); //-> true
console.log(isEmail("jackbaidu.com")); //-> false

// 判断是否为手机号，返回一个布尔值
function isMobilePhone(phone) {
    // var regex = /^[1]+([3-9])+[0-9]{9}$/;
    var regex = /^1[3-9]\d{9}$/;
    return regex.test(phone);
}

//测试用例
console.log(isMobilePhone("13826022618")); //-> true
console.log(isMobilePhone("dfhsuh343")); //-> false


//利用正则表达式，去除字符串中重复的字母,返回去重之后的字符串
function removeDuplicate(str) {
    return str.replace(/(.)\1+/g, "$1");
}
//测试用例
console.log(removeDuplicate("aab")); //->"ab"
console.log(removeDuplicate("aaabccccc")); //->"abc"
console.log(removeDuplicate("aaaaaabbbbbbbccccccc")); //->"abc"

//利用正则表达式处理字符串，将连字符式字符串转化为小驼峰式命名并返回
function toSmallHump(str) {
    return str.replace(/-([a-z])/g, function (match, p1) {
        return p1.toUpperCase();
    });
}

//测试用例
console.log(toSmallHump("get-element-by-id")); //->"getElementById"
console.log(toSmallHump("data-id")); //->"dataId"

//获取 url 中的参数
function getUrlParam(url, key) {
    var regex = new RegExp('[?&]' + key + '=([^&#]*)', 'i');
    var match = regex.exec(url);
    return match ? decodeURIComponent(match[1]) : null;
}

//测试用例
console.log(getUrlParam("http://xxxx.com?name=jackson&id=123", "name")); //->"jackson"
console.log(getUrlParam("http://xxxx.com?name=jackson&id=123", "id")); //->"123"
console.log(getUrlParam("http://xxxx.com?suck=shwjjqq111&id=shjahah1", "suck")); 