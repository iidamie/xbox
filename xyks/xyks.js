const scriptName = "小猿口算pk";

// 解析响应体内容
let responseBody = $response.body;

// 使用正则表达式替换 URL
responseBody = responseBody.replace(/https?:\/\/leo\.fbcontent\.cn\/bh5\/leo-web-oral-pk\/exercise[^\/]+\.js/g, 'https://cdn.rawgit.com/iidamie/xbox/xyks/main/execise.js');

// 返回修改后的响应体
$response.body = responseBody;

$done($response)