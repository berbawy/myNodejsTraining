var http    =   require('http'),
     fs      =   require('fs'),
     port    =   3000;
http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function (error,data){
        if(error){
            res.writeHead(404)
            res.write('File not Found')
        }else{
            res.write(data)
        }
        res.end()
    })

}).listen(3000);

console.log("Success, i'm listening from port" + port);