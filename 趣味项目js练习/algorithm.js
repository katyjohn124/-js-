//该文件是练习队列和栈、js排序算法、js和树

//队列和栈
var queue = ["apple", "pear"];
function updateQueue() {
    //获取队列内容元素
    document.getElementById('queue-cont').textContent = '队列内容：' + queue.join('->');
}
//初始化队列
updateQueue();

//入队操作
document.getElementById('in-btn').addEventListener('click', function () {
    var newElement = document.getElementById('queue-input').value;
    if (newElement) {
        queue.push(newElement);
        updateQueue();
        document.getElementById('queue-input').value = '';//清空输入框内容
    }
})
//出队操作

//js排序算法

//js和树