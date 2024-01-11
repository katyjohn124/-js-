//ice-cream little project about 异步编程：回调、promise、async/await
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple", "orange"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

}
//回调地狱例子
// let order = (fruit_name, call_production) => {
//     setTimeout(function () {
//         console.log(`${stocks.fruits[fruit_name]} was selected!`);
//         call_production();
//     }, 2000);
// }

// let production = () => {
//     setTimeout(() => {
//         console.log('production was started')
//         setTimeout(() => {
//             console.log('the fruits was chopped')
//             setTimeout(() => {
//                 console.log('water and ice has been added')
//                 // 省略....
//             }, 1000);
//         }, 2000);
//     }, 1000);
// }

//回调地狱的代码看起来很乱，可读性和可维护性较差
// order(3, production);



//promise重写冰淇淋店
let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);

        } else {
            reject(console.log('our shop is close'));
        }
    })
}

order(2000, () => console.log(`${stocks.fruits[2]} was selected!`))

    .then(() => {
        return order(1000, () => console.log('production has been started'))
    })
    .then(() => {
        return order(2000, () => console.log('fruits was chopped'))
    })
    .then(() => {
        return order(1000, () => console.log('water and ice was added'))
    })
    .then(() => {
        return order(1000, () => console.log('machine has been started'))
    })
    .then(() => {
        return order(2000, () => console.log('container has been selected'))
    })
    .then(() => {
        return order(3000, () => console.log('toppings has been selected'))
    })
    .then(() => {
        return order(2000, () => console.log('serve ice cream'))
    })

    .catch(() => {
        console.log('custom was left!')
    })

//async/await 重写冰淇淋店
// let is_shop_open = true;
//创建时间函数
// function time(ms) {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(resolve, ms);
//         } else {
//             reject(console.log('Shop is closed'));
//         }
//     })
// }

// //创建厨房函数
// async function kitchen() {
//     try {
//         await time(2000)
//         console.log(`${stocks.fruits[1]} was selected!`)

//         await time(1000)
//         console.log('production has started!')

//         await time(2000)
//         console.log('fruits has been chopped')

//         await time(1000)
//         console.log('water and ice has been added')

//         await time(1000)
//         console.log('machine has stared')

//         await time(2000)
//         console.log('container has been selected')

//         await time(3000)
//         console.log('toppings has been selected')

//         await time(2000)
//         console.log('serve ice cream!')

//     } catch (error) {
//         console.log('customer has left!')
//     }
// }

// kitchen();
