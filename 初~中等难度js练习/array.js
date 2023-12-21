//foreach 遍历迭代
let numbers=[2,4,6,8,9,10,16];

let odd = 9;
//遍历且删除奇数
numbers.forEach(function(number){
    if(number===odd){
        numbers.shift();
    }
})

console.log(numbers);


//foreach 访问索引属性
const datas=['annie','john','katy','corna','chris'];

function loCall(name,index){
    console.log(`is the number ${index+1} student - ${name} present here? yes!`);
}

datas.forEach((data,index)=>loCall(data,index));