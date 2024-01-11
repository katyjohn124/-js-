//该文件是练习队列和栈、js排序算法、js和树

//队列和栈
// var queue = ["apple", "pear"];
// function updateQueue() {
//     //获取队列内容元素
//     document.getElementById('queue-cont').textContent = '队列内容：' + queue.join('->');
// }
// //初始化队列
// updateQueue();

// //入队操作
// document.getElementById('in-btn').addEventListener('click', function () {
//     var newElement = document.getElementById('queue-input').value;
//     if (newElement) {
//         queue.push(newElement);
//         updateQueue();
//         document.getElementById('queue-input').value = '';//清空输入框内容
//     }
// })
// //出队操作
// document.getElementById('out-btn').addEventListener('click', function () {
//     var oldElement = document.getElementById('queue-cont');
//     if (oldElement) {
//         queue.shift(oldElement);
//         updateQueue();
//     } else {
//         alert('队列已空，无法出队');
//     }

// })

// //打印头元素
// document.getElementById('font-btn').addEventListener('click', function () {
//     if (queue.length > 0) {
//         alert('队列头元素是:' + queue[queue.length - 1]);
//     } else {
//         alert('队列已空，无法出队');
//     }
// })

// //判断队列是否为空
// document.getElementById('empty-btn').addEventListener('click', function () {
//     alert('队列' + (queue.length === 0 ? '为空' : '不为空'));
// })




//js排序算法-冒泡排序、选择排序、插入排序、快速排序
let arr = [];

document.getElementById('randomArr').addEventListener('click', function () {
    //利用arrayfrom 来生成新数组
    arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100) + 1);
    var showArr = document.getElementById('showArray');
    showArr.innerHTML = '数组为：' + arr;
})

function sortAndDisplay(sortFunction) {
    let sortedArray = sortFunction([...arr]); // 防止原数组被修改
    document.getElementById("showSortProcess").innerText = "排序结果: " + sortedArray.join(", ");
}

function bubbleSort(a) {
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}

function selectionSort(a) {
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            [a[i], a[minIndex]] = [a[minIndex], a[i]];
        }
    }
    return a;
}

function insertionSort(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let current = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > current) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = current;
    }
    return a;
}

function quickSort(a) {
    if (a.length <= 1) {
        return a;
    }
    let pivotIndex = Math.floor(a.length / 2);
    let pivot = a.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}



//js和树