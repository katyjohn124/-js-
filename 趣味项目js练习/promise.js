//promise异步知识巩固与练习

//定时执行
// console.log('here we go!');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('that is a big deal');
//     }, 3000);
// })
//     .then(value => {
//         console.log(value + 'really?');
//     })

//promise的两步执行
// console.log('here we go!');
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('that is a big deal');
//     }, 3000);
// })
//     .then(value => {
//         //先输出后，再返回一个新promise实例
//         console.log('hello!');
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('come on!')
//             }, 4000);
//         })
//     })
//     .then(value => {
//         console.log(value + 'really?');
//     })

//假设promise已经完成，then该怎么办呢？
// console.log('start');

// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('promise have finished!');
//         resolve('hello word');
//     }, 1000);

// })

// setTimeout(() => {
//     promise.then(value => {
//         console.log(value + '' + 'i promise you!');
//     })
// }, 3000);

//then的嵌套

// console.log('start');

// new Promise(resolve => {
//     console.log('step 1')
//     setTimeout(() => {
//         resolve(100);
//     }, 2000);
// })
//     .then(value => {
//         return new Promise(resolve => {
//             console.log('step 1-1');
//             setTimeout(() => {
//                 resolve(110);
//             }, 3000);
//         })
//             .then(value => {
//                 console.log('step 1-2');
//                 return value;
//             })
//             .then(value => {
//                 console.log('step 1-3');
//                 return value;
//             })
//     })
//     .then(value => {
//         console.log(value);
//         console.log('step 2');
//     })


//promise的错误处理

console.log('start');
new Promise(resolve => {
    setTimeout(() => {
        throw new Error('bye bye!');
    }, 3000);
})
    .then(value => {
        console.log(value + '' + world);
    })
    .catch(error => {
        console.log('Error:', error.message);
    })