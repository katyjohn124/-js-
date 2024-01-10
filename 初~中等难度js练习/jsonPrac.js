// var scoreObject = {
//     Tony: {
//         Math: 95,
//         English: 79,
//         Music: 68,
//     },
//     Simon: {
//         Math: 100,
//         English: 95,
//         Music: 98,
//     },
//     Annie: {
//         Math: 54,
//         English: 65,
//         Music: 88,
//     },
// };

// //编写函数，实现将 JavaScript 对象转化为 JSON 字符串
// function toJSON(obj) {
//     var myJson = JSON.stringify(obj);
//     console.log(myJson);
// }

// toJSON(scoreObject);


// var myJson = document.getElementById('jsonStr').value;
// function toObject(obj) {

//     var myObj = JSON.parse(obj);
//     console.log(myObj);

// }
// toObject(myJson);
// function toObject() {
//     var myJson = document.getElementById('jsonStr').value;

//     try {
//         var myObj = JSON.parse(myJson);
//         console.log(myObj);
//     } catch (e) {
//         console.error("Error parsing JSON: ", e);
//     }
// }
function ajax(url, options) {
    // 创建一个新的 XMLHttpRequest 对象
    var xhr = new XMLHttpRequest();

    // 提取 options 对象中的参数
    var type = options.type ? options.type.toUpperCase() : 'GET'; // 默认为 GET 请求
    var data = options.data;
    var onsuccess = options.onsuccess;
    var onfail = options.onfail;

    // 处理 data 对象，将其转换为 URL 编码字符串
    if (typeof data === 'object') {
        var dataStrings = [];
        for (var key in data) {
            dataStrings.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        data = dataStrings.join('&');
    }

    // 处理 GET 请求的 URL
    if (type === 'GET' && data) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + data;
    }

    // 配置请求
    xhr.open(type, url, true);

    // 设置请求头（对于 POST 请求）
    if (type === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    // 定义状态变化回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // 调用成功回调函数
                if (onsuccess) {
                    onsuccess(xhr.responseText, xhr);
                }
            } else {
                // 调用失败回调函数
                if (onfail) {
                    onfail(xhr);
                }
            }
        }
    };

    // 发送请求
    if (type === 'POST') {
        xhr.send(data);
    } else {
        xhr.send();
    }
}


ajax("http://localhost:8080/server/ajaxtest", {
    type: "post",
    data: {
        name: "simon",
        password: "123456"
    },
    onsuccess: function (responseText, xhr) {
        console.log("Success: " + responseText);
    },
    onfail: function (xhr) {
        console.log("Error: " + xhr.status);
    }
});



