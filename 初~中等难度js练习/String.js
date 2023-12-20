//字符串＋
// function concatString(firstStr, lastStr) {
//     return firstStr+' '+lastStr;
//   }
  
//   // 测试用例
//   console.log(concatString("Jennie", "Kim")); // "Jennie Kim"
//   console.log(concatString(" Congratulation！", "you are the winner")); // "Congratulation！，you are the winner"


  //task two 饮水机app
  const data = [
    "monday - 500ml",
    "mONday - 330",
    "monday - 150ml",
    "Tuesday - 100ml",
    "Tuesday - 330ml",
    "weDnesDay - 230",
    "TursDAy - 330ml",
    "Friday - 500",
    "Saturday - 100ml",
    "sunday - 250",
    "sunday - 100ml",
  ];

  //数据格式化
const formatData=data.map((item)=>{
    //把星期和数值分开
    let [day,mount]=item.split(' - ');
    //把星期的字符串大小格式弄好
    day=day.charAt(0).toUpperCase()+day.slice(1).toLowerCase();

    //mount后面添加上单位
    if(!mount.includes('ml')){
      mount +='ml';
    }

    //把-变成：号
    return `${day}:${mount}`;

})

  //数据检索
const query=(day,data)=>{
  const formatDay=day.charAt(0).toUpperCase()+day.slice(0).toLowerCase();
  //过滤并且返回新数组
  return data.filter(item=>item.startsWith(formatDay));

}

  //判断用户饮水量是否达标

  const calculateDrinkWater=day=>{
    const results=query(day,formatData);
    const total=0;

    
  results.forEach(item => {
    const amount = parseInt(item.match(/\d+/)[0]);
    total += amount;
  });

  if (total >= 500) {
    console.log(`您在星期${day.trim()}的饮水量达标啦！`);
  } else {
    console.log(`您在星期${day.trim()}的饮水量没有达标！`);
  }
};

// 测试用例
calculateDrinkWater(" Tuesday   "); // 应该显示饮水量是否达标的信息
calculateDrinkWater("Friday"); // 应该显示饮水量是否达标的信息