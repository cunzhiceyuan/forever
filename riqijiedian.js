// 导入请求模块
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}${month}${day}`;
const link = `https://clashgithub.com/wp-content/uploads/rss/${formattedDate}.txt`;

// 使用HTTP请求获取订阅内容
$httpClient.get(link, function(error, response, data) {
    if (error) {
        console.log(`Error fetching data: ${error}`);
        $done({});
    } else {
        // 返回从URL获取的订阅数据
        $done({response: {status: 200, body: data}});
    }
});