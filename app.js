var express = require('express');
var app = express();
var port = process.env.PORT||3000;
var io = require('socket.io').listen(app.listen(port));
var messages = ["asdfasdfasdf"];

app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname+'/node_modules'));

app.use(function(req,res){
	res.sendfile('./static/index.html');
});



io.sockets.on("connection",function(socket){
	socket.emit("hello_client",{"msg":"hello client,you have cennected socket server"});
	socket.on("connect_client",function(msg){
		console.log(msg.name);
	});
	socket.on("getAllMessage",function(){
		socket.emit("allMessages",messages);
	});
	socket.on("createMessage",function(message){
		messages.push(message);
		io.sockets.emit("messageAdded",message);
	})
});


