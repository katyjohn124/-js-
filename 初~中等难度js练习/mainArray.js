// let people = [
//     {name: "aaron",age: 65},
//     {name: "beth",age: 2},
//     {name: "cara",age: 13},
//     {name: "daniel",age: 3},
//     {name: "ella",age: 25},
//     {name: "fin",age: 1},
//     {name: "george",age: 43},
// ]

// //使用filter、map、reduce数组主要三种方法
// //filter在不改变原数组的情况下，过滤掉符合条件的元素并把他们返回到新数组
// const newPeople=people.filter(person=>person.age<=4);

// console.log(newPeople);

//map 迭代数组并把元素之前的顺序放进新的数组

// const firstNames=['野鸡','街道工作','super','ant','spider',]
// const lastName='man'

// const fullNames=firstNames.map(firstName=>firstName+lastName);

// console.log(fullNames);

//map 通过索引访问属性
const data=['wonder','街道工作','super','ant','spider',]

const male= 'man';
const female='woman';

const fullNames=data.map(function(firstName,index){
    return (index ==0 )?firstName + '-'+ female:firstName+'-'+male;
})

console.log(fullNames);

//reduce
