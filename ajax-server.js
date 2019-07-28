// 引入http,fs
const http = require('http');
const fs = require('fs');
// 搭建服务器对象
const server = http.createServer();
server.listen(8080, '172.20.10.2', () => {
    console.log('服务器已启用，可通过 http://172.20.10.2:8080 访问');
});
server.on('request', (req, res) => {
    console.log('请求进来拉~');
    // 请求静态资源
    // 根据url判断不同的页面
    if (req.url.startsWith('/views') || req.url.startsWith('/assets')) {
        // css文件要单独判断读取
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        fs.readFile('.' + req.url, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    }
    // 请求ajax
    // 如果以上都不是，就在这里做数据API请求--url参数
    else {
        if (req.url === '/getAllheros') {
            fs.readFile('./data/heros.json', (err, data) => {
                res.end(data);
            })
        }
    }
})