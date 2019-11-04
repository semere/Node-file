var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
    response.send('Hello Semere');
})
app.listen(3000, function(){
    console.log("Server running on port 3000");
});

