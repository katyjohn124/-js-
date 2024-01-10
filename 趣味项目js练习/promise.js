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

// console.log('start');
// new Promise(resolve => {
//     setTimeout(() => {
//         throw new Error('bye bye!');
//     }, 3000);
// })
//     .then(value => {
//         console.log(value + '' + world);
//     })
//     .catch(error => {
//         console.log('Error:', error.message);
//     })

//百度前端技术学院练习题promise

//one
// const randomSleep = () => {
//     return new Promise((resolve => {
//         const randomTime = Math.floor(Math.random() * 10000) + 1000;
//         setTimeout(() => {
//             resolve();
//         }, randomTime);
//     }))
// };

// //测试用例

// console.log("STEP 1");
// randomSleep().then(() => {
//     // randomSleep（）函数执行完毕才打印 B
//     console.log("STEP 2");
// });
// console.log("STEP 3");


//two


const fakeFetchWeather = (endpoint) => {
    // TODO: 实现模拟获取天气信息
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (endpoint === "beijing") {
                resolve(
                    {
                        city: "beijing",
                        temperature: 2
                    }
                );
            } else {
                reject('接口信息错误');
            }
        }, 1000);
    })


};

// 测试用例
fakeFetchWeather("beijing")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
//{ city:"beijing", temperature: 2}

fakeFetchWeather("Paris")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
//接口信息错误
