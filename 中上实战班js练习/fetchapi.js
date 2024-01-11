// var amount = document.getElementById('money').value;

// 当文档加载完成后，运行内部函数
document.addEventListener('DOMContentLoaded', function () {
    // 定义API的基础URL，替换YOUR-API-KEY为你从exchangerate-api.com获取的真实API密钥
    const apiURL = 'https://v6.exchangerate-api.com/v6/b39b6992520aa7f839939586';
    // 获取页面上的元素，以便我们可以与它们交互
    const fromCurrency = document.getElementById('from-money');
    const toCurrency = document.getElementById('to-money');
    const amountInput = document.getElementById('money');
    const resultDisplay = document.getElementById('result');
    const exchangeButton = document.getElementById('exchange');

    // 函数：从API获取货币列表，并填充到下拉框中
    async function populateCurrencies() {
        // 向API发送请求，获取以美元为基础货币的汇率
        const response = await fetch(`${apiURL}/latest/USD`);
        // 将响应解析为JSON格式
        const data = await response.json();
        // 从响应中获取货币代码列表
        const currencyKeys = Object.keys(data.conversion_rates);
        // 遍历货币代码，为每一个货币创建一个下拉选项，并添加到两个下拉框中
        currencyKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            fromCurrency.appendChild(option.cloneNode(true));
            toCurrency.appendChild(option);
        });
    }

    // 为"获取汇率"按钮添加点击事件监听器
    exchangeButton.addEventListener('click', async function () {
        // 获取用户从下拉框中选择的基础货币和目标货币，以及输入的金额
        const baseCurrency = fromCurrency.value;
        const targetCurrency = toCurrency.value;
        const amount = amountInput.value;
        // 如果用户没有输入金额或没有选择货币，显示错误消息
        if (!amount || !baseCurrency || !targetCurrency) {
            resultDisplay.textContent = 'Please enter an amount and select currencies.';
            return;
        }
        // 向API发送请求，获取基础货币和目标货币之间的汇率
        const response = await fetch(`${apiURL}/pair/${baseCurrency}/${targetCurrency}`);
        // 将响应解析为JSON格式
        const data = await response.json();
        // 从响应中获取汇率
        const exchangeRate = data.conversion_rate;
        // 使用获取到的汇率计算转换后的金额
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        // 在页面上显示转换后的金额
        resultDisplay.textContent = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
    });

    // 调用函数，初始化货币下拉框
    populateCurrencies();
});

