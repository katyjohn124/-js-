function sumPrice(price,vip){
    // if(price>=300){
    //     price=price-30;
    //     return price;
    // }else if(price===200){
    //     price=price-10;
    //     return price;
    // }else if(price===100){
    //     price=price-5;
    //     return price;
    // }else if(vip===true){
    //     price=price*0.8;
    //     return price;
    // }else if((price===300||price===200||price===100)&&vip===true){
    //     price=(price*0.8)-30;
    //     return price;
    // }else{
    //    return price;
    // }

    //判断是否符合满减
    if(price>=300){
        price -=30;
    }else if(price>=200){
        price -=10;
    }else if(price>=100){
        price -=5;
    }
    //判断是否是vip
    if(vip){
        price *=0.98;
    }

    return Math.round(price);//四舍五入取整数
}

console.log(sumPrice(400,true));