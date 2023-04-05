// TODO: 待补充代码
const http = require("http");
const app = http.createServer();

app.on('request', (req, res) => {
    res.setHeader('Content-type', 'text/html;charset=utf8');
    if (req.url == '/news') {
        res.end(JSON.stringify([
            {
                "channelId": "5572a108b3cdc86cf39001cd",
                "name": "国内焦点"
            },
            {
                "channelId": "5572a108b3cdc86cf39001ce",
                "name": "国际焦点"
            }
        ]))
    } else {
        res.end('404');
    }
})

app.listen(8080, () => {
    console.log('Server is running on port 8080.')
})