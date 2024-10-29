// 导入当前日期模块
const date = new Date();

// 生成当前日期的年月日
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

// 格式化日期
const formattedDate = `${year}${month}${day}`;

// 生成新的链接
const link = `https://clashgithub.com/wp-content/uploads/rss/${formattedDate}.txt`;

// 返回链接结果
$done({ url: link });