//promise异步知识巩固与练习

//定时执行
console.log('here we go!');
new Promise(resolve => {
    setTimeout(() => {
        resolve('that is a big deal');
    }, 3000);
})
    .then(value => {
        console.log(value + 'really?');
    })
