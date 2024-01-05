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
console.log(result);


//对象属性


//test和exec方法


//字符串对象方法

