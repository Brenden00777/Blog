const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res) {

res.write('It works')
res.end()

})

server.listen(port, function(error){
    if(error){
        console.log('somthing went wrong', error)
    } else{
        console.log('server is listening on port' + port)
    }
})